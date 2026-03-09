# 청첩장 (Vite + React + shadcn/ui)

기존 Next.js 청첩장을 **Vite + React + shadcn/ui** 조합으로 옮긴 프로젝트입니다.

## 스택

- **Vite** — 빌드/개발 서버
- **React 18** — UI
- **Tailwind CSS 3** — 스타일
- **shadcn/ui** — Button 등 UI 컴포넌트 (Tailwind 기반)
- **Supabase** — 축하 메시지(댓글) 저장

## 설정

1. 의존성 설치

```bash
cd vite-app
npm install
```

2. 환경 변수

- `.env.example`을 복사해 `.env` 생성
- Supabase URL / anon key를 Next 프로젝트와 동일하게 설정  
  - Next: `NEXT_PUBLIC_SUPABASE_URL` → Vite: `VITE_SUPABASE_URL`
  - Next: `NEXT_PUBLIC_SUPABASE_ANON_KEY` → Vite: `VITE_SUPABASE_ANON_KEY`

3. 이미지·음악

- `public/images/` — 슬라이드쇼 이미지 (wedding.png 등)
- `public/music/` — `wedding_invitation_music.wav`
- 기존 `wedding_hj/static/` 내용을 그대로 `vite-app/public/`로 복사하면 됩니다.

## 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속.

## 빌드 / 배포

```bash
npm run build
```

`dist/` 폴더가 생성됩니다. Vercel 등에 `dist`를 정적 사이트로 배포하거나, Vercel 프로젝트 루트를 `vite-app`으로 두고 빌드 명령을 `npm run build`로 설정하면 됩니다.

## 기존 Next.js 프로젝트를 완전히 대체하려면

1. `vite-app` 안에서 작업이 끝난 뒤
2. 상위 폴더(`wedding_hj`)의 `app/`, `next.config.mjs` 등 Next 관련 파일/폴더 삭제
3. `vite-app`의 파일들을 `wedding_hj` 루트로 이동
4. `package.json` 등 루트 설정을 Vite 기준으로 정리

또는 레포를 나누어 두고, 배포만 `vite-app` 기준으로 전환해도 됩니다.
