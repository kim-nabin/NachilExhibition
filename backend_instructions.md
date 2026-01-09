
# Najeonchilgi Exhibition Vercel Deployment Guide

이 프로젝트는 프론트엔드(React)와 백엔드(Edge Function)가 통합되어 Vercel에서 즉시 배포 가능하도록 설정되어 있습니다.

### 1. Vercel 배포 방법
1.  GitHub 등에 프로젝트 코드를 푸시합니다.
2.  [Vercel Dashboard](https://vercel.com/dashboard)에서 'Add New' -> 'Project'를 선택하여 저장소를 연결합니다.
3.  **중요 (환경 변수 설정)**:
    *   배포 전 혹은 프로젝트 설정(Settings)의 **Environment Variables** 메뉴로 이동합니다.
    *   `Key`: `API_KEY` (코드 내 process.env.API_KEY와 일치해야 함)
    *   `Value`: [Google AI Studio](https://aistudio.google.com/app/apikey)에서 발급받은 키 입력
    *   저장 후 프로젝트를 배포 또는 다시 배포(Redeploy)합니다.

### 2. 프로젝트 구조
*   `api/chat.ts`: Vercel Edge Function으로 작동하는 보안 백엔드 로직입니다. API Key는 서버 측에서만 호출되므로 안전합니다.
*   `vercel.json`: `/api/*` 요청을 서버리스 함수로 연결하는 라우팅 설정입니다.

### 3. 로컬 테스트
Vercel CLI를 사용하여 로컬 환경에서 테스트할 수 있습니다.
```bash
npm install -g vercel
vercel env pull .env.local  # Vercel에 설정한 환경변수를 로컬로 가져옴
vercel dev
```
