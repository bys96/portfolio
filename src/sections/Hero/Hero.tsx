import { ArrowDown, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { profile } from "../../data/profile";
import "../../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__glow hero__glow--top" aria-hidden="true"></div>
      <div className="hero__glow hero__glow--bottom" aria-hidden="true"></div>

      <div className="hero__content">
        <p className="hero__subtitle">{profile.portfolioLabel}</p>

        <h1 className="hero__title" id="hero-title">
          안녕하세요.
          <br />
          {profile.role} <span>{profile.name}</span>입니다.
        </h1>

        <div className="hero__description">
          <p>{profile.headline}</p>
          {profile.introduction.map((sentence) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </div>

        <div className="hero__buttons">
          <a href="#projects" className="hero__btn hero__btn--primary">
            프로젝트 보기
          </a>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--secondary"
            aria-label={`${profile.name} GitHub 새 창에서 열기`}
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="hero__icon-btn"
            aria-label={`${profile.email}로 메일 보내기`}
          >
            <Mail size={20} aria-hidden="true" />
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="소개 섹션으로 이동">
        <span>SCROLL</span>
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;
