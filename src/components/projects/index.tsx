import React, { useState, useContext } from "react";
import ProjectDetailsModal from "./projectDetailsModal";

import { LanguageContext, IResumeData } from "../../hocs/languageContext";
function Projects() {
  let [state, setState] = useState({
    deps: {},
    detailsModalShow: false,
  });
  const resumeInfo = useContext(LanguageContext) as IResumeData;

  let detailsModalShow = (data) => {
    setState({ detailsModalShow: true, deps: data });
  };

  let detailsModalClose = () => setState({ deps: state.deps, detailsModalShow: false });
  var sectionName = resumeInfo.data.basic_info.section_name.projects;
  
  var projects = resumeInfo.data.projects.map(function (projects) {
    return (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={projects.title}
        style={{ cursor: "pointer" }}
      >
        <span className="portfolio-item d-block">
          <div className="foto" onClick={() => detailsModalShow(projects)}>
            <div>
              <img
                src={projects.images[0]}
                alt="projectImages"
                height="230"
                width="300"
                style={{
                  marginBottom: 0,
                  paddingBottom: 0,
                  position: "relative",
                }}
              />
              <span className="project-date">{projects.startDate}</span>
              {/* <br />
              <p className="project-title-settings mt-3">{projects.title}</p> */}
            </div>
          </div>
        </span>
      </div>
    );
  });

  return (
    <section id="portfolio" className="">
      <div className="col-md-12">
        <div className="col-md-12">
          <h2 className="section-title heading">
            <span className="text-black-50">{sectionName}</span>
          </h2>
        </div>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        <ProjectDetailsModal
          show={state.detailsModalShow}
          onHide={detailsModalClose}
          data={state.deps}
        />
      </div>
    </section>
  );
}

export default Projects;
