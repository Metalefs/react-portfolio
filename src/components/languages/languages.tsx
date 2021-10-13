import { useContext } from 'react';
import { LanguageContext } from '../../hocs/languageContext';
import './languages.scss'

import LanguageItem from './languageItem';

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
