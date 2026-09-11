import type { DubSRTInput } from "./DubSRTInput.js";
import type { Languages } from "./Languages.js";

/** Translated SRT for one of the requested target languages. */
export interface DubTargetSRTInput extends DubSRTInput {
    /** Prefer Languages enum values; numeric IDs and locale strings are also accepted. */
    language: Languages | number | string;
}
