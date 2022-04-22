import emoji from "react-easy-emoji";

export const data = {
  header: {
    skills: "Skills",
    experience: "Experiências",
    opensource: "Open Source",
    achievements: "Conquistas",
    blogs: "Blogs",
    talks: "Palestras",
    contact: "Contato",
  },
  basic_info: {
    description_header: "Olá Mundo!",
    description: `👋 Meu nome é Jackson Pires. Estou trabalhando com os mais novos frameworks de front-end como Angular, React e Vue. Aprendendo as novas tecnologias de front e back-end, buscando ativamente minimizar os processos manuais, em detrimento dos processos automatizados.

      Atuo no desenvolvimento de aplicações utilizando as tecnologias:
       Nodejs,
       .Net Core,
       Angular &
       React.
      
      Meu maior interesse no momento tem sido desacoplar aplicações monolíticas orquestrando-as seguindo um padrão de arquitetura de micro serviços.
      
      Possuo conhecimento extra das tecnologias: 
       Asp.Net MVC e Web Forms &
       PHP.
      
      Atuo com desenvolvimento de Aplicativos nativos nas tecnologias: 
       Xamarin.Forms,
      
      Tenho interesse em desenvolver aplicações nativas com React Native, ou outras frameworks Cross-Platform no futuro.`,
  },
  section_name: {
    contact: "Contato",
    about: "Sobre mim",
    projects: "Projetos",
    otherProjects: "Outros Projetos",
    skills: "Habilidades",
    experience: "Experiência",
    github: "Meu GitHub",
    recommendations: "Recomendações",
    education: "Educação",
    languages: "Idiomas",
    proficiency: "Proficiência",
    blog: "Últimas postagens minhas no StackOverflow e Medium",
    music: "Minha música favorita para codar",
    conferences: "Conferências",
    source_code: "Veja o código fonte deste site",
    resume: "Veja meu Currículo",
  },
  skills: {
    subTitle:
      "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      emoji(
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
      ),
      emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
      emoji(
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
      ),
    ],
    title: `Sou um Autodidata no aprendizado de novas tecnologias de
    desenvolvimento web e aspirante a 1/10x (Fullstack) programmer.`,
    description: `Estou focado no aprendizado de tecnologias de descentralização, como
    mensageria e microserviços e também estou voltado ao desenvolvimento
    de aplicações Blockchain de De-fi (Decentralized Finance)`,
    seeMoreLabel: "Veja mais no Github",
  },
  stackProgress: [
    {
      name: ".NET",
      level: "Pro",
      levelTitle: "2 anos de experiencia com desenvolvimento e manutenção.",
      progress: "86%",
    },
    {
      name: "React",
      level: "Advanced",
      levelTitle: "Estou trabalhando em tempo integral com React.",
      progress: "75%",
    },
    {
      name: "Angular",
      level: "Pro",
      levelTitle:
        "Eu trabalhei em 2 projetos grandes e um par de projetos menores.",
      progress: "86%",
    },
    {
      name: "Vue",
      level: "Intermediate",
      levelTitle:
        "Eu desenvolvi um gerenciador de cookies simples com este framework.",
      progress: "64%",
    },
    {
      name: "Docker",
      level: "Intermediate",
      levelTitle:
        "Eu uso Docker na maior parte para publicar containeres de APIs.",
      progress: "54%",
    },
    {
      name: "Kubernetes",
      level: "Intermediate",
      levelTitle: "Eu uso Kubernetes para escalar containeres do Docker.",
      progress: "54%",
    },
    {
      name: "NodeJS",
      level: "Intermediate",
      levelTitle: "Crio API's maneiras com nodeJS",
      progress: "70%",
    },
    {
      name: "MongoDB",
      level: "Pro",
      levelTitle:
        "Posso desenvolver serviços mínimos / otimizados usando este banco de dados",
      progress: "86%",
    },
  ],
  projects: [
    {
      title: "Assistente de Estágio",
      startDate: "2019",
      description:
        "MVP em estado de testes de gestão online do processo de estágio desenvolvido em Asp .Net Core.",
      images: [
        "images/portfolio/ADE/p1.gif",
        "images/portfolio/ADE/p2.jpeg",
        "images/portfolio/ADE/p3.jpeg",
      ],
      url: "http://assistentedeestagio.com.br/",
      technologies: [
        {
          class: "devicon-csharp-plain",
          name: "C#",
        },
        {
          class: "devicon-dot-net-plain",
          name: "AspNet",
        },
        {
          class: "devicon-dot-net-plain",
          name: "Razor",
        },
        {
          class: "devicon-dot-net-plain",
          name: "EntityFramework",
        },
      ],
    },
    {
      title: "Funções de Estatistica Online",
      startDate: "2020",
      description:
        "Um aplicativo de resolução de questões de estátistica com Angular e backend em C#.",
      images: ["images/portfolio/statistics/p1.jpeg"],
      url: "https://distribuicao-dados-agrupados.web.app/",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Angular",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-csharp-plain",
          name: "C#",
        },
      ],
    },
    {
      title: "Loja de costumização de acessórios",
      startDate: "2020",
      description:
        "O aplicativo lida com todos os processos de compra e gerenciamento de produtos personalizados.",
      images: [
        "images/portfolio/personalizados-lopes/p2.jpeg",
        "images/portfolio/personalizados-lopes/p3.jpeg",
        "images/portfolio/personalizados-lopes/p4.jpeg",
        "images/portfolio/personalizados-lopes/p5.jpeg",
      ],
      url: "https://personalizadoslopes.com.br",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Angular",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-nodejs-plain",
          name: "Nodejs",
        },
        {
          class: "devicon-mongodb-plain",
          name: "MongoDB",
        },
      ],
    },
    {
      title: "Gestão de Cookies",
      startDate: "2020",
      description:
        "MVP em estado de prova de conceito com back-end em Nest e front-end em VueJS.",
      images: ["images/portfolio/cookie-manager/p1.jpeg"],
      url: "https://github.com/Metalefs/POC-VUE-Gestao-de-cookies",
      technologies: [
        {
          class: "devicon-vuejs-plain",
          name: "Vuejs",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "simple-icons:nestjs",
          name: "Nestjs",
        },
      ],
    },
    {
      title: "Agendamento Veterinário",
      startDate: "2020",
      description:
        "Um projeto onde atuei como desenvolvedor frontend em conjunto com um desenvolvedor Angular Sênior na primeira clinica com agendamento online.",
      images: ["images/portfolio/schedule/p1.jpeg"],
      url: "http://191.252.156.153:8010/",
      technologies: [
        {
          class: "devicon-angular-original",
          name: "Angular",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-sql-server-plain",
          name: "SQL Server",
        },
      ],
    },
  ],
  otherProjects: {
    seeMoreLabel: "Veja mais no Github",
    projects: [
      {
        href: "https://github.com/Metalefs/MVP-PHP-EuMotorista",
        title: "Eumotorista - Aprendizado gameficado de direção",
        description: `Assista ao nosso pitch no botão abaixo. (Narração e Edição por Guilherme
      Neubaner- Front-end por mim e Backend por mim e por Guilherme Neubaner).`,
        badge: "Grátis",
        pitchSrc: "https://youtu.be/o_LTPT1F4H8",
        iframeSrc: "https://www.youtube.com/embed/o_LTPT1F4H8?controls=0",
      },
    ],
  },
  experience: [
    {
      company: "Santander",
      companyWebsite: "https://www.oleconsignado.com.br",
      title: "Front-End Developer",
      years: "2021 - Presente",
      mainTech: ["Angular 8/9/10, React"],
      technologies: [
        "REST API",
        "RxJS",
        "JavaScript",
        "Microservices",
        ".NET Core",
        "MUI",
        "Reactjs",
        "Angular",
      ],
      companylogo: require("../assets/images/facebookLogo.png").default,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    },
    {
      company: "PluralSystems",
      companyWebsite: "https://pluralsystems.com.br/",
      title: "Front-End Developer",
      years: "2020 - 2021",
      mainTech: ["Angular 8/9/10"],
      technologies: [
        "REST API",
        "RxJS",
        "JavaScript",
        "EF Core",
        ".NET Core",
        "Microservices",
        "Angular Material",
      ],
      companylogo: require("../assets/images/facebookLogo.png").default,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    },
    {
      company: "Rumo Soluções",
      companyWebsite: "https://rumosolucoes.com.br",
      title: "Analista Desenvolvedor .NET Júnior",
      years: "01.2021 - Presente",
      mainTech: [".Net/C#"],
      technologies: [
        "C#",
        "ASP.NET",
        "Webforms",
        "JavaScript",
        "Nodejs",
        "Xamarin",
        "EF Core",
        "OleDB",
        "SQL Server",
        "Dapper",
      ],
      companylogo: require("../assets/images/facebookLogo.png").default,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    },
    {
      company: "Rumo Soluções",
      companyWebsite: "https://rumosolucoes.com.br",
      title: "Estágio de Analise e Desenvolvimento",
      years: "01.2019 - 2021",
      mainTech: [".Net/C#"],
      technologies: [
        "C#",
        "ASP.NET",
        "Webforms",
        "JavaScript",
        "Nodejs",
        "Xamarin",
        "EF Core",
        "OleDB",
        "SQL Server",
        "Dapper",
      ],
      companylogo: require("../assets/images/facebookLogo.png").default,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    },
  ],
  testimonials: {
    seeMoreLabel: "Mais no LinkedIn",
    sources: [
      {
        from: "Daniel Fiedler",
        quote: `Profissional extremamente
        preocupado com a qualidade do código, proativo, busca documentar tudo
        e procurar soluções melhores para os problemas, sempre busca aprender
        mais sobre o projeto e as linguagens.`,
      },
    ],
  },
  education: [
    {
      schoolName: "Faculdade de Ciências Sociais Aplicadas (FACISABH)",
      logo: require("../assets/images/harvardLogo.png").default,
      subHeader: "Systems Analysis and Development",
      duration: "June 2019 - June 2022",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ],
  languages: [
    {
      name: "Português",
      stars: 5,
      proficiency: "Nativo",
    },
    {
      name: "English",
      stars: 4,
      proficiency: "Conversacional",
    },
    {
      name: "Deutsch",
      stars: 3,
      proficiency: "Conversacional",
    },
  ],
};
