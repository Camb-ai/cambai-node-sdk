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
import { Languages } from './languages';

export class VoiceItem {
    /**
    * A unique identifier for the voice record. Each voice is assigned a distinct `id` for reference
    */
    'id'?: number;
    /**
    * The name or label assigned to the voice.
    */
    'voiceName'?: string;
    /**
    * Represents the gender of the voice. Values are encoded as integers.
    */
    'gender'?: number;
    /**
    * The age of the voice represented as an integer. If the age is unknown or not applicable, the value is `null`.
    */
    'age'?: number;
    /**
    * A brief summary of the custom voice—e.g. its intended use, tone or character traits.
    */
    'description'?: string;
    /**
    * The transcribed text of the voice recording, if available.
    */
    'transcript'?: string;
    /**
    * Specifies whether the voice is shared on the marketplace or not.
    */
    'isPublished'?: boolean;
    /**
    * The language specified when creating the custom voice.
    */
    'language'?: Languages;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "voiceName",
            "baseName": "voice_name",
            "type": "string"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "number"
        },
        {
            "name": "age",
            "baseName": "age",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "transcript",
            "baseName": "transcript",
            "type": "string"
        },
        {
            "name": "isPublished",
            "baseName": "is_published",
            "type": "boolean"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "Languages"
        }    ];

    static getAttributeTypeMap() {
        return VoiceItem.attributeTypeMap;
    }
}

export namespace VoiceItem {
}
