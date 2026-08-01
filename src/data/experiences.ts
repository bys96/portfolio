export type Experience = {
  period: string;
  company: string;
  role: string;
  description: string;
  tasks: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    period: "2025.02.11 — 2025.03.28",
    company: "BIBLIC",
    role: "프론트엔드 개발자 · 외주",
    description:
      "디지털 기기에 익숙하지 않은 어르신들이 실제 사용 환경을 미리 경험할 수 있도록 교육·체험용 프로그램 화면을 개발했습니다.",
    tasks: [
      "실제 디지털 기기 사용 환경을 재현한 교육용 화면 개발",
      "고령 사용자의 이해와 접근성을 고려한 UI 구성",
      "기능 구현을 넘어 실제 사용에 도움이 되는 사용자 경험 설계",
    ],
    skills: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    period: "2024.10.07 — 2024.11.29",
    company: "BIBLIC",
    role: "프론트엔드 개발자 · 인턴",
    description:
      "어르신을 위한 교육·체험용 프로그램 개발에 참여하며 사용자 중심의 UX/UI 설계가 서비스에 미치는 영향을 배웠습니다.",
    tasks: [
      "교육·체험용 프로그램의 프론트엔드 화면 개발 참여",
      "디지털 기기에 익숙하지 않은 사용자를 고려한 화면 구성",
      "사용자 관점에서 기능과 인터페이스를 점검하고 개선",
    ],
    skills: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    period: "2024.06.01 — 2024.11.30",
    company: "강남구 혁신인재육성아카데미",
    role: "생성형 AI 웹서비스 개발자 코스",
    description:
      "프론트엔드부터 백엔드와 인프라까지 웹 개발의 기초를 학습하고, 출석률 100%로 개발자 양성 과정을 수료했습니다.",
    tasks: [
      "HTML5, CSS3, JavaScript, TypeScript, React 실습",
      "프론트엔드·백엔드·인프라 전반의 개발 기초 학습",
      "Git과 Figma를 활용한 팀 프로젝트 협업 경험",
    ],
    skills: ["React", "TypeScript", "Node.js", "AWS"],
  },
];
