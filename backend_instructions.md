
# Najeonchilgi Exhibition Vercel Deployment Guide

이 프로젝트는 프론트엔드(React)와 백엔드(FastAPI)가 하나로 통합되어 Vercel에서 즉시 배포 가능하도록 설정되어 있습니다.

### 1. Vercel 배포 방법
1.  GitHub 등에 프로젝트 코드를 푸시합니다.
2.  [Vercel Dashboard](https://vercel.com/dashboard)에서 'Add New' -> 'Project'를 선택합니다.
3.  저장소를 연결하고 배포를 시작합니다.
4.  **중요 (환경 변수 설정)**:
    *   Vercel 프로젝트 설정의 **Environment Variables** 메뉴로 이동합니다.
    *   `Key`: `GEMINI_API_KEY`
    *   `Value`: 발급받은 Gemini API 키 입력
    *   저장 후 프로젝트를 다시 배포(Redeploy)합니다.

### 2. 프로젝트 구조
*   `api/index.py`: Vercel Serverless Function으로 작동하는 FastAPI 백엔드입니다.
*   `vercel.json`: 모든 `/api/*` 요청을 백엔드 파일로 라우팅합니다.
*   `requirements.txt`: 배포 시 자동으로 설치되는 Python 패키지 목록입니다.

### 3. 로컬 테스트
Vercel CLI를 사용하여 로컬에서 운영 환경과 동일하게 테스트할 수 있습니다.
```bash
npm install -g vercel
vercel dev
```
이제 `localhost:3000`에서 프론트와 백엔드가 연동된 상태로 개발할 수 있습니다.
