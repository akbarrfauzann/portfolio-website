import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer-link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a href="https://www.instagram.com/akbarrfauzannn/" className="footer-social-link" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-akbar-fauzan-susetyo-50697b260/" className="footer-social-link" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/akbarrfauzann" className="footer-social-link" target="_blank" aria-label="Github">
            <FaGithub />
          </a>
        </div>

        <span className="footer-copy">&#169; Muhammad Akbar Fauzan Susetyo.</span>
      </div>
    </footer>
  );
}
