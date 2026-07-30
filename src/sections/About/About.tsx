import "../../styles/about.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__header">
        <p className="about__subtitle">ABOUT ME</p>
        <h2 className="about__title">개발자를 소개합니다.</h2>
      </div>

      <div className="about__content">
        <div className="about__card">
          <h3>👋 소개</h3>

          <p>
            안녕하세요.
            <br />
            사용자 경험을 중요하게 생각하는 프론트엔드 개발자
            <strong> 변윤석</strong>입니다.
          </p>

          <p>
            React와 TypeScript를 기반으로 유지보수가 쉬운 구조와 깔끔한 UI를
            만드는 것을 좋아합니다.
          </p>
        </div>

        <div className="about__info">
          <div className="about__item">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>South Korea</p>
            </div>
          </div>

          <div className="about__item">
            <span>💼</span>
            <div>
              <h4>Role</h4>
              <p>Frontend Developer</p>
            </div>
          </div>

          <div className="about__item">
            <span>🚀</span>
            <div>
              <h4>Stack</h4>
              <p>React · TypeScript · Spring Boot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
