import Stainlessdeepl from "../node_modules/stainlessdeepl/dist/index.mjs";
import OpenAI from "openai";
import fetch from 'node-fetch';
import FormData from 'form-data';

// Define the API key (replace 'YOUR_API_KEY' with your actual key)
const openai = new OpenAI({ apiKey: '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' });
const audioUrl = "https://aod-rfi.akamaized.net/rfi/francais/audio/modules/actu/202411/02_11_Menaces_sur_l_info_Walid_Bourouis.mp3";

async function transcribeAudio() {
    try {
        // Fetch the audio file from the URL
        const audioResponse = await fetch(audioUrl);
        const audioBuffer = await audioResponse.arrayBuffer();
        // Create a FormData instance and append the audio file
        const formData = new FormData();
        formData.append("file", Buffer.from(audioBuffer), {
            filename: "audio.mp3",
            contentType: "audio/mpeg"
        });
        formData.append("model", "whisper-1");
        formData.append("response_format", "text");
        // Define the transcription API URL and headers
        const url = "https://api.openai.com/v1/audio/transcriptions";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${openai.apiKey}`,
                ...formData.getHeaders() // Automatically handle `multipart/form-data`
            },
            body: formData
        });
        const rawResponseText = await response.text();  // Get raw text response
        //console.log("Raw response body:", rawResponseText);
        console.log("Transcription result:", rawResponseText);
        return rawResponseText;  // Return the raw transcription result
        // Parse the JSON response
        if (response.ok) {
            console.log(typeof rawResponseText)
            console.log("Transcription result:", rawResponseText);
        } else {
            console.error("Error response:", await response.text());
        }
    } catch (error) {
        console.error("Error processing audio:", error);
    }
}
const client = new Stainlessdeepl({
    baseURL: 'https://api-free.deepl.com/v2/',
    authKey: 'DeepL-Auth-Key 4dbac1ee-605a-450e-93f6-be6c6c9d209a:fx'
})

async function main() {
    const transcription = await transcribeAudio();  // Now transcription is the actual result
    //const transcriptionString = String(transcription);    
    //console.log(transcription);
    const response = await client.translations.translate({ target_lang: 'EN', text: ["L'article", transcription] });
    console.log(response.translations);
}

main();
