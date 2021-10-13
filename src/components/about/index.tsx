import React, { Component, useContext } from "react";

import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import { SharedData, SharedDataContext } from "../../hocs/sharedDataProvider";
import { LanguageContext, ResumeData } from "../../hocs/languageContext";

function About() {
  const sharedBasicInfo = useContext(SharedDataContext) as SharedData;
  const profilepic = "images/" + sharedBasicInfo.basic_info.image;
  return (
    <LanguageContext.Consumer>
      {({ language, data, toggleLanguage }) => (
        
        <section id="about section">
          <div className="col-md-12 section-inner shadow-sm rounded">
            <h2 className="heading" style={{ color: "black" }}>
              <span>{data.basic_info.section_name.about}</span>
            </h2>
            <div className="row center d-flex justify-content-center align-items-center mx-auto mb-5">

                <div className="col-md-4 mb-5 d-flex justify-content-center">
                  <div className="polaroid">
                    <span style={{ cursor: "auto" }}>
                      <img
                        width='70'
                        src={profilepic}
                        alt="Avatar placeholder"
                      />
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
                  <div className="card">
                    <div className="card-header d-flex justify-content-end">
                      <span
                        className="iconify"
                        data-icon="codicon:chrome-minimize"
                        data-inline="false"
                      ></span>{" "}
                      &nbsp;{" "}
                      <span
                        className="iconify"
                        data-icon="codicon:chrome-maximize"
                        data-inline="false"
                      ></span>{" "}
                      &nbsp;{" "}
                      <span
                        className="iconify"
                        data-icon="codicon:chrome-close"
                        data-inline="false"
                      ></span>
                    </div>
                    <div
                      className="card-body font-trebuchet text-justify ml-3 mr-3"
                      style={{
                        height: "auto",
                        fontSize: "132%",
                        lineHeight: "200%",
                      }}
                    >
                      <br />
                      <span className="wave">{data.basic_info.description_header} :) </span>
                      <br />
                      <br />
                      <p>{data.basic_info.description}</p>
                      {data.skills.description}
                    </div>
                  </div>
                </div>
              {/* <div className="col-md-12  px-0">
              </div> */}
            </div>
          </div>
        </section>
      )}
    </LanguageContext.Consumer>
  );
}

export default About;
