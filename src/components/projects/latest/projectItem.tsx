function ProjectItem(props: any) {
  return props.project.featured ? (
    <div
      className={`item ${props.project.featured ?? "featured"} text-center `}
    >
      <div
        className={`${
          props.project.featured ?? "featured-image"
        } has-ribbon foto `}
      >
        <div>
          <a href={props.project.href} target="_blank" rel="noreferrer">
            <img
              className="img-fluid project-image rounded shadow-sm"
              src={props.project.imgSrc}
              width="300"
              alt="project name"
            />
          </a>
          <span className="ribbon">
            <div className="text">{props.project.ribbonText}</div>
          </span>

          <span className="project-date">{props.project.startDate ?? ""}</span>
          <br />
          <h3 className="title mb-3">
            <a href={props.project.href} target="_blank" rel="noreferrer">
              {props.project.title}
            </a>
          </h3>

          <span className="desc text-start">
            <p>{props.project.description}</p>
          </span>

          {props.project.featured && (
            <a
              className="btn btn-cta-secondary"
              rel="noreferrer"
              href={props.project.href}
              target="_blank"
            >
              <i className="fas fa-thumbs-up"></i> Apoie o meu projeto
            </a>
          )}
        </div>
      </div>

      <hr className="divider" />
    </div>
  ) : (
    <div className="item row ">
      <a className="col-md-4 col-12 " href={props.project.href} target="_blank" rel="noreferrer">
        <img
          className="img-fluid project-image rounded shadow-sm"
          src={props.project.imgSrc}
          alt="project name"
        />
      </a>
      <div className="desc col-md-8 col-12">
        <h3 className="title">
          <a href={props.project.href} target="_blank" rel="noreferrer">
            {props.project.title}
          </a>
        </h3>
        <p className="mb-2">{props.project.description}</p>
        <p>
          <a className="more-link" href={props.project.href} target="_blank" rel="noreferrer">
            <i className="fas fa-external-link-alt"></i>{" "}
            {props.project.customSeeMoreText || "Veja mais"}
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProjectItem;
