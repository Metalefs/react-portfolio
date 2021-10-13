import React, { useContext } from 'react';
import { LanguageContext } from '../../hocs/languageContext';
import './experience.scss'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

// function ExperienceItem(props:any) {
//   return (
//     <div className="item">
//       <h3 className="title">
//         {props.experience.title} - 
//         <span className="place">
//           <a href={props.experience.companyWebsite} target="_blank">
//             {props.experience.company}
//           </a>
//         </span> - 
//         <span className="year">{props.experience.timeSpan}</span>
//       </h3>
//       {props.experience.description.map((paragraph:any, index) =>  <React.Fragment key={props.experience.key+'p'+index}>{paragraph}</React.Fragment>)}
//         <hr />
//     </div>
//   );
// }

function Experience() {
  const data = useContext(LanguageContext).data;
  const sectionName = data.basic_info.section_name.experience;
  const work = data.experience.map(function (work, i) {
    const technologies = work.technologies;
    const mainTechnologies = work.mainTech;

    var mainTech = mainTechnologies.map((technology, i) => {
      return (
        <Badge pill className="main-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      );
    });
    var tech = technologies.map((technology, i) => {
      return (
        <Badge pill className="experience-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      );
    });

    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={work.years}
        iconStyle={{
          background: "#AE944F",
          color: "#fff",
          textAlign: "center",
        }}
        icon={<i className="fab fa-angular experience-icon"></i>}
        key={i}
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          {mainTech}
        </div>

        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          {work.title}
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          {work.company}
        </h4>
        <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
      </VerticalTimelineElement>
    );
  });
  

  return (
    <section id="resume" className="pb-5">
    <div className="col-md-12 mx-auto">
      <div className="col-md-12">
        <h1 className="section-title heading" style={{ color: "black" }}>
          <span className="text-black" style={{ textAlign: "center" }}>
            {sectionName}
          </span>
        </h1>
      </div>
    </div>
    <div className="col-md-8 mx-auto">
      <VerticalTimeline>
        {work}
        <VerticalTimelineElement
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={
            <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
          }
        />
      </VerticalTimeline>
    </div>
  </section>
  );
}

export default Experience;
const experiences = [
  {
    title: "Freelance",
    company: "PluralSystems",
    companyWebsite: "https://pluralsystems.com.br/",
    timeSpan: "(2020 - 2021)",
    description: [
      <p>
        Desenvolvimento de aplicação de agendamento de consultas de pet-shop
      </p>,
    ],
    key: 1
  },
  {
    title: "Analista Desenvolvedor .NET Júnior",
    company: "Rumo Soluções",
    companyWebsite: "https://rumosolucoes.com.br",
    timeSpan: "(2021 - Presente)",
    description: [
      <p>
        {" "}
        Atuação com desenvolvimento WEB. <br /> Tecnologias: Angular, NodeJS,
        Asp.Net, Web Forms, C#.
      </p>,
      <p>
        {" "}
        Atuação com desenvolvimento Mobile. <br /> Tecnologias: Xamarin.{" "}
      </p>,
      <p>
        {" "}
        Banco de dados: <br /> Mongo, Redis, SQL Server.
      </p>,
      <p> Desenvolvimento de Web-Crawlers</p>,
    ],
    key: 2
  },
  {
    title: "Estágio de Analise e Desenvolvimento",
    company: "Rumo Soluções",
    companyWebsite: "https://rumosolucoes.com.br",
    timeSpan: "(2019 - 2021)",
    description: [
      <p>Estágio com foco em desenvolvimento C#</p>,
      <p>Manutenção de aplicações: Asp.Net MVC, Asp.Net Web Forms,</p>
    ],
    key: 3
  },
];