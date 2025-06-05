# Camb AI Node.js SDK 🎙️

[![npm version](https://img.shields.io/npm/v/cambai.svg?style=flat-square)](https://www.npmjs.com/package/cambai)
[![License](https://img.shields.io/npm/l/cambai.svg?style=flat-square)](https://github.com/Camb-ai/camb_ai_nodejs_sdk/blob/main/LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/Camb-ai/camb_ai_nodejs_sdk/node.js.yml?branch=main&style=flat-square)](https://github.com/Camb-ai/camb_ai_nodejs_sdk/actions)

The official Node.js SDK for interacting with Camb AI's powerful voice and audio generation APIs. Create expressive speech, unique voices, and rich soundscapes with just a few lines of JavaScript.

---

## ✨ Features
- **Dubbing**: Dub your videos into multiple languages with voice cloning!
- **Expressive Text-to-Speech**: Convert text into natural-sounding speech using a wide range of pre-existing voices.  
- **Generative Voices**: Create entirely new, unique voices from text prompts and descriptions.  
- **Soundscapes from Text**: Generate ambient audio and sound effects from textual descriptions.  
- Access to voice cloning, translation, and more (refer to full API documentation).

---

## 📦 Installation

Install the SDK using npm:

```bash
npm install cambai
```

Or using yarn:

```bash
yarn add cambai
```

Or directly from GitHub:

```bash
npm install git+https://github.com/Camb-ai/camb_ai_nodejs_sdk.git
```

---

## 🔑 Authentication

To use the Camb AI SDK, you'll need an API key. You can authenticate in either of the following ways:

### 1. Pass the API key directly

```javascript
const { CambAI, ApiKey } = require('cambai');

// Initialize the client with your API key
const client = new CambAI();
client.setApiKey(ApiKey.APIKeyHeader, "YOUR_CAMB_AI_API_KEY");
```

### 2. Use an environment variable
Set your API key as an environment variable named `CAMB_AI_API_KEY`:

```bash
export CAMB_AI_API_KEY="your_actual_api_key_here"
```

Then in your code:

```javascript
const { CambAI } = require('cambai');

// The SDK will automatically use the CAMB_AI_API_KEY environment variable
const client = new CambAI();
```

---

## 🚀 Getting Started: Examples

### 1. Text-to-Speech (TTS)

Convert text into spoken audio using one of Camb AI's high-quality voices.

```javascript
const { CambAI, ApiKey, OutputType, Languages } = require('cambai');

// Initialize client
const client = new CambAI();
client.setApiKey(ApiKey.APIKeyHeader, "YOUR_CAMB_AI_API_KEY");

async function generateSpeech() {
  try {
    console.log("Generating speech...");
    
    // Get audio URL (default output type)
    const audioUrl = await client.textToSpeech(
      "Hello from Camb AI! This is a test of our Text-to-Speech API.",
      20303,  // Example voice ID, find more with client.listVoices()
      Languages.NUMBER_1,  // English
      60,  // Timeout in seconds
      OutputType.FileUrl,  // Get a URL to the audio file
      undefined,  // No file path for saving
      true  // Verbose logging
    );
    
    console.log(`Success! Your audio is ready at: ${audioUrl}`);
    
    // Save to a file
    const filePath = "my_generated_speech.mp3";
    await client.textToSpeech(
      "This is another test, saving directly to a file.",
      20303,  // Example voice ID
      Languages.NUMBER_1,  // English
      60,  // Timeout in seconds
      OutputType.RawBytes,  // Get raw bytes for saving
      filePath,  // Save to this file
      true  // Verbose logging
    );
    
    console.log(`Success! Audio saved to ${filePath}`);
    
  } catch (error) {
    console.error("Error generating speech:", error);
  }
}

generateSpeech();
```

#### List Available Voices

You can list available voices to find a `voiceId` that suits your needs:

```javascript
async function listVoices() {
  try {
    const voices = await client.listVoices();
    console.log(`Found ${voices.length} voices:`);
    
    // Print first 5 as an example
    voices.slice(0, 5).forEach(voice => {
      console.log(`  - ID: ${voice.id}, Name: ${voice.voiceName}, Gender: ${voice.gender}, Language: ${voice.language}`);
    });
  } catch (error) {
    console.error("Could not list voices:", error);
  }
}

listVoices();
```

---

### 2. Text-to-Voice (Generative Voice)

Create completely new and unique voices from a textual description of the desired voice characteristics.

```javascript
const { CambAI, ApiKey } = require('cambai');

// Initialize client
const client = new CambAI();
client.setApiKey(ApiKey.APIKeyHeader, "YOUR_CAMB_AI_API_KEY");

async function generateVoice() {
  try {
    console.log("Generating a new voice and speech...");
    
    // Generate a voice from description
    const result = await client.textToVoice(
      "Crafting a unique voice with a hint of mystery and warmth.",
      "A smooth, baritone voice with a slight echo, perfect for storytelling.",
      60,  // Timeout in seconds
      true  // Verbose logging
    );
    
    console.log("Voice generation complete!");
    console.log("Sample URLs:", result.sampleUrls);
    
  } catch (error) {
    console.error("Error generating voice:", error);
  }
}

generateVoice();
```

---

### 3. Text-to-Audio (Sound Generation)

Generate sound effects or ambient audio from a descriptive prompt.

```javascript
const { CambAI, ApiKey } = require('cambai');
const fs = require('fs');

// Initialize client
const client = new CambAI();
client.setApiKey(ApiKey.APIKeyHeader, "YOUR_CAMB_AI_API_KEY");

async function generateSoundEffect() {
  const outputFile = "generated_sound_effect.mp3";
  
  try {
    console.log(`Generating sound effect and saving to ${outputFile}...`);
    
    const result = await client.textToAudio(
      "A gentle breeze rustling through autumn leaves in a quiet forest.",
      10,  // Duration in seconds
      60,  // Timeout in seconds
      true,  // Verbose logging
      outputFile  // Save to this file
    );
    
    console.log(`Success! Sound effect saved to ${outputFile}`);
    
  } catch (error) {
    console.error("Error generating sound effect:", error);
  }
}

generateSoundEffect();
```

---

## ⚙️ Advanced Usage & Other Features

The Camb AI SDK offers a wide range of capabilities beyond these examples, including:

* Voice Cloning
* Translated TTS
* Audio Dubbing
* Transcription
* And more!

Please refer to the [**Official Camb AI API Documentation**](https://docs.camb.ai/introduction) for a comprehensive list of features and advanced usage patterns.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---