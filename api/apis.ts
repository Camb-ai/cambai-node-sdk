export * from './apisApi';
import { CambAI } from './apisApi';
export * from './audioSeparationApi';
import { AudioSeparationApi } from './audioSeparationApi';
export * from './dictionariesApi';
import { DictionariesApi } from './dictionariesApi';
export * from './dubApi';
import { DubApi } from './dubApi';
export * from './storiesApi';
import { StoriesApi } from './storiesApi';
export * from './textToAudioApi';
import { TextToAudioApi } from './textToAudioApi';
export * from './textToSpeechApi';
import { TextToSpeechApi } from './textToSpeechApi';
export * from './textToVoiceApi';
import { TextToVoiceApi } from './textToVoiceApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [CambAI, AudioSeparationApi, DictionariesApi, DubApi, StoriesApi, TextToAudioApi, TextToSpeechApi, TextToVoiceApi];
