import ProjectList from "./projectList";
import './latest.scss'
function Latest() {
  return (
    <section className="latest section portifolio">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading section-title">Últimos projetos</h2>
        <ProjectList />
      </div>
    </section>
  );
}

export default Latest;
