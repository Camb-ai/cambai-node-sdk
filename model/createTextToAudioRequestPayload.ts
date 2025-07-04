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

export class CreateTextToAudioRequestPayload {
    /**
    * The text to be converted to audio.
    */
    'prompt'?: string;
    /**
    * The desired duration of the audio.
    */
    'duration'?: number = 8.0;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "prompt",
            "baseName": "prompt",
            "type": "string"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CreateTextToAudioRequestPayload.attributeTypeMap;
    }
}

