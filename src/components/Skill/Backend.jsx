import { LuBadgeCheck } from "react-icons/lu";

export default function Backend() {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Backend Developer</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <LuBadgeCheck className="skills-icon" />
            <div>
              <h3 className="skills-name">MySQL</h3>
            </div>
          </div>
          <div className="skills-data">
            <LuBadgeCheck className="skills-icon" />
            <div>
              <h3 className="skills-name">Laravel</h3>
            </div>
          </div>
          <div className="skills-data">
            <LuBadgeCheck className="skills-icon" />
            <div>
              <h3 className="skills-name">Git</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
