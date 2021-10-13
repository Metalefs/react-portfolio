function EducationItem(props:any) {
  return (
    <div className="item">
      <h3 className="title">
        <i className="fas fa-graduation-cap"></i> {props.source.title}
      </h3>
      <h4 className="university">
        {props.source.university}
        <span className="year">{props.source.period}</span>
      </h4>
    </div>
  );
}

export default EducationItem;
