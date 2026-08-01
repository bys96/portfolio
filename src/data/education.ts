export type Education = {
  institution: string;
  major: string;
  period: string;
  description: string;
};

export const educationList: Education[] = [
  {
    institution: "강남구 혁신인재육성아카데미",
    major: "생성형 AI 웹서비스 개발자 과정",
    period: "2024.06 ~ 2024.11",
    description:
      "React, Spring Boot, 데이터베이스, 협업 프로젝트를 중심으로 실무형 웹서비스 개발 과정을 수료했습니다.",
  },
  {
    institution: "동서울대학교",
    major: "컴퓨터소프트웨어학과 · 3년제 졸업",
    period: "2021.02",
    description:
      "컴퓨터소프트웨어 전공을 통해 프로그래밍과 소프트웨어 개발의 기초를 학습했습니다.",
  },
];
