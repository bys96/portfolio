import { Award, BookOpen, CalendarDays, GraduationCap } from "lucide-react";
import { certificateList } from "../../data/certificates";
import { educationList } from "../../data/education";
import "../../styles/education.css";

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
            {certificateList.map((certificate) => (
              <article
                className="certificate-card"
                key={`${certificate.title}-${certificate.date}`}
              >
                <div className="certificate-card__icon">
                  <BookOpen size={20} aria-hidden="true" />
                </div>

                <div className="certificate-card__content">
                  <h4 className="certificate-card__title">
                    {certificate.title}
                  </h4>

                  <p className="certificate-card__issuer">
                    {certificate.issuer ?? "자격 취득"}
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
