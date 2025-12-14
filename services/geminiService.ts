import { GoogleGenAI } from "@google/genai";

// Initialize the client with the API key from the environment variable as per strict guidelines.
// We assume process.env.API_KEY is pre-configured and valid.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMuseumGuideResponse = async (userPrompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: userPrompt,
            config: {
                systemInstruction: `You are 'Kaze', the AI holographic guide for the Museum of the Rwanda Space Agency (RSA). 
                Your tone is knowledgeable, welcoming, and slightly futuristic. 
                You know detailed history about Rwanda's space initiatives (like Rwasat-1), African astronomy, and the solar system.
                Keep answers concise (under 80 words) suitable for a web chat interface.
                If asked about the Imigongo patterns, explain their origin in Rwanda (traditional geometric art) and how they represent the geometry of the universe in our museum design.
                Encourage visitors to explore the 3D Solar System exhibit.`,
            },
        });

        return response.text || "I am analyzing the cosmic data. Please try again.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Signal interference detected. Please try again later.";
    }
};