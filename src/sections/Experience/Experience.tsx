import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import "../../styles/experience.css";

const experiences = [
  {
    period: "2024.01 — Present",
    company: "회사명",
    role: "Frontend Developer",
    description:
      "React와 TypeScript를 기반으로 웹 서비스의 UI 개발과 유지보수를 담당했습니다.",
    tasks: [
      "재사용 가능한 공통 컴포넌트 설계",
      "REST API 연동 및 데이터 상태 관리",
      "반응형 UI 구현과 사용자 경험 개선",
    ],
    skills: ["React", "TypeScript", "JavaScript", "CSS"],
  },
  {
    period: "2023.03 — 2023.12",
    company: "프로젝트 또는 교육기관",
    role: "Web Developer",
    description:
      "팀 프로젝트를 진행하며 프론트엔드와 백엔드 개발 전반을 경험했습니다.",
    tasks: [
      "프로젝트 화면 설계 및 기능 구현",
      "Spring Boot 기반 서버 API 연동",
      "Git을 활용한 팀 협업과 코드 관리",
    ],
    skills: ["React", "Spring Boot", "MySQL", "Git"],
  },
];

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
              <BriefcaseBusiness size={20} />
            </div>

            <div className="experience__card">
              <div className="experience__card-header">
                <div>
                  <p className="experience__company">{experience.company}</p>

                  <h3 className="experience__role">{experience.role}</h3>
                </div>

                <div className="experience__period">
                  <CalendarDays size={16} />
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
