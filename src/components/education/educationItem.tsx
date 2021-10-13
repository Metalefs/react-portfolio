function EducationItem(props: any) {
  return (
    <div className="item">
      <h3 className="title">
        <span className="iconify mr-2" data-icon="fa:graduation-cap"></span>
        {props.source.title}
      </h3>
      <h4 className="university">
        {props.source.university}
        <span className="year">{props.source.period}</span>
      </h4>
    </div>
  );
}

export default EducationItem;
