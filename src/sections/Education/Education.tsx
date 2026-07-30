import { Award, BookOpen, CalendarDays, GraduationCap } from "lucide-react";
import "../../styles/education.css";

type EducationItem = {
  institution: string;
  major: string;
  period: string;
  description: string;
};

type CertificateItem = {
  title: string;
  issuer: string;
  date: string;
};

const educationList: EducationItem[] = [
  {
    institution: "학교명",
    major: "컴퓨터공학과",
    period: "2020.03 — 2026.02",
    description: "웹 개발과 소프트웨어 설계에 필요한 전공 지식을 학습했습니다.",
  },
  {
    institution: "교육기관명",
    major: "풀스택 웹 개발 과정",
    period: "2025.01 — 2025.06",
    description: "React와 Spring Boot를 활용한 팀 프로젝트를 진행했습니다.",
  },
];

const certificateList: CertificateItem[] = [
  {
    title: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2025.06",
  },
  {
    title: "SQL 개발자 SQLD",
    issuer: "한국데이터산업진흥원",
    date: "2024.11",
  },
  {
    title: "자격증 또는 수료증 이름",
    issuer: "발급 기관",
    date: "2024.08",
  },
];

function Education() {
  return (
    <section className="education" id="education">
      <div className="education__header">
        <p className="education__subtitle">EDUCATION & CERTIFICATE</p>

        <h2 className="education__title">배움과 성장의 기록입니다.</h2>

        <p className="education__description">
          개발 역량을 쌓기 위해 학습한 과정과 취득한 자격을 정리했습니다.
        </p>
      </div>

      <div className="education__content">
        <div className="education__group">
          <div className="education__group-header">
            <span className="education__group-icon">
              <GraduationCap size={22} aria-hidden="true" />
            </span>

            <div>
              <p className="education__group-label">EDUCATION</p>
              <h3 className="education__group-title">학력 및 교육</h3>
            </div>
          </div>

          <div className="education__timeline">
            {educationList.map((item) => (
              <article
                className="education-card"
                key={`${item.institution}-${item.period}`}
              >
                <span className="education-card__marker" aria-hidden="true" />

                <div className="education-card__top">
                  <div>
                    <h4 className="education-card__institution">
                      {item.institution}
                    </h4>

                    <p className="education-card__major">{item.major}</p>
                  </div>

                  <span className="education-card__period">
                    <CalendarDays size={15} aria-hidden="true" />
                    {item.period}
                  </span>
                </div>

                <p className="education-card__description">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="education__group">
          <div className="education__group-header">
            <span className="education__group-icon">
              <Award size={22} aria-hidden="true" />
            </span>

            <div>
              <p className="education__group-label">CERTIFICATE</p>
              <h3 className="education__group-title">자격 및 수료</h3>
            </div>
          </div>

          <div className="certificate-list">
            {certificateList.map((certificate, index) => (
              <article
                className="certificate-card"
                key={`${certificate.title}-${certificate.date}`}
              >
                <div className="certificate-card__icon">
                  <BookOpen size={20} aria-hidden="true" />
                </div>

                <div className="certificate-card__content">
                  <span className="certificate-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h4 className="certificate-card__title">
                    {certificate.title}
                  </h4>

                  <p className="certificate-card__issuer">
                    {certificate.issuer}
                  </p>
                </div>

                <time className="certificate-card__date">
                  {certificate.date}
                </time>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
