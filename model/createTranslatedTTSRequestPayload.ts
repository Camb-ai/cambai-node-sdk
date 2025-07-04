/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Formalities } from './formalities';
import { Gender } from './gender';
import { Languages } from './languages';

export class CreateTranslatedTTSRequestPayload {
    'text': string;
    'voiceId': number;
    'age'?: number | null;
    'formality'?: Formalities | null;
    'gender'?: Gender | null;
    'sourceLanguage': Languages;
    'targetLanguage': Languages;
    /**
    * An optional list of dictionary IDs selected by the user. Each entry must be an integer corresponding to a valid dictionary ID. If provided, at least one ID is required.
    */
    'chosenDictionaries'?: Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "voiceId",
            "baseName": "voice_id",
            "type": "number"
        },
        {
            "name": "age",
            "baseName": "age",
            "type": "number"
        },
        {
            "name": "formality",
            "baseName": "formality",
            "type": "Formalities"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "Gender"
        },
        {
            "name": "sourceLanguage",
            "baseName": "source_language",
            "type": "Languages"
        },
        {
            "name": "targetLanguage",
            "baseName": "target_language",
            "type": "Languages"
        },
        {
            "name": "chosenDictionaries",
            "baseName": "chosen_dictionaries",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return CreateTranslatedTTSRequestPayload.attributeTypeMap;
    }
}

export namespace CreateTranslatedTTSRequestPayload {
}
