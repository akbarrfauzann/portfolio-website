import { FaAward } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoBriefcaseOutline } from "react-icons/io5";

export default function Info() {
  return (
    <div className="about-info grid">
      <div className="about-box">
        <FaAward className="about-icon" />
        <h3 className="about-title">Experience</h3>
        <span className="about-subtitle">1 Years Working</span>
      </div>

      <div className="about-box">
        <IoBriefcaseOutline className="about-icon" />
        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">5+ Projects</span>
      </div>

      <div className="about-box">
        <BiSupport className="about-icon" />
        <h3 className="about-title">Support</h3>
        <span className="about-subtitle">Online 24/7</span>
      </div>
    </div>
  );
}
