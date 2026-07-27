import { createReadStream, existsSync } from "node:fs";

import { CambClient, CambApi } from "@camb-ai/sdk";

const apiKey = process.env.CAMB_API_KEY;
const mediaUrl = process.env.CAMB_MEDIA_URL;
const mediaFile = process.env.CAMB_MEDIA_FILE;

if (!apiKey) {
    console.error("Missing CAMB_API_KEY environment variable.");
    process.exit(1);
}

const client = new CambClient({ apiKey });

function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

function getMediaInput() {
    if (mediaUrl) {
        return { media_url: mediaUrl };
    }

    if (mediaFile) {
        if (!existsSync(mediaFile)) {
            throw new Error(`CAMB_MEDIA_FILE does not exist: ${mediaFile}`);
        }
        return { media_file: createReadStream(mediaFile) };
    }

    return undefined;
}

async function main() {
    const mediaInput = getMediaInput();
    if (!mediaInput) {
        console.error(
            "Set CAMB_MEDIA_URL for a remote file or CAMB_MEDIA_FILE for a local upload.",
        );
        process.exit(2);
    }

    console.log("Creating transcription task...");
    const createResponse = await client.transcription.createTranscription({
        language: CambApi.Languages.EN_US,
        ...mediaInput,
        transcription_mode: "slow",
        formatting_options: {
            max_segment_duration_in_seconds: 7, // Default: 7 seconds; caps each segment length.
            min_segment_duration_in_seconds: 1, // Default: 1 second; avoids very short segments when possible.
            max_characters_in_segment: 42, // Default: 42 characters; keeps subtitle-style lines readable.
        },
    });

    const taskId = createResponse.task_id;
    console.log(`Transcription task created with ID: ${taskId}`);

    if (!taskId) {
        console.error("Failed to get task ID.");
        return;
    }

    console.log("Polling for transcription status...");
    let attempts = 0;
    let runId;

    while (attempts < 60) {
        const statusResponse = await client.transcription.getTranscriptionTaskStatus({
            task_id: taskId,
        });

        console.log(`Current Status: ${statusResponse.status}`);

        if (statusResponse.status === "SUCCESS") {
            runId = statusResponse.run_id;
            break;
        } else if (statusResponse.status === "ERROR") {
            console.error("Transcription task failed!");
            console.error("Details:", JSON.stringify(statusResponse, null, 2));
            return;
        }

        await sleep(5);
        attempts++;
    }

    if (!runId) {
        console.error("Timeout waiting for transcription completion");
        return;
    }

    const result = await client.transcription.getTranscriptionResult({
        run_id: runId,
        format_type: CambApi.TranscriptFileFormat.Srt,
        data_type: CambApi.TranscriptDataType.RawData,
    });

    console.log("Transcript export:");
    console.log(result.transcript);
}

main().catch((error) => {
    console.error("Error:", error.message);
    if (error.body) {
        console.error("Details:", error.body);
    }
    process.exit(1);
});
