import { LuBadgeCheck } from "react-icons/lu";

export default function Frontend() {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Frontend Developer</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <LuBadgeCheck className="skills-icon" />
            <div>
              <h3 className="skills-name">HTML</h3>
            </div>
          </div>
          <div className="skills-data">
            <LuBadgeCheck className="skills-icon" />
            <div>
              <h3 className="skills-name">CSS</h3>
            </div>
          </div>
          <div className="skills-data">
            <LuBadgeCheck className="skills-icon" />
            <div>
              <h3 className="skills-name">Javascript</h3>
            </div>
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <LuBadgeCheck className="skills-icon" />
            <div>
              <h3 className="skills-name">Bootstrap</h3>
            </div>
          </div>
          <div className="skills-data">
            <LuBadgeCheck className="skills-icon" />
            <div>
              <h3 className="skills-name">Tailwind CSS</h3>
            </div>
          </div>
          <div className="skills-data">
            <LuBadgeCheck className="skills-icon" />
            <div>
              <h3 className="skills-name">React JS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
