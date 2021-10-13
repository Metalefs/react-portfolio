function LanguageItem(props: any) {
  return (
    <li className="item">
      <span className="title">
        <strong>{props.language.name}: </strong>
      </span>
      <span className="level">
        {props.language.proficiency} <br className="visible-xs" />
        {Array.from(Array(props.language.stars), (e, i) => (
          <span
            className="iconify"
            data-icon="emojione:star"
            key={props.language.name + "s" + i}
          ></span>
        ))}
      </span>
    </li>
  );
}
export default LanguageItem;