
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this example, we'll rely on the environment variable being set.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateContactMessage = async (name: string, interest: string): Promise<string> => {
  if (!API_KEY) {
    return "API Key is not configured. Please contact the administrator.";
  }
  
  const prompt = `
    You are acting as a person named "${name}". You are interested in connecting with a developer named "Aqqua" about "${interest}".
    Write a short, friendly, and professional outreach message to Aqqua to start a conversation.
    - The message must be in the first person, from ${name}'s perspective.
    - Keep the tone enthusiastic but professional.
    - The entire message should be 1-3 sentences and under 70 words.
    - Do not include a subject line or greeting like "Hi,". Just provide the body of the message.
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          temperature: 0.7,
          topP: 1,
          topK: 1,
          maxOutputTokens: 100,
        }
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error generating message with Gemini API:", error);
    return "Sorry, I couldn't generate a message at this time. Please try again later.";
  }
};
