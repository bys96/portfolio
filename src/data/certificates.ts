export type Certificate = {
  title: string;
  issuer?: string;
  date: string;
};

export const certificateList: Certificate[] = [
  {
    title: "SQLD",
    issuer: "한국데이터산업진흥원",
    date: "2026.06",
  },
  {
    title: "AICE Associate",
    date: "2026.04",
  },
  {
    title: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2025.12",
  },
  {
    title: "자동차운전면허 2종 보통",
    date: "2022.09",
  },
];
