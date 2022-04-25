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
    achievements: "Conquistas e Certificações",
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
    moreProjects: "Mais Projetos",
  },
  skills: {
    subTitle:
      "DESENVOLVEDOR FULLSTACK QUE QUER EXPLORAR CADA TECH STACK",
    skills: [
      emoji(
        "⚡ Desenvolvo interfaces de usuário / front-end altamente funcionais e interativas para aplicativos Web"
      ),
      emoji("⚡ Progressive Web Applications ( PWA ) em Stacks normais (Dotnet, php, possívelmente Django) e em SPAs"),
      emoji(
        "⚡ Integração de serviços de terceiros como Firebase/ AWS / Digital Ocean"
      ),
    ],
    title: `Sou um Autodidata no aprendizado de novas tecnologias de
    desenvolvimento web e aspirante a programador 10x.`,
    description: `Um desenvolvedor de software Full Stack apaixonado 🚀 com experiência na construção de aplicativos Web com JavaScript / Reactjs / Nodejs e algumas outras bibliotecas e frameworks interessantes.
    Estou focado em tecnologias de descentralização, como
    mensageria, microserviços e microfrontend`,
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
  projects: {
    title: "Projetos Grandes",
    subtitle: "ALGUMAS STARTUPS EM QUE ESTOU TRABALHANDO",
    projects: [
      {
        image: "/react-portfolio/images/portfolio/schedule/p1.jpeg",
        images: ["images/portfolio/schedule/p1.jpeg"],
        startDate: "2020",
        projectName: "Agendamento Doctor Pet",
        projectDesc:
          "Um projeto onde trabalhei como desenvolvedor frontend junto com um desenvolvedor Sênior Angular no primerio vet com atendimento online.",
        footerLink: [
          {
            name: "Website",
            url: "http://191.252.156.153:8010/"
          }
        ],
        technologies: [
          {
            class: "devicon-angular-original",
            name: "Angular",
          },
          {
            class: "devicon-typescript-plain",
            name: "TypeScript",
          },
        ],
      },
      {
        image: "/react-portfolio/images/portfolio/statistics/p1.jpeg",
        images: ["images/portfolio/statistics/p1.jpeg"],
        startDate: "2020",
        projectName: "Online Statistics Functions",
        projectDesc: "Um aplicativo de resolução de estatísticas com Angular no frontend e C# no backend.",
        footerLink: [
          {
            name: "Website",
            url: "https://distribuicao-dados-agrupados.web.app/"
          }
        ],
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
        image: "/react-portfolio/images/portfolio/personalizados-lopes/p2.jpeg",
        images: [
          "images/portfolio/personalizados-lopes/p2.jpeg",
          "images/portfolio/personalizados-lopes/p3.jpeg",
          "images/portfolio/personalizados-lopes/p4.jpeg",
          "images/portfolio/personalizados-lopes/p5.jpeg",
        ],
        startDate: "2020",
        projectName: "Personalizados Lopes",
        projectDesc:
        "O aplicativo lida com todos os processos de compra e gerenciamento de produtos personalizados.",
        footerLink: [
          {
            name: "Website",
            url: "https://personalizados-lopes-web-app.web.app"
          }
        ],
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
        ],
      },
     
    ]
  },
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
      company: "F3 Capital",
      companyWebsite: "https://f3capital.com.br",
      title: "Front-End Developer",
      years: "2021 - 2022",
      mainTech: ["Angular >2 "],
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
      companylogo: require("../assets/images/f3Logo.jpg").default,
      desc: "Atuação como Front-End Developer na F3 Capital.",
      descBullets: [
      "Desenvolvimento de biblioteca de UI para novas soluções",
      "Desenvolvimento de pacotes de UI para novas soluções",
      "Desenvolvimento Frontend",
      ]
    },
    {
      company: "Interligados",
      companyWebsite: "https://interligados.com.br",
      title: "Front-End/Fullstack Developer",
      years: "Freelance",
      mainTech: ["Angular >2"],
      technologies: [
        "REST API",
        "RxJS",
        "JavaScript",
        ".NET Core",
        "MUI",
        "Angular",
      ],      
      companylogo: require("../assets/images/interligadosLogo.png").default,
      desc: "Atuação como Front-End/Fullstack Developer na Interligados.",
      descBullets: [
      "End to end development de novos websites",
      "Desenvolvimento de biblioteca de UI para novas soluções",
      "Desenvolvimento de arquitetura e templates para novas soluções",
      ]
    },
    {
      company: "Santander",
      companyWebsite: "https://www.oleconsignado.com.br",
      title: "Fullstack Developer",
      years: "2021 - 2022",
      mainTech: ["Angular >=2, React"],
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
      companylogo: require("../assets/images/santanderLogo.png").default,
      desc: `Desenvolvi o fluxo de open banking. Desafios recaptcha. Implementação de análise de uso em fluxos de empréstimo.`,
      descBullets: [
        "Manutenção de APIs em ASP Net Core e Java",
        "Manutenção de Gateway Azure.",
        "Manutenção de Docker e Kubernetes.",
        "Micro-frontends com Reactjs.",
        "Microserviçõs.",
      ]
    },
    {
      company: "PluralSystems",
      companyWebsite: "https://pluralsystems.com.br/",
      title: "Junior Front-End Developer",
      years: "Freelance",
      mainTech: ["Angular >2"],
      technologies: [
        "REST API",
        "RxJS",
        "JavaScript",
        "EF Core",
        ".NET Core",
        "Microservices",
        "Angular Material",
      ],
      companylogo: require("../assets/images/pluralLogo.png").default,
      desc: "Freelance",
      descBullets: [
      "Desenvolvimento de aplicações web com Angular com Design System próprio",
      "Event-Driven Architecture",
      "Multi-Tenancy",
      ]
    },
    {
      company: "Rumo Soluções",
      companyWebsite: "https://rumosolucoes.com.br",
      title: ".NET Junior Developer",
      years: "01.2021 - 09.2022",
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
      companylogo: require("../assets/images/rumoLogo.png").default,
      desc: "",
      descBullets: [
      "Desenvolvimento de aplicações em Asp.Net e Angular 9.",
      "Manutenção de aplicações em Asp.Net MVC e Asp.Net Web Forms.",
      "Manutenção de aplicações em Xamarin.Forms.",
      "Desenvolvimento de Web-Crawlers.",
      "Implementação de soluções com Machine Learning.",
      ]
    },
    {
      company: "Rumo Soluções",
      companyWebsite: "https://rumosolucoes.com.br",
      title: "Internship",
      years: "01.2019 - 01.2021",
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
      companylogo: require("../assets/images/rumoLogo.png").default,
      desc: "",
      descBullets: [
      "Manutenção e desenvolvimento de aplicações",
      "Tecnologias: WebForms, Asp.Net Core, Angular",
      "Linguagens: C#, Javascript",
      ]
    },
  ],
  achievements: {
    title: emoji("Conquistas e Certificações 🏆 "),
    subtitle:
      "Conquistas, Certificações, Premiações e Algumas Coisas Legais que eu Fiz !",
  
    achievementsCards: [
      {
        title: "PWA Web App Developer",
        subtitle: "Certificação concluída do SMIT para PWA Web App Development",
        image: require("../assets/images/pwaLogo.png").default,
        footerLink: [
          {name: "Certificação", url: ""},
          {
            name: "Projeto Final",
            url: "#"
          }
        ]
      }
    ],
  },
  blog: {
    title: "Blogs",
    subtitle:
      "Com amor por desenvolver coisas legais, adoro escrever e ensinar aos outros o que aprendi.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
      {
        url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
        title: "",
        description:
          ""
      }
    ]
  },
  talks: {
    title: "TALKS",
    subtitle: emoji(
      "EU ADORO COMPARTILHAR MEU CONHECIMENTO LIMITADO 😅"
    ),
  
    talks: [
      {
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab at GDG DevFest Karachi 2019",
        slides_url: "https://bit.ly/saadpasta-slides",
        event_url: "https://www.facebook.com/events/2339906106275053/"
      }
    ],
    display: false // Set false to hide this section, defaults to true
  },
  podcasts: {
    title: emoji("Podcast 🎙️"),
    subtitle: "EU AMO FALAR SOBRE MIM E SOBRE TECNOLOGIA",
  
    // Please Provide with Your Podcast embeded Link
    podcast: [
      "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
  },
  contactInfo: {
    title: emoji("Contact Me ☎️"),
    subtitle:
      "Discutir uma proposta ou apenas quer dizer oi? Minha caixa de entrada está aberta.",
    number: "+55-31987576467",
    email_address: "jackson.pires.rm@gmail.com"
  },
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
      logo: require("../assets/images/facisaLogo.png").default,
      subHeader: "Análise e Desenvolvimento de Sistemas",
      duration: "Junho 2019 - Junho 2021",
      desc: "Participei na pesquisa de sistemas para o processo de estágio e publiquei 1 paper.",
      descBullets: [
        "Duração de 2 anos.",
        "Transferencia no 5° período para a Unicesumar."
      ]
    },
    {
      schoolName: "Unicesumar",
      logo: require("../assets/images/unicesumarLogo.png").default,
      subHeader: "Análise e Desenvolvimento de Sistemas",
      duration: "Janeiro 2022 - Junho 2022",
      desc: "Graduação Semi-presencial.",
      descBullets: [
        "Conceitos de arquitetura de software.",
        "Requisitos de sistemas.",
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
