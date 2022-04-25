import emoji from "react-easy-emoji";

export const data = {
  header: {
    skills: "Skills",
    experience: "Work Experiences",
    opensource: "Open Source",
    achievements: "Achievements",
    blogs: "Blogs",
    talks: "Talks",
    contact: "Contact Me",
  },
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
  },
  section_name: {
    contact: "Contact Me",
    about: "What I do",
    projects: "Big Projects",
    otherProjects: "Other Projects",
    achievements: "Achievements And Certifications",
    skills: "Skills",
    experience: "Experiences",
    github: "My GitHub",
    recommendations: "Recommendations",
    education: "Education",
    languages: "Languages",
    proficiency: "Proficiency",
    blog: "My latests posts on StackOverflow and Medium",
    music: "My favorite songs to code to",
    conferences: "Conferences",
    source_code: "Check out this website's source code",
    resume: "Resume",
    moreProjects: "More Projects",
  },
  skills: {
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      emoji(
        "⚡ I develop highly functional and interactive user interfaces/frontends for web applications"
      ),
      emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
      emoji(
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
      )
    ],
    title: `I am a web developer generalist and aspiring 10x programmer.`,
    description: `
    A passionate Full Stack software developer 🚀 with experience building web apps with JavaScript / Reactjs / Nodejs and some other interesting libraries and frameworks.
     I'm focused on decentralization technologies such as
     messaging, microservices and microfrontend`,
    seeMoreLabel: "See more on Github",
  },
  stackProgress: [
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
      progress: "54%",
    },
    {
      name: "Kubernetes",
      level: "Intermediate",
      levelTitle: "I use Kubernetes to scale Docker containers.",
      progress: "54%",
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
  projects: {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
      {
        image: "/react-portfolio/images/portfolio/schedule/p1.jpeg",
        images: ["images/portfolio/schedule/p1.jpeg"],
        startDate: "2020",
        projectName: "Agendamento Doctor Pet",
        projectDesc:
          "A project where I worked as a frontend developer together with a Senior Angular developer at the first vet with online service.",
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
        projectDesc: "A statistics resolution app with Angular on the frontend and C# on the backend",
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
        "The app handles all the processes of purchasing and managing custom products.",
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
  experience: [
    {
      company: "F3 Capital",
      companyWebsite: "https://f3capital.com.br",
      title: "Front-End Developer",
      years: "2021 - 2022",
      mainTech: ["Angular >2"],
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
      desc: "Working as Front-End Developer at F3 Capital.",
      descBullets: [
        "UI library development for new solutions",
        "Development of UI packages for new solutions",
        "Frontend Development",
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
      desc: "Working as Front-End/Fullstack Developer at Interligados.",
      descBullets: [
      "End to end development of new websites",
      "Development UI Library for new solutions",
      "Development of ",
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
      desc: "Developed the 'Open Banking' module. Recapcha challenges. Implementation of user analysis in loan flows.",
      descBullets: [
        "API Maintenance in ASP Net Core and Java",
        "Azure Gateway Maintenance.",
        "Maintenance of Docker and Kubernetes.",
        "Micro-frontends with Reactjs.",
        "Microservices."
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
        "Development of web applications using Angular with custom Design System",
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
        "Developing applications in Asp.Net and Angular 9.",
        "Maintenance of Asp.Net MVC and Asp.Net Web Forms applications.",
        "Maintenance of applications in Xamarin.Forms.",
        "Developing Web Crawlers.",
        "Implementing Machine Learning Solutions.",
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
        "Application maintenance and development",
        "Technologies: WebForms, Asp.Net Core, Angular",
        "Languages: C#, Javascript",
      ]
    },
  ],
  achievements: {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
      "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  
    achievementsCards: [
      {
        title: "PWA Web App Developer",
        subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
        image: require("../assets/images/pwaLogo.png").default,
        footerLink: [
          {name: "Certification", url: ""},
          {
            name: "Final Project",
            url: "https://elshadday-a155e.web.app/inicio"
          }
        ]
      }
    ],
  },
  blog: {
    title: "Blogs",
    subtitle:
      "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
      {
        url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
        title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
        description:
          "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
      },
      {
        url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
        title: "Why REACT is The Best?",
        description:
          "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
      }
    ]
  },
  talks: {
    title: "TALKS",
    subtitle: emoji(
      "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),
  
    talks: [
      {
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab at GDG DevFest Karachi 2019",
        slides_url: "https://bit.ly/saadpasta-slides",
        event_url: "https://www.facebook.com/events/2339906106275053/"
      }
    ],
    display: true // Set false to hide this section, defaults to true
  },
  podcasts: {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  
    // Please Provide with Your Podcast embeded Link
    podcast: [
      "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: true // Set false to hide this section, defaults to true
  },
  contactInfo: {
    title: emoji("Contact Me ☎️"),
    subtitle:
      "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+55-31987576467",
    email_address: "jackson.pires.rm@gmail.com"
  },
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
      schoolName: "Faculdade de Ciências Sociais Aplicadas (FACISABH)",
      logo: require("../assets/images/facisaLogo.png").default,
      subHeader: "System Analysis",
      duration: "June 2019 - June 2021",
      desc: "I participated in the research of systems for the internship process and published 1 paper.",
      descBullets: [
        "2 year duration.",
        "Transferred to Unicesumar during my 5th period."
      ]
    },
    {
      schoolName: "Unicesumar",
      logo: require("../assets/images/unicesumarLogo.png").default,
      subHeader: "System Analysis",
      duration: "Jan 2022 - June 2022",
      desc: "Semi-Present Graduation.",
      descBullets: [
        "Software Architecture Concepts.",
        "System requirements.",
      ]
    }
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
