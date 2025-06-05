const cambai = require('./dist/api.js');

async function testConvenienceMethods() {
    console.log('Starting Camb AI SDK Convenience Methods Tests...');
    console.log('================================================================================');

    try {
        // Initialize the API client
        console.log('Creating API instance...');
        const API_KEY = 'dfa846b6-812c-432d-8dde-43a3fbe31e85';
        const apiClient = new cambai.CambAI();
        apiClient.setApiKey(cambai.ApiKey.APIKeyHeader, API_KEY);
        console.log('API instance created successfully');
        console.log('================================================================================');

        // Test 1a: Text-to-Speech convenience method (URL output)
        console.log('Test 1a: Testing textToSpeech convenience method (URL output)...');
        try {
            const audioUrl = await apiClient.textToSpeech(
                'Hello World, this is a test of the convenience method!',
                20303, // Voice ID
                cambai.Languages.NUMBER_1, // Language (English)
                60, // Timeout
                cambai.OutputType.FileUrl, // Output type
                undefined, // No file save
                true // Verbose
            );
            console.log('✅ Text-to-Speech (URL) completed successfully!');
            console.log('Audio URL:', audioUrl);
        } catch (error) {
            console.error('❌ Text-to-Speech (URL) failed:', error.message);
        }

        console.log('================================================================================');

        // Test 1b: Text-to-Speech convenience method (File save)
        console.log('Test 1b: Testing textToSpeech convenience method (File save)...');
        try {
            const result = await apiClient.textToSpeech(
                'This audio will be saved to a file!',
                20303, // Voice ID
                cambai.Languages.NUMBER_1, // Language (English)
                60, // Timeout
                cambai.OutputType.RawBytes, // Output type for file saving
                'test_tts_output.wav', // Save to file
                true // Verbose
            );
            console.log('✅ Text-to-Speech (File save) completed successfully!');
            console.log('Result:', result);
        } catch (error) {
            console.error('❌ Text-to-Speech (File save) failed:', error.message);
        }

        console.log('================================================================================');

        // Test 2: Text-to-Audio convenience method (File save)
        console.log('Test 2: Testing textToAudio convenience method (File save)...');
        try {
            const result = await apiClient.textToAudio(
                'Ocean waves crashing', // Prompt (under 30 chars)
                7, // Duration in seconds
                60, // Timeout
                'test_tta_output.wav', // Save to file
                true // Verbose
            );
            console.log('✅ Text-to-Audio (File save) completed successfully!');
            console.log('Result:', result);
        } catch (error) {
            console.error('❌ Text-to-Audio (File save) failed:', error.message);
        }

        console.log('================================================================================');

        // Test 3: Text-to-Voice convenience method
        console.log('Test 3: Testing textToVoice convenience method...');
        try {
            const voiceResult = await apiClient.textToVoice(
                'Hello, this is a test of voice generation! Hello, this is a test of voice generation Hello, this is a test of voice generation',
                'A friendly, warm female voice with a slight British accent',
                60, // Timeout
                true // Verbose
            );
            console.log('✅ Text-to-Voice completed successfully!');
            console.log('Voice result:', voiceResult);
        } catch (error) {
            console.error('❌ Text-to-Voice failed:', error.message);
            // Print more detailed error information
            if (error.response) {
                console.error('Status:', error.response.statusCode);
                console.error('Headers:', error.response.headers);
                console.error('Body:', error.response.body);
            }
        }

        console.log('================================================================================');
        console.log('All convenience method tests completed!');

    } catch (error) {
        console.error('Error during testing:', error.message);
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Headers:', error.response.headers);
            console.error('Body:', error.response.body);
        }
    }
}

// Run the tests
testConvenienceMethods().catch(console.error);
