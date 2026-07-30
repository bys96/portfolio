import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../../styles/header.css";

const menus = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <a href="#home" className="header__logo">
          YS<span>.</span>
        </a>

        <nav className={`header__nav ${open ? "active" : ""}`}>
          {menus.map((menu) => (
            <a key={menu.name} href={menu.link} onClick={() => setOpen(false)}>
              {menu.name}
            </a>
          ))}
        </nav>

        <button className="header__menu" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
