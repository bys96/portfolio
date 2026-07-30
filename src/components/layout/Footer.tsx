import { ArrowUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "../../styles/footer.css";

const GITHUB_URL = "https://github.com/your-github-id";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h3 className="footer__logo">윤석</h3>

          <p className="footer__copyright">© 2026 윤석. All rights reserved.</p>
        </div>

        <div className="footer__right">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="footer__icon"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a href="#hero" className="footer__top">
            <ArrowUp size={18} />
            TOP
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
