import "./Skills.css";
import Frontend from "./Frontend";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical level</span>
      <div className="skills-container container grid">
        <Frontend />
      </div>
    </section>
  );
}
