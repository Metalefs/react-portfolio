import EducationItem from './educationItem';
import './education.scss'
import { useContext } from 'react';
import { LanguageContext } from '../../hocs/languageContext';
function Education() {
  const sources = useContext(LanguageContext).data;
  return (
    <aside className="education aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">{sources.basic_info.section_name.education}</h2>
        <div className="content">
          {sources.education.map((source, i)=><EducationItem key={i} source={{...source}}/>)}
        </div>
      </div>
    </aside>
  );
}

export default Education;
