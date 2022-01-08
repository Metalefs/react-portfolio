import { useContext } from "react";
import { LanguageContext } from "../../../hocs/languageContext";
import  OtherProjectItem from './otherProjectItem';
import "./otherProjects.scss";


function OtherProjects() {
  const data = useContext(LanguageContext).data;
  return (
    <section className="projects section portfolio  pb-0 mb-0">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading ">
          {data.basic_info.section_name.otherProjects}
        </h2>
        <div className="content">
          {data.otherProjects.projects.map((item, i) => 
            <OtherProjectItem key={i} item={item}></OtherProjectItem>
          )}
          <a
            className="btn btn-cta-secondary"
            href="https://github.com/Metalefs/"
            target="_blank"
            rel="noreferrer"
          >
            {data.otherProjects.seeMoreLabel} <i className="fas fa-chevron-right pt-1"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default OtherProjects;
