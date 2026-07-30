import { ArrowDown, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "../../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__glow hero__glow--top"></div>
      <div className="hero__glow hero__glow--bottom"></div>

      <div className="hero__content">
        <p className="hero__subtitle">WEB DEVELOPER PORTFOLIO</p>

        <h1 className="hero__title">
          안녕하세요.
          <br />웹 개발자 <span>변윤석</span>입니다.
        </h1>

        <p className="hero__description">
          사용자에게 편리한 경험을 제공하고,
          <br />
          안정적으로 동작하는 서비스를 만들기 위해 고민합니다.
        </p>

        <div className="hero__buttons">
          <a href="#projects" className="hero__btn hero__btn--primary">
            프로젝트 보기
          </a>

          <a
            href="https://github.com/bys96"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--secondary"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="mailto:jkpp0611@naver.com"
            className="hero__icon-btn"
            aria-label="메일 보내기"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll">
        <span>SCROLL</span>
        <ArrowDown size={18} />
      </a>
    </section>
  );
}

export default Hero;
