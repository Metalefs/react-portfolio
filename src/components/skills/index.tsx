import { useContext } from "react";
import { IResumeData, LanguageContext } from "../../hocs/languageContext";
import { SharedData, SharedDataContext } from "../../hocs/sharedDataProvider";
import SkillItem from "./skillItem";
import "./skills.scss";
import ScrollAnimation from "react-animate-on-scroll";

function Skills() {
  const sharedBasicInfo = useContext(SharedDataContext) as SharedData;

  return (
    <LanguageContext.Consumer>
      {({ language, data, toggleLanguage }) => (
        <section id="skills" className="pb-0 section mb-0">
          <div className="col-md-12">
            <div className="section-inner">
              <h2 className="heading ">
                {data.basic_info.section_name.skills}
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
                <ScrollAnimation duration={.5} animateIn="zoomIn">
                  <SkillsAside></SkillsAside>
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

export function SkillsAside() {
  const data = useContext(LanguageContext) as IResumeData;
  return (
    <aside className="skills aside section mb-0 pt-0">
      <div className="section-inner shadow-sm rounded">
        <div className="content">
          {/* <p className="intro">
           {data.data.skills.title}
          </p>
          <p>
           {data.data.skills.description}
          </p> */}
          <div className="skillset">
            {data.data.skills.technologies.map((skill,i) => (
              <SkillItem key={i} skill={{ ...skill }} />
            ))}

            <p>
              <a
                className="more-link"
                href="https://github.com/Metalefs/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-external-link-alt"></i>{data.data.skills.seeMoreLabel}
              </a>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
