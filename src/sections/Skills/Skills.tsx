import type { ReactNode } from "react";
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiNeon,
  SiNotion,
  SiPostgresql,
  SiPostman,
  SiRender,
  SiSequelize,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

import { skillCategories, type SkillIconKey } from "../../data/skills";
import "../../styles/skills.css";

const skillIcons: Record<SkillIconKey, ReactNode> = {
  html: <FaHtml5 aria-hidden="true" />,
  css: <FaCss3Alt aria-hidden="true" />,
  javascript: <FaJs aria-hidden="true" />,
  typescript: <SiTypescript aria-hidden="true" />,
  react: <FaReact aria-hidden="true" />,
  tailwind: <SiTailwindcss aria-hidden="true" />,
  vite: <SiVite aria-hidden="true" />,
  java: <FaJava aria-hidden="true" />,
  spring: <SiSpringboot aria-hidden="true" />,
  node: <FaNodeJs aria-hidden="true" />,
  express: <SiExpress aria-hidden="true" />,
  sequelize: <SiSequelize aria-hidden="true" />,
  mysql: <SiMysql aria-hidden="true" />,
  postgresql: <SiPostgresql aria-hidden="true" />,
  neon: <SiNeon aria-hidden="true" />,
  aws: <FaAws aria-hidden="true" />,
  docker: <FaDocker aria-hidden="true" />,
  render: <SiRender aria-hidden="true" />,
  vercel: <SiVercel aria-hidden="true" />,
  postman: <SiPostman aria-hidden="true" />,
  git: <FaGithub aria-hidden="true" />,
  github: <FaGithub aria-hidden="true" />,
  figma: <FaFigma aria-hidden="true" />,
  notion: <SiNotion aria-hidden="true" />,
};

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <p className="skills__subtitle">SKILLS</p>
        <h2 className="skills__title">사용할 수 있는 기술입니다.</h2>
        <p className="skills__description">
          프로젝트에서 직접 사용한 기술과 개발 도구를 정리했습니다.
        </p>
      </div>

      <div className="skills__grid">
        {skillCategories.map((category, categoryIndex) => (
          <article className="skill-card" key={category.title}>
            <div className="skill-card__header">
              <span className="skill-card__number">
                {String(categoryIndex + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="skill-card__title">{category.title}</h3>
                <p className="skill-card__description">
                  {category.description}
                </p>
              </div>
            </div>

            <ul className="skill-card__list">
              {category.skills.map((skill) => (
                <li className="skill-card__item" key={skill.name}>
                  <span className="skill-card__icon">
                    {skillIcons[skill.icon]}
                  </span>

                  <span className="skill-card__content">
                    <strong className="skill-card__name">{skill.name}</strong>
                    <span className="skill-card__detail">
                      {skill.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
