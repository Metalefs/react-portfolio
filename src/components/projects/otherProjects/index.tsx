import { useContext } from "react";
import { LanguageContext } from "../../../hocs/languageContext";
import "./projects.scss";

function OtherProjectItem(props: any) {
  return (
    <div className="item portfolio-item d-block">
      <h3 className="title project-title-settings mt-3">
        <a href={props.item.href} target="_blank">
          {props.item.title}
        </a>{" "}
        <span className="badge badge-theme">{props.item.badge}</span>
      </h3>
      <p className="summary">{props.item.description}</p>
      <p>
        <a
          className="more-link"
          href={props.item.pitchSrc}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-external-link-alt"></i>Video pitch!
        </a>
      </p>
      <div className="item">
        <p className="summary">
          <iframe
            width=""
            height="315"
            src={props.item.iframeSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </p>
      </div>
    </div>
  );
}

function OtherProjects() {
  const data = useContext(LanguageContext).data;
  return (
    <section className="projects section portfolio">
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
