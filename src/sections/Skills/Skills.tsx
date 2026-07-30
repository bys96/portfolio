import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiAxios,
  SiMysql,
  SiSpringboot,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import "../../styles/skills.css";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  title: string;
  description: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description:
      "사용자 경험과 유지보수를 고려한 반응형 웹 인터페이스를 구현합니다.",
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 aria-hidden="true" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt aria-hidden="true" />,
      },
      {
        name: "JavaScript",
        icon: <FaJs aria-hidden="true" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript aria-hidden="true" />,
      },
      {
        name: "React",
        icon: <FaReact aria-hidden="true" />,
      },
      {
        name: "Vite",
        icon: <SiVite aria-hidden="true" />,
      },
    ],
  },
  {
    title: "Backend",
    description:
      "서버와 데이터베이스 구조를 이해하고 REST API 기반 기능을 구현합니다.",
    skills: [
      {
        name: "Java",
        icon: <FaJava aria-hidden="true" />,
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot aria-hidden="true" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql aria-hidden="true" />,
      },
      {
        name: "Axios",
        icon: <SiAxios aria-hidden="true" />,
      },
    ],
  },
  {
    title: "Tools",
    description: "협업과 개발 생산성을 높이기 위한 도구를 활용합니다.",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt aria-hidden="true" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub aria-hidden="true" />,
      },
      {
        name: "Figma",
        icon: <FaFigma aria-hidden="true" />,
      },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <p className="skills__subtitle">SKILLS</p>

        <h2 className="skills__title">사용할 수 있는 기술입니다.</h2>

        <p className="skills__description">
          프로젝트를 진행하며 사용한 기술과 개발 도구를 정리했습니다.
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
                  <span className="skill-card__icon">{skill.icon}</span>

                  <span className="skill-card__name">{skill.name}</span>
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
