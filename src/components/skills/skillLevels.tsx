import React, { useContext } from "react";

import { IResumeData, LanguageContext } from "../../hocs/languageContext";
import SkillItem from "./skillItem";

export default function SkillLevels() {
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
              {data.data.stackProgress.map((skill,i) => (
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
  