import assert from "node:assert/strict";
import test from "node:test";
import { CambApi, CambClient } from "../dist/index.js";

const base = {
    video_url: "https://example.com/video.mp4",
    source_language: CambApi.Languages.EN_US,
    target_languages: [CambApi.Languages.ES_ES],
};
const source = { content: "1\n00:00:01,000 --> 00:00:03,000\nHello\n" };
const target = {
    language: CambApi.Languages.ES_ES,
    format: "srt",
    content: "1\n00:00:01,000 --> 00:00:03,000\n¡Hola!\n",
};

function mockClient(status = 200, responseBody = { task_id: "srt-task" }) {
    const requests = [];
    const client = new CambClient({
        apiKey: "test-key",
        fetch: async (url, init) => {
            requests.push({ url: String(url), init, body: JSON.parse(init.body) });
            return new Response(JSON.stringify(responseBody), {
                status,
                headers: { "content-type": "application/json" },
            });
        },
    });
    return { client, requests };
}

for (const raw of [false, true]) {
    for (const [name, scripts] of Object.entries({
        omitted: {},
        undefined: { source_transcript: undefined, target_transcripts: undefined },
        null: { source_transcript: null, target_transcripts: null },
        source: { source_transcript: source },
        target: { target_transcripts: [target] },
        both: { source_transcript: source, target_transcripts: [target] },
        locale: { target_transcripts: [{ ...target, language: "es-es" }] },
    })) {
        test(`${raw ? "raw" : "normal"} response: ${name} scripts`, async () => {
            const { client, requests } = mockClient();
            const request = { ...base, ...scripts, transcription_mode: "fast" };
            const pending = client.dub.endToEndDubbing(request);
            const result = raw ? (await pending.withRawResponse()).data : await pending;
            assert.equal(result.task_id, "srt-task");
            assert.equal(requests.length, 1);
            assert.equal(requests[0].init.method, "POST");
            assert.ok(requests[0].url.endsWith("/dub"));
            assert.deepEqual(requests[0].body, JSON.parse(JSON.stringify(request)));
        });
    }

    test(`${raw ? "raw" : "normal"} response preserves 422 field details`, async () => {
        const body = { detail: [{ loc: ["body", "source_transcript", "content"], msg: "SRT content could not be parsed", type: "value_error" }] };
        const { client } = mockClient(422, body);
        const pending = client.dub.endToEndDubbing({ ...base, source_transcript: { content: "invalid" } });
        await assert.rejects(raw ? pending.withRawResponse() : pending, (error) => {
            assert.ok(error instanceof CambApi.UnprocessableEntityError);
            assert.equal(error.statusCode, 422);
            assert.deepEqual(error.body, body);
            return true;
        });
    });
}
