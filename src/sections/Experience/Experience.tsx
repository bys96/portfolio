import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import "../../styles/experience.css";
import { experiences } from "../../data/experiences";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__header">
        <p className="experience__subtitle">EXPERIENCE</p>
        <h2 className="experience__title">경험을 소개합니다.</h2>
        <p className="experience__description">
          프로젝트와 실무 경험을 통해 문제를 해결하고 성장해 왔습니다.
        </p>
      </div>

      <div className="experience__timeline">
        {experiences.map((experience) => (
          <article
            className="experience__item"
            key={`${experience.company}-${experience.period}`}
          >
            <div className="experience__marker">
              <BriefcaseBusiness size={20} aria-hidden="true" />
            </div>

            <div className="experience__card">
              <div className="experience__card-header">
                <div>
                  <p className="experience__company">{experience.company}</p>

                  <h3 className="experience__role">{experience.role}</h3>
                </div>

                <div className="experience__period">
                  <CalendarDays size={16} aria-hidden="true" />
                  <span>{experience.period}</span>
                </div>
              </div>

              <p className="experience__summary">{experience.description}</p>

              <ul className="experience__tasks">
                {experience.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>

              <div className="experience__skills">
                {experience.skills.map((skill) => (
                  <span className="experience__skill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
