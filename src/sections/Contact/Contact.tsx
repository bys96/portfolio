import { ArrowUpRight, Copy, Mail, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import "../../styles/contact.css";

const EMAIL = "jkpp0611@naver.com";
const GITHUB_URL = "https://github.com/bys96";

function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setIsCopied(true);

      window.setTimeout(() => {
        setIsCopied(false);
      }, 1800);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__content">
          <p className="contact__subtitle">CONTACT</p>

          <h2 className="contact__title">
            함께 성장할 기회를
            <br />
            기다리고 있습니다.
          </h2>

          <p className="contact__description">
            새로운 기술을 배우고 문제를 해결하는 과정을 즐깁니다.
            <br />
            함께 좋은 서비스를 만들어갈 기회가 있다면 편하게 연락해 주세요.
          </p>

          <div className="contact__actions">
            <a
              className="contact__button contact__button--primary"
              href={`mailto:${EMAIL}`}
            >
              <Mail size={19} aria-hidden="true" />
              이메일 보내기
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>

            <a
              className="contact__button"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={19} aria-hidden="true" />
              GitHub
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="contact__information">
          <article className="contact-card contact-card--email">
            <div className="contact-card__top">
              <span className="contact-card__icon">
                <Mail size={22} aria-hidden="true" />
              </span>

              <span className="contact-card__label">EMAIL</span>
            </div>

            <div className="contact-card__body">
              <p className="contact-card__title">이메일</p>

              <a className="contact-card__value" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>

            <button
              className="contact-card__copy"
              type="button"
              onClick={handleCopyEmail}
              aria-label="이메일 주소 복사"
            >
              <Copy size={16} aria-hidden="true" />
              {isCopied ? "복사 완료" : "주소 복사"}
            </button>
          </article>

          <article className="contact-card">
            <div className="contact-card__top">
              <span className="contact-card__icon">
                <FaGithub size={22} aria-hidden="true" />
              </span>

              <span className="contact-card__label">GITHUB</span>
            </div>

            <div className="contact-card__body">
              <p className="contact-card__title">GitHub</p>

              <a
                className="contact-card__value"
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
              >
                {GITHUB_URL}
              </a>
            </div>

            <a
              className="contact-card__external"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub 새 창에서 열기"
            >
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </article>

          <article className="contact-card">
            <div className="contact-card__top">
              <span className="contact-card__icon">
                <MapPin size={22} aria-hidden="true" />
              </span>

              <span className="contact-card__label">LOCATION</span>
            </div>

            <div className="contact-card__body">
              <p className="contact-card__title">활동 지역</p>

              <p className="contact-card__value">대한민국 서울</p>
            </div>

            <span className="contact-card__status">
              <span className="contact-card__status-dot" aria-hidden="true" />
              Available
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
