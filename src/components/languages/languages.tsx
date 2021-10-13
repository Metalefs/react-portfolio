import { useContext } from 'react';
import { LanguageContext } from '../../hocs/languageContext';
import './languages.scss'

function LanguageItem(props:any) {
  const languages = useContext(LanguageContext).data;
  return (
    <li className="item">
      <span className="title">
        <strong>{props.language.name}: </strong>
      </span>
      <span className="level">
        {props.language.proficiency} <br className="visible-xs" />
        {Array.from(Array(props.language.stars), (e, i) => <span className="iconify" data-icon="emojione:star"  key={props.language.name+'s'+i}></span>)}
      </span>
    </li>
  );
}

function Languages() {
  const languages = useContext(LanguageContext).data;
  return (
    <aside className="languages aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">{languages.basic_info.section_name.languages}</h2>
        <div className="content">
          <ul className="list-unstyled">
            {languages.languages.map((language,i) => <LanguageItem key={i} language={{...language}}/>)}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Languages;
