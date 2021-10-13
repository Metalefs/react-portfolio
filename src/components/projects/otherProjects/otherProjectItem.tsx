function OtherProjectItem(props: any) {
  return (
    <div className="item portfolio-item d-block">
      <h3 className="title project-title-settings mt-3">
        <a href={props.item.href} target="_blank" rel="noreferrer">
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
          <span
            className="iconify mr-2"
            data-icon="fa-solid:external-link-alt"
          ></span>
          Video pitch!
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
export default OtherProjectItem;