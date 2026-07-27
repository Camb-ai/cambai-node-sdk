import { CambClient, CambApi } from "@camb-ai/sdk";

const apiKey = process.env.CAMB_API_KEY;
const mediaUrl = process.env.CAMB_MEDIA_URL;

if (!apiKey) {
    console.error("Missing CAMB_API_KEY environment variable.");
    process.exit(1);
}

if (!mediaUrl) {
    console.error("Missing CAMB_MEDIA_URL environment variable.");
    process.exit(2);
}

const client = new CambClient({ apiKey });

function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function main() {
    console.log("Creating subtitle task...");
    const createResponse = await client.subtitles.createSubtitle({
        source_language: CambApi.Languages.EN_US,
        target_languages: [CambApi.Languages.ES_ES],
        media_url: mediaUrl,
        transcription_mode: "fast",
        formatting_options: {
            max_segment_duration_in_seconds: 7, // Default: 7 seconds; caps each subtitle segment length.
            min_segment_duration_in_seconds: 1, // Default: 1 second; avoids very short subtitle flashes.
            max_characters_in_segment: 42, // Default: 42 characters; keeps subtitle lines readable.
        },
    });

    const taskId = createResponse.task_id;
    console.log(`Subtitle task created with ID: ${taskId}`);

    if (!taskId) {
        console.error("Failed to get task ID.");
        return;
    }

    console.log("Polling for subtitle status...");
    let attempts = 0;
    let runId;

    while (attempts < 60) {
        const statusResponse = await client.subtitles.getSubtitleTaskStatus({
            task_id: taskId,
        });

        console.log(`Current Status: ${statusResponse.status}`);

        if (statusResponse.status === "SUCCESS") {
            runId = statusResponse.run_id;
            break;
        } else if (statusResponse.status === "ERROR") {
            console.error("Subtitle task failed!");
            console.error("Details:", JSON.stringify(statusResponse, null, 2));
            return;
        }

        await sleep(5);
        attempts++;
    }

    if (!runId) {
        console.error("Timeout waiting for subtitle completion");
        return;
    }

    const result = await client.subtitles.getSubtitleResultForLanguage({
        run_id: runId,
        language: CambApi.Languages.ES_ES,
        format_type: CambApi.TranscriptFileFormat.Vtt,
        data_type: CambApi.TranscriptDataType.RawData,
    });

    console.log("Subtitle export:");
    console.log(result.transcript);
}

main().catch((error) => {
    console.error("Error:", error.message);
    if (error.body) {
        console.error("Details:", error.body);
    }
    process.exit(1);
});
