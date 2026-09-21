# 변윤석 포트폴리오

> Full-Stack Developer 변윤석의 웹 포트폴리오입니다.

경력, 프로젝트, 기술 스택 및 개발 경험을 한곳에서 확인할 수 있도록 제작한 개인 포트폴리오 사이트입니다.

## 🔗 Portfolio

**https://bys96.vercel.app/**

GitHub: https://github.com/bys96

---

## 📌 About

React와 TypeScript를 기반으로 제작한 SPA 형태의 포트폴리오입니다.

프로젝트 단순 나열보다 각 경험에서 **무엇을 구현했고, 어떤 기술을 사용했으며, 어떤 문제를 해결했는지**를 빠르게 확인할 수 있도록 구성했습니다.

포트폴리오 콘텐츠는 코드와 분리된 데이터 구조로 관리하여 프로젝트, 경력, 기술 스택 등의 내용을 쉽게 추가·수정할 수 있도록 했습니다.

---

## 🗂 Contents

- **About Me** — 개발자 소개와 개발 방향
- **Experience** — 인턴, 외주 및 개발 경험
- **Projects** — 주요 프로젝트와 담당 기능
- **Skills** — Frontend / Backend / Database / Infra & Tools
- **Education & Certificate** — 교육 및 자격 사항
- **Contact** — GitHub 및 연락처

---

## 🚀 Projects

포트폴리오에서는 프로젝트별로 다음 내용을 확인할 수 있습니다.

- 프로젝트 소개
- 개발 기간
- 담당 역할
- 주요 기능
- 기술 스택
- 주요 화면
- GitHub Repository
- 배포 서비스

현재 주요 프로젝트:

### Gift Market

주문·결제·배송·클레임·정산까지 거래의 전체 생명주기를 구현한 멀티셀러 커머스 서비스

### Stock Project

KRX KOSPI·KOSDAQ 데이터를 수집·가공하고 시각화한 풀스택 프로젝트

### 삼성 시니어 디지털 아카데미

시니어 사용자의 디지털 환경 적응을 위한 교육·체험 서비스

### Razvery

실시간 채팅과 포스트잇 보드를 활용한 협업 서비스

---

## 🛠 Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- CSS
- Lucide React
- React Icons

### Deployment

- Vercel

### Development

- Git
- GitHub
- ESLint

---

## 🏗 Structure

프로필, 경력, 프로젝트, 기술 스택 등의 콘텐츠를 UI 컴포넌트와 분리하여 `src/data`에서 관리합니다.

```text
src
├── components
│   ├── common
│   └── layout
│
├── data
│   ├── certificates.ts
│   ├── education.ts
│   ├── experiences.ts
│   ├── profile.ts
│   ├── projects.ts
│   └── skills.ts
│
├── sections
│   ├── About
│   ├── Contact
│   ├── Education
│   ├── Experience
│   ├── Hero
│   ├── Projects
│   └── Skills
│
├── styles
├── App.tsx
└── main.tsx
```

각 영역을 독립적인 Section 컴포넌트로 구성하고 반복되는 콘텐츠는 데이터 기반으로 렌더링합니다.

프로젝트 화면은 이미지 캐러셀로 제공하며, `IntersectionObserver`를 이용해 현재 섹션 탐지 및 화면 노출 애니메이션을 처리합니다.

---

## 🌐 Deployment

GitHub Repository와 연동하여 **Vercel**에서 배포하고 있습니다.

**Live Portfolio**
https://bys96.vercel.app/
