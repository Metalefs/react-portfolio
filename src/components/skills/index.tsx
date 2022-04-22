import { useContext } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { LanguageContext } from "../../hocs/languageContext";
import { SharedData, SharedDataContext } from "../../hocs/sharedDataProvider";
import "./skills.scss";

import SkillLevels from "./skillLevels";

function Skills() {
  const sharedBasicInfo = useContext(SharedDataContext) as SharedData;

  return (
    <LanguageContext.Consumer>
      {({ language, data, toggleLanguage }) => (
        <section id="skills" className="pb-0 section mb-0">
          <div className="col-md-12">
            <div className="section-inner">
              <h2 className="heading ">
                {data.section_name.skills}
              </h2>
            </div>
            <div className="col-md-12 text-center">
              <div className="section">
                <ul className="list-inline mx-auto skill-icon">
                  {sharedBasicInfo.skills.icons.map(function (skills, i) {
                    return (
                      <li className="list-inline-item mx-3" key={i}>
                        <span>
                          <div className="text-center skills-tile">
                            <i
                              className={skills.class}
                              style={{ fontSize: "220%" }}
                            >
                              <p
                                className="text-center"
                                style={{ fontSize: "30%", marginTop: "4px" }}
                              >
                                {skills.name}
                              </p>
                            </i>
                          </div>
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <ScrollAnimation duration={0.5} animateIn="zoomIn">
                  <SkillLevels></SkillLevels>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      )}
    </LanguageContext.Consumer>
  );
}
export default Skills;
