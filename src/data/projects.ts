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
    title: "Gift Market",
    category: "Personal Project",
    description:
      "멀티셀러 환경에서 주문부터 결제, 배송, 취소·반품 및 정산까지 전체 거래 흐름을 구현한 커머스 서비스입니다.",
    period: "2026.07 — 진행 중",
    team: "1명",
    role: "Full Stack",
    features: [
      "멀티셀러 주문 설계: 전체 주문과 판매자별 주문을 분리해 배송·취소를 판매자 단위로 관리",
      "안정적인 결제 처리: Toss Payments 연동, 멱등성 처리, 결제 결과 재조회로 중복 요청과 결제 응답 유실에 대응",
      "재고·환불 정합성: 비관적 잠금과 재고 예약·복원으로 동시 주문에 대응하고, 부분 취소·반품 시 재고와 환불 금액을 관리",
      "인증·정산 관리: Refresh Token 재발급의 동시성을 제어하고 정산 원장으로 판매자 정산 이력을 관리",
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "MySQL",
      "Toss Payments",
      "AWS S3",
      "Docker",
    ],
    images: [
      "/images/projects/gift-market/01-main.png",
      "/images/projects/gift-market/02-product-detail.png",
      "/images/projects/gift-market/03-multi-seller-cart.png",
      "/images/projects/gift-market/04-checkout.png",
      "/images/projects/gift-market/05-seller-orders.png",
      "/images/projects/gift-market/06-return-detail.png",
      "/images/projects/gift-market/07-settlement-detail.png",
    ],
    github: "https://github.com/bys96/gift-market",
    demo: "https://gift-market-test.vercel.app/",
  },
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
