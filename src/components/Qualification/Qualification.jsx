import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosBriefcase } from "react-icons/io";

import "./Qualification.css";
export default function Qualification() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="section qualification">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My personal journey</span>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div className={toggle === 1 ? "qualification-button qualification-active button--flex" : "qualification-button button--flex"} onClick={() => toggleTab(1)}>
            <FaGraduationCap className="qualification-icon" />
            Education
          </div>
          <div className={toggle === 2 ? "qualification-button qualification-active button--flex" : "qualification-button button--flex"} onClick={() => toggleTab(2)}>
            <IoIosBriefcase className="qualification-icon" />
            Experience
          </div>
        </div>

        <div className="qualification-sections">
          <div className={toggle === 1 ? "qualification-content qualification-content-active" : "qualification-content"}>
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Software Engineering</h3>
                <span className="qualification-subtitle">Wikrama Vocational High School</span>
                <div className="qualification-calendar">
                  <CiCalendarDate /> 2020 - 2023
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
          </div>

          <div className={toggle === 2 ? "qualification-content qualification-content-active" : "qualification-content"}>
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Web Developer</h3>
                <span className="qualification-subtitle">Bogor - Indonesia</span>
                <div className="qualification-calendar">
                  <CiCalendarDate /> July 2022 - Dec 2022
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <h3 className="qualification-title">Mobile Developer</h3>
                <span className="qualification-subtitle">Bogor - Indonesia</span>
                <div className="qualification-calendar">
                  <CiCalendarDate /> July 2022 - Dec 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
