import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../../data/profile";
import "../../styles/header.css";

const menus = [
  { name: "About", link: "#about", id: "about" },
  { name: "Experience", link: "#experience", id: "experience" },
  { name: "Projects", link: "#projects", id: "projects" },
  { name: "Skills", link: "#skills", id: "skills" },
  { name: "Education", link: "#education", id: "education" },
  { name: "Contact", link: "#contact", id: "contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /*
   * 메뉴 클릭으로 스크롤 이동 중인 목표 섹션의 id.
   * 값이 있으면 이동 중이며, 중간 섹션 감지는 무시한다.
   */
  const targetSectionRef = useRef<string | null>(null);

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (!visibleSection) return;

        const visibleSectionId = visibleSection.target.id;
        const targetSectionId = targetSectionRef.current;

        /*
         * 메뉴 클릭으로 이동 중인 경우:
         * 중간에 지나가는 섹션은 무시하고,
         * 목표 섹션에 도착했을 때만 잠금을 해제한다.
         */
        if (targetSectionId) {
          if (visibleSectionId !== targetSectionId) return;

          setActiveSection(targetSectionId);
          targetSectionRef.current = null;
          return;
        }

        /*
         * 직접 스크롤하는 경우:
         * 현재 감지 영역에 들어온 섹션을 활성화한다.
         */
        setActiveSection(visibleSectionId);
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    menus.forEach((menu) => {
      const section = document.getElementById(menu.id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMenuClick = (sectionId: string) => {
    targetSectionRef.current = sectionId;
    setActiveSection(sectionId);
    closeMenu();
  };

  return (
    <header className="header">
      <div className="header__container">
        <a
          href="#home"
          className="header__logo"
          onClick={() => {
            targetSectionRef.current = null;
            setActiveSection("");
            closeMenu();
          }}
          aria-label={`${profile.name} 포트폴리오 홈`}
        >
          {profile.initials}
          <span>.</span>
        </a>

        <nav
          className={`header__nav ${open ? "active" : ""}`}
          id="primary-navigation"
          aria-label="주요 메뉴"
        >
          {menus.map((menu) => {
            const isActive = activeSection === menu.id;

            return (
              <a
                key={menu.id}
                className={isActive ? "header__nav-link--active" : ""}
                href={menu.link}
                onClick={() => handleMenuClick(menu.id)}
                aria-current={isActive ? "page" : undefined}
              >
                {menu.name}
              </a>
            );
          })}
        </nav>

        <button
          className="header__menu"
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
