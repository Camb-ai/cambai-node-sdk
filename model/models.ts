import localVarRequest from 'request';

export * from './audioOutputFileURLResponse';
export * from './audioOutputType';
export * from './audioSeparationRunInfoResponse';
export * from './bodyTranslateTranslatePost';
export * from './createAPIKeyRequestPayload';
export * from './createCustomVoiceOut';
export * from './createTTSRequestPayload';
export * from './createTTSStreamRequestPayload';
export * from './createTextToAudioRequestPayload';
export * from './createTextToVoiceRequestPayload';
export * from './createTranslatedStoryRequestPayload';
export * from './createTranslatedTTSRequestPayload';
export * from './createTranslationStreamRequestPayload';
export * from './dialogueItem';
export * from './dictionary';
export * from './dubAltFormatResponseBody';
export * from './dubbedOutputInAltFormatRequestPayload';
export * from './endToEndDubbingRequestPayload';
export * from './expireAPIKeyRequestPayload';
export * from './formalities';
export * from './gender';
export * from './hTTPValidationError';
export * from './languageItem';
export * from './languages';
export * from './orchestratorPipelineResult';
export * from './outputAPIKey';
export * from './outputFormat';
export * from './outputType';
export * from './requestDubbedOutputInAltFormat200Response';
export * from './runInfoResponse';
export * from './storyRunInfoResponse';
export * from './tTSStreamOutputFormat';
export * from './taskID';
export * from './taskStatus';
export * from './textToVoiceRunInfoResponse';
export * from './transcriptDataType';
export * from './transcriptFileFormat';
export * from './translationResult';
export * from './validationError';
export * from './validationErrorLocInner';
export * from './videoOutputTypeWithoutAVI';
export * from './voiceItem';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AudioOutputFileURLResponse } from './audioOutputFileURLResponse';
import { AudioOutputType } from './audioOutputType';
import { AudioSeparationRunInfoResponse } from './audioSeparationRunInfoResponse';
import { BodyTranslateTranslatePost } from './bodyTranslateTranslatePost';
import { CreateAPIKeyRequestPayload } from './createAPIKeyRequestPayload';
import { CreateCustomVoiceOut } from './createCustomVoiceOut';
import { CreateTTSRequestPayload } from './createTTSRequestPayload';
import { CreateTTSStreamRequestPayload } from './createTTSStreamRequestPayload';
import { CreateTextToAudioRequestPayload } from './createTextToAudioRequestPayload';
import { CreateTextToVoiceRequestPayload } from './createTextToVoiceRequestPayload';
import { CreateTranslatedStoryRequestPayload } from './createTranslatedStoryRequestPayload';
import { CreateTranslatedTTSRequestPayload } from './createTranslatedTTSRequestPayload';
import { CreateTranslationStreamRequestPayload } from './createTranslationStreamRequestPayload';
import { DialogueItem } from './dialogueItem';
import { Dictionary } from './dictionary';
import { DubAltFormatResponseBody } from './dubAltFormatResponseBody';
import { DubbedOutputInAltFormatRequestPayload } from './dubbedOutputInAltFormatRequestPayload';
import { EndToEndDubbingRequestPayload } from './endToEndDubbingRequestPayload';
import { ExpireAPIKeyRequestPayload } from './expireAPIKeyRequestPayload';
import { Formalities } from './formalities';
import { Gender } from './gender';
import { HTTPValidationError } from './hTTPValidationError';
import { LanguageItem } from './languageItem';
import { Languages } from './languages';
import { OrchestratorPipelineResult } from './orchestratorPipelineResult';
import { OutputAPIKey } from './outputAPIKey';
import { OutputFormat } from './outputFormat';
import { OutputType } from './outputType';
import { RequestDubbedOutputInAltFormat200Response } from './requestDubbedOutputInAltFormat200Response';
import { RunInfoResponse } from './runInfoResponse';
import { StoryRunInfoResponse } from './storyRunInfoResponse';
import { TTSStreamOutputFormat } from './tTSStreamOutputFormat';
import { TaskID } from './taskID';
import { TaskStatus } from './taskStatus';
import { TextToVoiceRunInfoResponse } from './textToVoiceRunInfoResponse';
import { TranscriptDataType } from './transcriptDataType';
import { TranscriptFileFormat } from './transcriptFileFormat';
import { TranslationResult } from './translationResult';
import { ValidationError } from './validationError';
import { ValidationErrorLocInner } from './validationErrorLocInner';
import { VideoOutputTypeWithoutAVI } from './videoOutputTypeWithoutAVI';
import { VoiceItem } from './voiceItem';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AudioOutputType": AudioOutputType,
        "Formalities": Formalities,
        "Gender": Gender,
        "Languages": Languages,
        "OutputType": OutputType,
        "TTSStreamOutputFormat": TTSStreamOutputFormat,
        "TaskStatus": TaskStatus,
        "TranscriptDataType": TranscriptDataType,
        "TranscriptFileFormat": TranscriptFileFormat,
        "VideoOutputTypeWithoutAVI": VideoOutputTypeWithoutAVI,
}

let typeMap: {[index: string]: any} = {
    "AudioOutputFileURLResponse": AudioOutputFileURLResponse,
    "AudioSeparationRunInfoResponse": AudioSeparationRunInfoResponse,
    "BodyTranslateTranslatePost": BodyTranslateTranslatePost,
    "CreateAPIKeyRequestPayload": CreateAPIKeyRequestPayload,
    "CreateCustomVoiceOut": CreateCustomVoiceOut,
    "CreateTTSRequestPayload": CreateTTSRequestPayload,
    "CreateTTSStreamRequestPayload": CreateTTSStreamRequestPayload,
    "CreateTextToAudioRequestPayload": CreateTextToAudioRequestPayload,
    "CreateTextToVoiceRequestPayload": CreateTextToVoiceRequestPayload,
    "CreateTranslatedStoryRequestPayload": CreateTranslatedStoryRequestPayload,
    "CreateTranslatedTTSRequestPayload": CreateTranslatedTTSRequestPayload,
    "CreateTranslationStreamRequestPayload": CreateTranslationStreamRequestPayload,
    "DialogueItem": DialogueItem,
    "Dictionary": Dictionary,
    "DubAltFormatResponseBody": DubAltFormatResponseBody,
    "DubbedOutputInAltFormatRequestPayload": DubbedOutputInAltFormatRequestPayload,
    "EndToEndDubbingRequestPayload": EndToEndDubbingRequestPayload,
    "ExpireAPIKeyRequestPayload": ExpireAPIKeyRequestPayload,
    "HTTPValidationError": HTTPValidationError,
    "LanguageItem": LanguageItem,
    "OrchestratorPipelineResult": OrchestratorPipelineResult,
    "OutputAPIKey": OutputAPIKey,
    "OutputFormat": OutputFormat,
    "RequestDubbedOutputInAltFormat200Response": RequestDubbedOutputInAltFormat200Response,
    "RunInfoResponse": RunInfoResponse,
    "StoryRunInfoResponse": StoryRunInfoResponse,
    "TaskID": TaskID,
    "TextToVoiceRunInfoResponse": TextToVoiceRunInfoResponse,
    "TranslationResult": TranslationResult,
    "ValidationError": ValidationError,
    "ValidationErrorLocInner": ValidationErrorLocInner,
    "VoiceItem": VoiceItem,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
