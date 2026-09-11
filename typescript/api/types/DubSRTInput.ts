/** Inline SRT text, not a filename, URL, base64 string, or segment array.
 * SRT parsing and byte-size limits are enforced by the API.
 */
export interface DubSRTInput {
    content: string;
    /** Defaults to "srt" when omitted. */
    format?: "srt";
}
