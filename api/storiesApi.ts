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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CreateTranslatedStoryRequestPayload } from '../model/createTranslatedStoryRequestPayload';
import { HTTPValidationError } from '../model/hTTPValidationError';
import { Languages } from '../model/languages';
import { OrchestratorPipelineResult } from '../model/orchestratorPipelineResult';
import { StoryRunInfoResponse } from '../model/storyRunInfoResponse';
import { TaskID } from '../model/taskID';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://client.camb.ai/apis';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum StoriesApiApiKeys {
    APIKeyHeader,
}

export class StoriesApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'APIKeyHeader': new ApiKeyAuth('header', 'x-api-key'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: StoriesApiApiKeys, value: string) {
        (this.authentications as any)[StoriesApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary Create Story
     * @param file The text file (&#x60;.txt&#x60;) or Word document (&#x60;.docx&#x60;) that its contents will be used for creating a story.
     * @param sourceLanguage The language of the contents in the input file.
     * @param title The title of the story.
     * @param description A brief description of the story.
     * @param narratorVoiceId Specifies the identifier of the AI voice that will narrate the story. This voice selection determines the tone, accent, and delivery style used to bring the contents of the uploaded .txt or .docx file to life.
     * @param chosenDictionaries An optional list of dictionary IDs selected by the user. Each entry must be an integer corresponding to a valid dictionary ID. If provided, at least one ID is required.
     */
    public async createStory (file: RequestFile, sourceLanguage: Languages, title?: string, description?: string, narratorVoiceId?: number, chosenDictionaries?: Array<number>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TaskID;  }> {
        const localVarPath = this.basePath + '/story';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling createStory.');
        }

        // verify required parameter 'sourceLanguage' is not null or undefined
        if (sourceLanguage === null || sourceLanguage === undefined) {
            throw new Error('Required parameter sourceLanguage was null or undefined when calling createStory.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        if (file !== undefined) {
            localVarFormParams['file'] = file;
        }
        localVarUseFormData = true;

        if (title !== undefined) {
            localVarFormParams['title'] = ObjectSerializer.serialize(title, "string");
        }

        if (description !== undefined) {
            localVarFormParams['description'] = ObjectSerializer.serialize(description, "string");
        }

        if (sourceLanguage !== undefined) {
            localVarFormParams['source_language'] = ObjectSerializer.serialize(sourceLanguage, "Languages");
        }

        if (narratorVoiceId !== undefined) {
            localVarFormParams['narrator_voice_id'] = ObjectSerializer.serialize(narratorVoiceId, "number");
        }

        if (chosenDictionaries !== undefined) {
            localVarFormParams['chosen_dictionaries'] = ObjectSerializer.serialize(chosenDictionaries, "Array<number>");
        }

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.APIKeyHeader.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.APIKeyHeader.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: TaskID;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "TaskID");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Create Translated Story
     * @param runId 
     * @param createTranslatedStoryRequestPayload 
     */
    public async createTranslatedStory (runId: number, createTranslatedStoryRequestPayload: CreateTranslatedStoryRequestPayload, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TaskID;  }> {
        const localVarPath = this.basePath + '/translated-story/{run_id}'
            .replace('{' + 'run_id' + '}', encodeURIComponent(String(runId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new Error('Required parameter runId was null or undefined when calling createTranslatedStory.');
        }

        // verify required parameter 'createTranslatedStoryRequestPayload' is not null or undefined
        if (createTranslatedStoryRequestPayload === null || createTranslatedStoryRequestPayload === undefined) {
            throw new Error('Required parameter createTranslatedStoryRequestPayload was null or undefined when calling createTranslatedStory.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createTranslatedStoryRequestPayload, "CreateTranslatedStoryRequestPayload")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.APIKeyHeader.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.APIKeyHeader.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: TaskID;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "TaskID");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Get Story Run Info
     * @param runId 
     * @param includeTranscript 
     */
    public async getStoryRunInfoById (runId: number, includeTranscript?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: StoryRunInfoResponse;  }> {
        const localVarPath = this.basePath + '/story-result/{run_id}'
            .replace('{' + 'run_id' + '}', encodeURIComponent(String(runId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new Error('Required parameter runId was null or undefined when calling getStoryRunInfoById.');
        }

        if (includeTranscript !== undefined) {
            localVarQueryParameters['include_transcript'] = ObjectSerializer.serialize(includeTranscript, "boolean");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.APIKeyHeader.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.APIKeyHeader.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: StoryRunInfoResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "StoryRunInfoResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Get Translated Story Run Info
     * @param runId 
     * @param targetLanguage 
     * @param includeTranscript 
     */
    public async getTranslatedStoryRunInfo (runId: number, targetLanguage: Languages, includeTranscript?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: StoryRunInfoResponse;  }> {
        const localVarPath = this.basePath + '/translated-story-result/{run_id}/{target_language}'
            .replace('{' + 'run_id' + '}', encodeURIComponent(String(runId)))
            .replace('{' + 'target_language' + '}', encodeURIComponent(String(targetLanguage)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new Error('Required parameter runId was null or undefined when calling getTranslatedStoryRunInfo.');
        }

        // verify required parameter 'targetLanguage' is not null or undefined
        if (targetLanguage === null || targetLanguage === undefined) {
            throw new Error('Required parameter targetLanguage was null or undefined when calling getTranslatedStoryRunInfo.');
        }

        if (includeTranscript !== undefined) {
            localVarQueryParameters['include_transcript'] = ObjectSerializer.serialize(includeTranscript, "boolean");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.APIKeyHeader.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.APIKeyHeader.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: StoryRunInfoResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "StoryRunInfoResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Get Translated Story Status
     * @param taskId 
     */
    public async getTranslatedStoryStatusById (taskId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: OrchestratorPipelineResult;  }> {
        const localVarPath = this.basePath + '/translated-story/{task_id}'
            .replace('{' + 'task_id' + '}', encodeURIComponent(String(taskId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'taskId' is not null or undefined
        if (taskId === null || taskId === undefined) {
            throw new Error('Required parameter taskId was null or undefined when calling getTranslatedStoryStatusById.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.APIKeyHeader.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.APIKeyHeader.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: OrchestratorPipelineResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "OrchestratorPipelineResult");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
