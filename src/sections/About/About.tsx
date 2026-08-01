import { BriefcaseBusiness, Code2, MapPin } from "lucide-react";
import { profile } from "../../data/profile";
import "../../styles/about.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__header">
        <p className="about__subtitle">ABOUT ME</p>
        <h2 className="about__title">사용자 경험에서 출발하는 개발자입니다.</h2>
      </div>

      <div className="about__content">
        <div className="about__card">
          <h3>👋 소개</h3>

          <p>
            안녕하세요. 사용자 경험을 최우선으로 생각하는
            <strong>
              {" "}
              {profile.role} {profile.name}
            </strong>
            입니다.
          </p>

          <p>
            편리하고 직관적인 UI/UX를 설계하고, 이를 안정적인 코드로 구현하는
            과정을 중요하게 생각합니다. 화면을 만드는 데 그치지 않고 사용자가
            서비스를 자연스럽게 이해하고 사용할 수 있도록 고민합니다.
          </p>

          <p>
            프론트엔드와 백엔드를 함께 학습하고 프로젝트에 적용하며, 끊임없이
            배우고 시도하는 자세로 더 나은 일상을 만드는 개발자로 성장하고
            있습니다.
          </p>
        </div>

        <div className="about__info">
          <div className="about__item">
            <span aria-hidden="true">
              <MapPin size={22} aria-hidden="true" />
            </span>
            <div>
              <h4>Location</h4>
              <p>{profile.location}</p>
            </div>
          </div>

          <div className="about__item">
            <span aria-hidden="true">
              <BriefcaseBusiness size={22} aria-hidden="true" />
            </span>
            <div>
              <h4>Role</h4>
              <p>{profile.role}</p>
            </div>
          </div>

          <div className="about__item">
            <span aria-hidden="true">
              <Code2 size={22} aria-hidden="true" />
            </span>
            <div>
              <h4>Main Stack</h4>
              <p>{profile.coreStack.join(" · ")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
