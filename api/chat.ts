
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
            text: `사용자 요청: "${message}"`
          }]
        }
      ],
      config: {
        systemInstruction: `당신은 '맥(脈)' 나전칠기 단체전의 전문 큐레이터입니다. 
        사용자의 요청에 따라 제공된 아티스트 데이터에서 가장 적합한 2인의 작가를 추천하세요.
        
        아티스트 데이터: ${JSON.stringify(artist_data)}
        
        응답은 반드시 한국어로 작성하며, 추천 이유에는 해당 작가의 기법(끊음질, 줄음질 등)과 작품 세계관을 전문적으로 설명하세요.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            reason: {
              type: Type.STRING,
              description: "추천 이유를 포함한 큐레이터의 응답 메시지 (한국어)."
            },
            matchedIds: {
              type: Type.ARRAY,
              items: { type: Type.INTEGER },
              description: "추천된 아티스트 2인의 고유 ID 목록."
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
