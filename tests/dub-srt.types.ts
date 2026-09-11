import { CambApi, CambClient } from "../dist/index.js";

const source: CambApi.DubSRTInput = { content: "SRT text" };
const target: CambApi.DubTargetSRTInput = {
    content: "Translated SRT text",
    language: CambApi.Languages.ES_ES,
    format: "srt",
};
const request: CambApi.EndToEndDubbingRequestPayload = {
    video_url: "https://example.com/video.mp4",
    source_language: CambApi.Languages.EN_US,
    target_languages: [CambApi.Languages.ES_ES],
    source_transcript: source,
    target_transcripts: [target],
};
const locale: CambApi.DubTargetSRTInput = { ...target, language: "es-es" };
const numeric: CambApi.DubTargetSRTInput = { ...target, language: 54 };
// @ts-expect-error Only SRT is supported.
const unsupported: CambApi.DubSRTInput = { content: "text", format: "vtt" };
// @ts-expect-error Target scripts require a language.
const missingLanguage: CambApi.DubTargetSRTInput = { content: "text" };
// @ts-expect-error Scripts require text contents.
const missingContent: CambApi.DubSRTInput = { format: "srt" };

// Type-check both response paths without submitting a real job.
function checkClient(client: CambClient) {
    client.dub.endToEndDubbing(request);
    client.dub.endToEndDubbing(request).withRawResponse();
}
