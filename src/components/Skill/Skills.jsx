import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

export default function Skills() {
  return (
    <section className="section skills" id="skills" data-aos="fade-up">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical level</span>
      <div className="skills-container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}
