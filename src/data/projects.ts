export type Project = {
  title: string;
  category: string;
  description: string;
  period: string;
  team: string;
  role: string;
  features: string[];
  skills: string[];
  images?: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Stock Project",
    category: "Personal Project",
    description:
      "KRX의 KOSPI·KOSDAQ 일별 지수 데이터를 자동으로 수집해 저장하고, 기간별 지수 추이를 차트로 시각화한 풀스택 프로젝트입니다.",
    period: "2026.07",
    team: "1명",
    role: "Full Stack",
    features: [
      "Spring Boot와 WebClient를 활용한 KRX API 연동 및 REST API 개발",
      "서버 시작 시 최근 1년 데이터 동기화와 매일 18시 자동 증분 동기화",
      "Recharts 기반 기간별 지수 차트와 KOSPI·KOSDAQ 시장 탭 구현",
      "MySQL과 PostgreSQL 환경 분리 및 Vercel·Render·Neon 배포",
    ],
    skills: [
      "React",
      "Vite",
      "Axios",
      "Recharts",
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "WebClient",
      "MySQL",
      "PostgreSQL",
      "Docker",
    ],
    images: [
      "/images/projects/stock/main.png",
      "/images/projects/stock/chart.png",
      "/images/projects/stock/detail-card.png",
      "/images/projects/stock/date-search.png",
    ],
    github: "https://github.com/bys96/stock-project",
    demo: "https://stock-project-kappa.vercel.app/",
  },
  {
    title: "삼성시니어디지털아카데미",
    category: "Client Project",
    description:
      "시니어 사용자가 실제 디지털 환경을 연습할 수 있도록 키오스크와 모바일 서비스 이용 과정을 시뮬레이션한 교육용 서비스입니다.",
    period: "2024.10.07 — 2025.03.28",
    team: "협업",
    role: "Frontend",
    features: [
      "기존 교육용 교구의 오류 수정과 사용자 중심 UI·UX 개선",
      "카페 무인주문기, 무인 주차 정산기, PHR 앱 가입 교구 제작",
      "회원 학습 내역을 확인할 수 있는 관리자 대시보드 구현",
      "React·TypeScript 기반 화면 개발과 Directual API 연동",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap Icons",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Directual",
      "Pixso",
      "Git",
    ],
    images: [
      "/images/projects/ssda/phr.gif",
      "/images/projects/ssda/locker.png",
      "/images/projects/ssda/coffee.png",
      "/images/projects/ssda/dashboard.png",
    ],
  },
  {
    title: "Razvery",
    category: "Team Project · 최우수상",
    description:
      "제한 시간이 있는 실시간 채팅과 포스트잇 보드를 중심으로, 팀원들이 아이디어를 빠르게 공유할 수 있도록 만든 협업 서비스입니다.",
    period: "2024.07.29 — 2024.09.30",
    team: "4명",
    role: "Full Stack",
    features: [
      "Socket.IO를 활용한 실시간 채팅 페이지 구현",
      "키워드 등록과 해당 채팅 위치로 이동하는 스크롤 기능 구현",
      "방 종류, 남은 시간, 참여 인원을 확인할 수 있는 메인 페이지 구현",
      "DB 스키마 설계와 AWS 배포를 포함한 백엔드 협업 참여",
    ],
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "Socket.IO",
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
      "AWS",
      "Figma",
    ],
    images: [
      "/images/projects/razvery/landing.gif",
      "/images/projects/razvery/chat.gif",
      "/images/projects/razvery/kanban.gif",
    ],
    github: "https://github.com/obokproject",
  },
];
