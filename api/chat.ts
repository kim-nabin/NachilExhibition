
import { GoogleGenAI, Type } from "@google/genai";

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { message, artist_data } = await req.json();

    // The API Key is accessed only on the server side
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [{
            text: `You are an expert curator for a Najeonchilgi (Korean mother-of-pearl lacquerware) exhibition. 
            Based on the user's request, recommend exactly 2 artists from the provided data.
            
            Artist Data: ${JSON.stringify(artist_data)}
            User Request: "${message}"
            
            Respond in Korean.`
          }]
        }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            reason: {
              type: Type.STRING,
              description: "The reason for recommending these artists in Korean."
            },
            matchedIds: {
              type: Type.ARRAY,
              items: { type: Type.INTEGER },
              description: "The IDs of the two recommended artists."
            }
          },
          required: ["reason", "matchedIds"]
        }
      }
    });

    return new Response(response.text, {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
