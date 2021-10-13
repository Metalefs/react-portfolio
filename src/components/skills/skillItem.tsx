function SkillItem(props:any) {
  return (
    <div className="item">
      <h3 className="level-title">
        {props.skill.name}
        <span
          className="level-label"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title={props.skill.levelTitle}
        >
          <i className="fas fa-info-circle"></i>
          {props.skill.level}
        </span>
      </h3>

      <div className="level-bar progress">
        <div
          className="progress-bar level-bar-inner"
          role="progressbar"
          style={{
            width: props.skill.progress,
          }}
        ></div>
      </div>
    </div>
  );
}
export default SkillItem;
