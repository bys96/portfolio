import { CalendarDays, ExternalLink, UserRound, Users } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "../../styles/projects.css";

type Project = {
  title: string;
  category: string;
  description: string;
  period: string;
  team: string;
  role: string;
  features: string[];
  skills: string[];
  image: string;
  github: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "프로젝트 이름",
    category: "Team Project",
    description:
      "프로젝트가 해결하려는 문제와 서비스의 핵심 가치를 간략하게 작성합니다.",
    period: "2025.01 — 2025.03",
    team: "4명",
    role: "Frontend",
    features: [
      "사용자 인증 및 권한에 따른 화면 구성",
      "REST API 기반 데이터 조회 및 상태 관리",
      "반응형 UI 구현과 사용자 경험 개선",
    ],
    skills: ["React", "TypeScript", "Spring Boot", "MySQL"],
    image: "/images/project-01.png",
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "프로젝트 이름",
    category: "Personal Project",
    description:
      "직접 기획하고 개발한 프로젝트의 목적과 주요 구현 내용을 작성합니다.",
    period: "2024.10 — 2024.12",
    team: "1명",
    role: "Full Stack",
    features: [
      "재사용 가능한 공통 컴포넌트 설계",
      "비동기 데이터 요청과 로딩 상태 처리",
      "접근성과 유지보수를 고려한 UI 구현",
    ],
    skills: ["React", "JavaScript", "CSS", "Vite"],
    image: "/images/project-02.png",
    github: "https://github.com/",
  },
  {
    title: "프로젝트 이름",
    category: "Team Project",
    description:
      "팀 협업 과정과 담당 역할, 해결한 기술적 문제를 중심으로 작성합니다.",
    period: "2024.06 — 2024.08",
    team: "5명",
    role: "Frontend",
    features: [
      "Git을 활용한 브랜치 전략과 코드 협업",
      "공통 UI 컴포넌트 제작 및 재사용",
      "API 예외 처리와 사용자 피드백 구현",
    ],
    skills: ["React", "TypeScript", "Axios", "Git"],
    image: "/images/project-03.png",
    github: "https://github.com/",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__header">
        <p className="projects__subtitle">PROJECTS</p>

        <h2 className="projects__title">프로젝트를 소개합니다.</h2>

        <p className="projects__description">
          사용자 경험과 유지보수를 고려하며 개발한 프로젝트입니다.
        </p>
      </div>

      <div className="projects__list">
        {projects.map((project, index) => (
          <article className="project-card" key={`${project.title}-${index}`}>
            <div className="project-card__image-wrapper">
              <img
                className="project-card__image"
                src={project.image}
                alt={`${project.title} 프로젝트 화면`}
              />

              <span className="project-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="project-card__content">
              <p className="project-card__category">{project.category}</p>

              <h3 className="project-card__title">{project.title}</h3>

              <p className="project-card__description">{project.description}</p>

              <div className="project-card__meta">
                <div className="project-card__meta-item">
                  <CalendarDays size={18} aria-hidden="true" />

                  <div className="project-card__meta-content">
                    <span className="project-card__meta-label">기간</span>
                    <strong>{project.period}</strong>
                  </div>
                </div>

                <div className="project-card__meta-item">
                  <Users size={18} aria-hidden="true" />

                  <div className="project-card__meta-content">
                    <span className="project-card__meta-label">인원</span>
                    <strong>{project.team}</strong>
                  </div>
                </div>

                <div className="project-card__meta-item">
                  <UserRound size={18} aria-hidden="true" />

                  <div className="project-card__meta-content">
                    <span className="project-card__meta-label">역할</span>
                    <strong>{project.role}</strong>
                  </div>
                </div>
              </div>

              <div className="project-card__section">
                <h4 className="project-card__section-title">주요 기능</h4>

                <ul className="project-card__features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-card__section">
                <h4 className="project-card__section-title">Tech Stack</h4>

                <div className="project-card__skills">
                  {project.skills.map((skill) => (
                    <span className="project-card__skill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card__links">
                <a
                  className="project-card__link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub 저장소 열기`}
                >
                  <FaGithub size={19} aria-hidden="true" />
                  GitHub
                </a>

                {project.demo && (
                  <a
                    className="project-card__link project-card__link--primary"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} 배포 사이트 열기`}
                  >
                    <ExternalLink size={18} aria-hidden="true" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
