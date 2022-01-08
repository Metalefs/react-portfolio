function AboutCard(props) {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <p className="card-title">
          {
            <span className="wave">
              {props.basic_info.description_header} :D{" "}
            </span>
          }
        </p>
        <div>
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

        <br />
        <br />
        <p>{props.basic_info.description}</p>
        {props.description}
      </div>
    </div>
  );
}
export default AboutCard;
