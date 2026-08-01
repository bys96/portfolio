export type Profile = {
  name: string;
  initials: string;
  role: string;
  portfolioLabel: string;
  headline: string;
  introduction: string[];
  email: string;
  githubUrl: string;
  githubLabel: string;
  location: string;
  coreStack: string[];
};

export const profile: Profile = {
  name: "변윤석",
  initials: "YS",
  role: "Full-Stack Developer",
  portfolioLabel: "FULL-STACK DEVELOPER PORTFOLIO",
  headline: "사용자의 경험을 최우선으로 생각하는 개발자",
  introduction: [
    "끊임없이 배우고 시도하며 성장합니다.",
    "편리하고 직관적인 UI/UX를 설계하고, 코드로 더 나은 일상을 만드는 개발자를 지향합니다.",
  ],
  email: "jkpp0611@naver.com",
  githubUrl: "https://github.com/bys96",
  githubLabel: "github.com/bys96",
  location: "서울 · 수도권",
  coreStack: ["React", "TypeScript", "Spring Boot"],
};
