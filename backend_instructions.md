
# Najeonchilgi Exhibition Backend Setup (Secure Version)

전시회 큐레이터 챗봇 로직이 포함된 보안 강화 백엔드 설정 가이드입니다.

### 1. 환경 설정
```bash
# 가상환경 생성 및 활성화
python -m venv venv
source venv/bin/activate  # macOS/Linux
# venv\Scripts\activate   # Windows

# 필수 패키지 설치
pip install fastapi uvicorn pydantic google-generativeai python-dotenv
```

### 2. 환경 변수 설정 (.env 파일 생성)
프로젝트 루트에 `.env` 파일을 생성하고 발급받은 API 키를 입력하세요.
```text
GEMINI_API_KEY=your_actual_api_key_here
```

### 3. 백엔드 코드 (main.py)
```python
import os
import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

# Gemini 설정
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-2.0-flash-exp') # 최신 안정화 모델 사용

app = FastAPI()

# CORS 설정 (실제 배포 시 특정 도메인만 허용하도록 수정 권장)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# 데이터 모델
class Artist(BaseModel):
    id: int
    name: str
    email: str
    photoUrl: str
    workUrl: str
    description: str
    strengths: List[str]

class ChatRequest(BaseModel):
    message: str
    artist_data: List[dict] # 작가 정보 리스트

class ChatResponse(BaseModel):
    reason: str
    matchedIds: List[int]

@app.post("/api/chat", response_model=ChatResponse)
async def chat_with_curator(request: ChatRequest):
    try:
        # 시스템 프롬프트 구성
        prompt = f"""
        User wants this style: "{request.message}". 
        Based on the following artist list, pick exactly 2 artist IDs that match best.
        Artists: {json.dumps(request.artist_data, ensure_ascii=False)}
        
        Respond ONLY in JSON format with:
        {{
            "reason": "한글로 작성된 우아하고 전문적인 추천 이유 (2문장 이내)",
            "matchedIds": [ID1, ID2]
        }}
        """
        
        response = model.generate_content(
            prompt,
            generation_config=genai.types.GenerationConfig(
                response_mime_type="application/json",
            )
        )
        
        # JSON 파싱 및 반환
        return json.loads(response.text)
        
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="큐레이터 연결 중 오류가 발생했습니다.")

# 작가 목록 API (필요 시)
@app.get("/api/artists")
async def get_artists():
    # 실제 환경에서는 DB에서 가져오도록 구현
    return [] 

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```
