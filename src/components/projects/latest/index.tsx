import './latest.scss'
import { LanguageContext } from "../../../hocs/languageContext";
import { useContext } from "react";
import ProjectItem from './projectItem';


function Latest() {
  const data = useContext(LanguageContext).data;

  return (
    <section className="latest section portifolio">

      <div className="section-inner shadow-sm rounded">

        <h2 className="heading section-title">Últimos projetos</h2>

        <div className="content">
          {data.projects.projects.map((project,i) => <ProjectItem key={i} project={{...project}}/>)}
        </div>
        
      </div>

    </section>
  );
}

export default Latest;
