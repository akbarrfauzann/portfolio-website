import { useState } from "react";
import { IoMdHome, IoMdClose, IoMdPerson } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaImage, FaFileCode } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";

import "./Header.css";
export default function Header() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="navbar container">
        <a href="#home" className="nav-logo">
          Akbar
        </a>
        <div className={`nav-menu ${toggle ? "show-menu" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className={`nav-link ${activeNav === "#home" && "active-link"}`} onClick={() => setActiveNav("#home")}>
                <IoMdHome className="nav-icon" />
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className={`nav-link ${activeNav === "#about" && "active-link"}`} onClick={() => setActiveNav("#about")}>
                <IoMdPerson className="nav-icon" />
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#skills" className={`nav-link ${activeNav === "#skills" && "active-link"}`} onClick={() => setActiveNav("#skills")}>
                <FaFileCode className="nav-icon" />
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a href="#portfolio" className={`nav-link ${activeNav === "#portfolio" && "active-link"}`} onClick={() => setActiveNav("#portfolio")}>
                <FaImage className="nav-icon" />
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className={`nav-link ${activeNav === "#contact" && "active-link"}`} onClick={() => setActiveNav("#contact")}>
                <MdContactMail className="nav-icon" />
                Contact
              </a>
            </li>
          </ul>

          <IoMdClose className="nav-close" onClick={() => setToggle(!toggle)} />
        </div>

        <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
          <AiOutlineAppstore />
        </div>
      </nav>
    </header>
  );
}
