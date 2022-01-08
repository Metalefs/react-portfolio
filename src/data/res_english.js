export const data = {
  basic_info: {
    description_header: "Hello World!",
    description: `👋 My name is Jackson Pires. I'm working with the newest front-end frameworks like Angular, React and Vue. 
      I work with technologies:
        Nodejs,
        .Net Core,
        Angular &
        React.
      
      My main interest at the moment has been to decouple monolithic applications by orchestrating them following a microservice architecture pattern.
      
      I have extra knowledge of technologies:
        Asp.Net MVC and Web Forms &
        PHP.
      
      I work with native Application development in technologies:
        Xamarin.Forms,
      
      I am interested in developing native applications with React Native, or other Cross-Platform frameworks in the future. `,
    section_name: {
      contact: "Contact",
      about: "About me",
      projects: "Projects",
      otherProjects: "Other Projects",
      skills: "Skills",
      experience: "Experience",
      github: "My GitHub",
      recommendations: "Recommendations",
      education: "Education",
      languages: "Languages",
      proficiency: "Proficiency",
      blog: "My latests posts on StackOverflow and Medium",
      music: "My favorite songs to code to",
      conferences: "Conferences",
      source_code: "Check out this website's source code",
    },
  },
  projects: [
    {
      title: "Internship Assistant",
      startDate: "2019",
      description:
        "MVP in online management testing status of the internship process developed in Asp .Net Core.",
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
      title: "Online Statistics Functions",
      startDate: "2020",
      description: "A stats solving app with Angular and C# backend.",
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
      title: "Custom accessories store",
      startDate: "2020",
      description:
        "The app handles all the processes of purchasing and managing custom products.",
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
      ],
    },
    {
      title: "Cookie Management",
      startDate: "2020",
      description:
        "MVP in proof-of-concept state with back-end in Nest and front-end in VueJS.",
      images: ["images/portfolio/cookie-manager/p1.jpeg"],
      url: "https://github.com/Metalefs/POC-VUE-Gestao-de-cookies",
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
      title: "Veterinary Scheduling",
      startDate: "2020",
      description:
        "A project where I worked as a frontend developer together with a Senior Angular developer in the first clinic with online appointment.",
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
      ],
    },
  ],
  otherProjects: {
    seeMoreLabel: "See More on Github",
    projects: [
      {
        href: "https://github.com/Metalefs/MVP-PHP-EuMotorista",
        title: "Eumotorista - Gamified Driving School",
        description: `Watch our pitch by clicking on the button below. (Narration and Editing by Guilherme
      Neubaner- Front-end by me and Backend by me and Guilherme Neubaner).`,
        badge: "Free",
        pitchSrc: "https://youtu.be/o_LTPT1F4H8",
        iframeSrc: "https://www.youtube.com/embed/o_LTPT1F4H8?controls=0",
      },
    ],
  },
  skills: {
    title: `I am a web developer generalist and aspiring 10x programmer.`,
    description: `ATM I'm focused on learning microservice design and applications and I'm also interested in De-fi Blockchain Applications (Decentralized Finance)`,
    seeMoreLabel: "See more on Github",
    technologies: [
      {
        name: ".NET",
        level: "Pro",
        levelTitle: "2 years experience with development and maintenance.",
        progress: "86%",
      },
      {
        name: "React",
        level: "Advanced",
        levelTitle: "I'm currently working fulltime with React.",
        progress: "75%",
      },
      {
        name: "Angular",
        level: "Pro",
        levelTitle:
          "I have worked on two big projects and a couple smaller ones.",
        progress: "86%",
      },
      {
        name: "Vue",
        level: "Intermediate",
        levelTitle:
          "I have created a simple cookie managing tool with this technology.",
        progress: "64%",
      },
      {
        name: "Docker",
        level: "Intermediate",
        levelTitle: "I use Docker mostly to publish API containers.",
        progress: "64%",
      },
      {
        name: "Kubernetes",
        level: "Intermediate",
        levelTitle: "I use Kubernetes to scale Docker containers.",
        progress: "64%",
      },
      {
        name: "NodeJS",
        level: "Intermediate",
        levelTitle: "I create rad APIs with Nodejs",
        progress: "70%",
      },
      {
        name: "MongoDB",
        level: "Pro",
        levelTitle:
          "I can develop very minimal/optimized services using this database",
        progress: "86%",
      },
    ],
  },
  experience: [
    {
      company: "Santander",
      companyWebsite: "https://www.oleconsignado.com.br",
      title: "Front-End Developer",
      years: "2021 - Present",
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
    },
    {
      company: "Rumo Soluções",
      companyWebsite: "https://rumosolucoes.com.br",
      title: ".NET Junior Developer",
      years: "01.2021 - Present",
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
    },
    {
      company: "Rumo Soluções",
      companyWebsite: "https://rumosolucoes.com.br",
      title: "Internship",
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
    },
  ],
  testimonials: {
    seeMoreLabel: "More on LinkedIn",
    sources: [
      {
        from: "Daniel Fiedler",
        quote: `A developer extremely
        concerned about the quality of the code. Proactive, documents everything
        and is always looking for better solutions to the problems, always looking to learn
        more about the project and the languages used.`,
      },
    ],
  },
  education: [
    {
      title: "Systems Analysis and Development",
      university: "Faculdade de Ciências Sociais Aplicadas (FACISABH)",
      period: "(2019-2021)",
    },
  ],
  languages: [
    {
      name: "Português",
      stars: 5,
      proficiency: "Native",
    },
    {
      name: "English",
      stars: 4,
      proficiency: "Conversational",
    },
    {
      name: "Deutsch",
      stars: 3,
      proficiency: "Conversational",
    },
  ],
};
