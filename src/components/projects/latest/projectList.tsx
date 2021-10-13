import ProjectItem from "./projectItem";

function ProjectList() {

  const projects = [
    {
        title:'Personalizados Lopes - A Loja onde você personaliza os produtos',
        description:'',
        href:'https://personalizadoslopes.com.br/',
        imgSrc:'images/portfolio/personalizados-lopes/p1.png',
        ribbonText:'Novo',
        featured: true,
        key: 1,
    },
    {
        title: 'Clinivet Agendamento - O primeiro hospital veterinário do Brasil com agendamento online.',
        description: 'Um projeto onde atuei como desenvolvedor frontend em conjunto com um desenvolvedor Angular Sênior.',
        href: 'http://191.252.156.153:8010/',
        imgSrc: 'assets/images/projects/project-1.jpeg',
        ribbonText:'',
        key: 2,
    },
    {
        title: 'Estatistica Online - Funções gerais de estátistica em webapp',
        description: 'Um aplicativo de resolução de questões de estátistica com Angular e backend em C#.',
        href: 'https://distribuicao-dados-agrupados.web.app/',
        imgSrc: 'https://metalefs.github.io/assets/images/projects/project-2.jpeg',
        ribbonText:'',
        key: 3,
    },
    {
        title: 'Componente Gestor de Cookies - Componente injetável para compliance com a LGPD',
        description: 'MVP em estado de prova de conceito com back-end em Nest e front-end em VueJS.',
        href: 'https://github.com/Metalefs/POC-VUE-Gestao-de-cookies',
        imgSrc: 'https://metalefs.github.io/assets/images/projects/project-3.jpeg',
        ribbonText:'',
        key: 4,
    },
    {
        title: 'Assistente de Estágio - MVP para gestão do processo de estágio assistido',
        description: 'MVP em estado de testes de gestão online do processo de estágio desenvolvido em Asp .Net Core.',
        href: 'http://assistentedeestagio.com.br/',
        imgSrc: 'https://metalefs.github.io/assets/images/projects/poc-ade_gif.gif',
        ribbonText:'',
        customSeeMoreText: 'Veja o nosso vídeo pitch!'     ,
        key: 5, 
    },
  ]

  return (
    <div className="content">
      
        {projects.map(project => <ProjectItem key={project.key} project={{...project}}/>)}

    </div>
  );
}

export default ProjectList;
