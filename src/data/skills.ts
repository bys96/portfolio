export type SkillIconKey =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "tailwind"
  | "vite"
  | "java"
  | "spring"
  | "node"
  | "express"
  | "sequelize"
  | "mysql"
  | "postgresql"
  | "neon"
  | "aws"
  | "docker"
  | "render"
  | "vercel"
  | "postman"
  | "git"
  | "github"
  | "figma"
  | "notion";

export type Skill = {
  name: string;
  description: string;
  icon: SkillIconKey;
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Front End",
    description: "사용자 경험을 고려한 반응형 웹 인터페이스를 구현합니다.",
    skills: [
      {
        name: "HTML5 / CSS3",
        description: "반응형 페이지 제작 경험",
        icon: "html",
      },
      {
        name: "JavaScript",
        description: "DOM 조작 및 이벤트 기반 로직 구현",
        icon: "javascript",
      },
      {
        name: "TypeScript",
        description: "타입 안정성을 통한 유지보수성 강화",
        icon: "typescript",
      },
      {
        name: "React.js",
        description: "SPA 구축 및 컴포넌트 단위 개발",
        icon: "react",
      },
      {
        name: "Tailwind CSS",
        description: "빠르고 효율적인 스타일링 적용",
        icon: "tailwind",
      },
      {
        name: "Vite",
        description: "React 개발 및 빌드 환경 구성",
        icon: "vite",
      },
    ],
  },
  {
    title: "Back End",
    description: "REST API와 서버 로직을 구현하고 외부 서비스를 연동합니다.",
    skills: [
      {
        name: "Java",
        description: "객체지향 기반 애플리케이션 개발",
        icon: "java",
      },
      {
        name: "Spring Boot",
        description: "REST API 개발 및 백엔드 서비스 구현",
        icon: "spring",
      },
      {
        name: "Spring Data JPA",
        description: "ORM 기반 데이터 접근 및 CRUD 구현",
        icon: "spring",
      },
      {
        name: "WebClient",
        description: "외부 API 연동 및 비동기 HTTP 통신",
        icon: "spring",
      },
      {
        name: "Node.js",
        description: "REST API 서버 구현 경험",
        icon: "node",
      },
      {
        name: "Express.js",
        description: "API 설계 및 라우팅",
        icon: "express",
      },
    ],
  },
  {
    title: "Database",
    description: "개발 환경과 운영 환경에 맞는 데이터 저장소를 구성합니다.",
    skills: [
      {
        name: "Sequelize",
        description: "ORM 기반 데이터베이스 모델링 및 연동",
        icon: "sequelize",
      },
      {
        name: "MySQL",
        description: "데이터 저장 및 관리",
        icon: "mysql",
      },
      {
        name: "PostgreSQL",
        description: "운영환경 데이터베이스 구축 및 연동",
        icon: "postgresql",
      },
      {
        name: "Neon",
        description: "PostgreSQL 클라우드 데이터베이스 활용",
        icon: "neon",
      },
    ],
  },
  {
    title: "Infra & Tool",
    description: "배포, 협업, 테스트에 필요한 개발 도구를 활용합니다.",
    skills: [
      {
        name: "AWS",
        description: "배포 및 데이터 관리 경험",
        icon: "aws",
      },
      {
        name: "Docker",
        description: "애플리케이션 컨테이너화 및 실행",
        icon: "docker",
      },
      {
        name: "Render",
        description: "Spring Boot API 배포",
        icon: "render",
      },
      {
        name: "Vercel",
        description: "React 프론트엔드 배포",
        icon: "vercel",
      },
      {
        name: "Postman",
        description: "API 테스트 및 디버깅",
        icon: "postman",
      },
      {
        name: "Git / GitHub",
        description: "협업 및 버전 관리",
        icon: "github",
      },
      {
        name: "Figma",
        description: "UI 디자인 협업",
        icon: "figma",
      },
      {
        name: "Notion",
        description: "프로젝트 관리",
        icon: "notion",
      },
    ],
  },
];
