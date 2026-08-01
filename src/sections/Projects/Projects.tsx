import { CalendarDays, ExternalLink, UserRound, Users } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "../../styles/projects.css";

import { projects } from "../../data/projects";
import ProjectCarousel from "./ProjectCarousel";

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
            <ProjectCarousel images={project.images} title={project.title} />

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
                {project.github && (
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
                )}

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
