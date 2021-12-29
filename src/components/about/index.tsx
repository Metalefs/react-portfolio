import React from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import { LanguageContext } from "../../hocs/languageContext";
import AboutCard from './aboutCard';

function About() {
 
  return (
    <LanguageContext.Consumer>
      {({ language, data, toggleLanguage }) => (
        <section id="about" className="about section mb-0 pt-0">
          <div className="col-md-12 section-inner shadow-sm rounded">
            <h2 className="heading" style={{ color: "black" }}>
              <span>{data.basic_info.section_name.about}</span>
            </h2>
            <div className="row center d-flex justify-content-center align-items-center mx-auto mb-5">
              <div className="col-md-4 mb-5 d-flex justify-content-center">
                <div className="polaroid">
                  <span style={{ cursor: "auto" }}>
                    <Icon
                      icon={angularIcon}
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    />
                    <Icon
                      icon={reactIcon}
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    />
                    <Icon
                      icon={vueIcon}
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    />
                  </span>
                </div>
              </div>
              <div className="col-md-8">
                <AboutCard
                  basic_info={data.basic_info}
                  description={data.skills.description}
                ></AboutCard>
              </div>
            </div>
          </div>
        </section>
      )}
    </LanguageContext.Consumer>
  );
}

export default About;
