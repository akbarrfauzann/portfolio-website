import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Social() {
  return (
    <div className="home-social">
      <a href="https://github.com/akbarrfauzann" className="home-social-icon" target="_blank" aria-label="Github">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/muhammad-akbar-fauzan-susetyo-50697b260/" className="home-social-icon" target="_blank" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/akbarrfauzannn/" className="home-social-icon" target="_blank" aria-label="Instagram">
        <FaInstagram />
      </a>
    </div>
  );
}
