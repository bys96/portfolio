import { ArrowUp } from "lucide-react";
import "../../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h3 className="footer__logo">YS Portfolio</h3>

          <p className="footer__copyright">© 2026 All rights reserved.</p>
        </div>

        <div className="footer__right">
          <a
            href="#home"
            className="footer__top"
            aria-label="페이지 맨 위로 이동"
          >
            <ArrowUp size={18} aria-hidden="true" />
            TOP
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
