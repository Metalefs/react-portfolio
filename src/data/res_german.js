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
    description: `👋 Ich heiße Jackson Pires. Ich arbeite mit den neuesten Frontend-Frameworks wie Angular, React und Vue. 
        Ich arbeite mit den folgenden Technologien:
          Knoten,
          .Net Core,
          Winkel &
          Reagieren.
        
        Mein Hauptinteresse liegt derzeit darin, monolithische Anwendungen zu entkoppeln, indem ich sie nach einem Microservice-Architekturmuster orchestriere.
        
        Ich habe zusätzliches Wissen über Technologien:
          Asp.Net MVC und Webformulare &
          PHP.
        
        Ich arbeite mit nativer Anwendungsentwicklung in Technologien:
          Xamarin.Forms,
        
        Ich bin daran interessiert, in Zukunft native Anwendungen mit React Native oder anderen Cross-Platform-Frameworks zu entwickeln. `,
  },
  section_name: {
    contact: "Kontakt",
    about: "Über mich",
    projects: "Projekte",
    otherProjects: "Andere Projekte",
    skills: "Fähigkeiten",
    experience: "Erfahrung",
    github: "Mein GitHub",
    recommendations: "Empfehlungen",
    education: "Bildung",
    languages: "Sprachen",
    proficiency: "Fähigkeit",
    blog: "Meine neuesten Beiträge zu StackOverflow und Medium",
    music: "Meine Lieblingslieder zum Programmieren",
    conferences: "Konferenzen",
    source_code: "Schauen Sie sich den Code dieser Website an",
    resume: "Resume",
    moreProjects: "More Projects",
  },
  skills: {
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      emoji(
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
      ),
      emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
      emoji(
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
      )
    ],
    title: `Ich bin ein Webentwickler-Generalist und aufstrebender 10x-Programmierer.`,
    description: `ATM Ich konzentriere mich auf das Erlernen von Microservice-Design und -Anwendungen und interessiere mich auch für das Feld De-fi Blockchain Application (Decentralized Finance)`,
    seeMoreLabel: "Mehr auf Github sehen",
  },
  stackProgress: [
    {
      name: ".NET",
      level: "Pro",
      levelTitle: "2 jahre Erfahrung mit Entwicklung und Maintenance.",
      progress: "86%",
    },
    {
      name: "React",
      level: "Advanced",
      levelTitle: "Ich arbeite derzeit Vollzeit bei React.",
      progress: "75%",
    },
    {
      name: "Angular",
      level: "Pro",
      levelTitle:
        "Ich habe an zwei großen Projekten und ein paar kleineren Projekten gearbeitet.",
      progress: "86%",
    },
    {
      name: "Vue",
      level: "Intermediate",
      levelTitle:
        "Ich habe mit dieser Technologie ein einfaches Tool zur Verwaltung von Cookies erstellt.",
      progress: "64%",
    },
    {
      name: "Docker",
      level: "Intermediate",
      levelTitle:
        "Ich verwende Docker hauptsächlich, um API-Container zu veröffentlichen.",
      progress: "54%",
    },
    {
      name: "Kubernetes",
      level: "Intermediate",
      levelTitle:
        "Ich verwende Kubernetes, um Docker-Container zu skalieren.",
      progress: "54%",
    },
    {
      name: "NodeJS",
      level: "Intermediate",
      levelTitle: "Ich erstelle APIs mit Nodejs",
      progress: "70%",
    },
    {
      name: "MongoDB",
      level: "Pro",
      levelTitle:
        "Ich kann mit dieser Datenbank sehr minimale/optimierte Dienste entwickeln",
      progress: "86%",
    },
  ],
  projects: {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
      {
        image: require("../assets/images/saayaHealthLogo.webp").default,
        images: [
          "images/portfolio/ADE/p1.gif",
          "images/portfolio/ADE/p2.jpeg",
          "images/portfolio/ADE/p3.jpeg",
        ],
        startDate: "2019",
        projectName: "Saayahealth",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        footerLink: [
          {
            name: "Website",
            url: "http://saayahealth.com/"
          }
          //  you can add extra buttons here.
        ],
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
        image: require("../assets/images/nextuLogo.webp").default,
        images: [],
        startDate: "2019",
        projectName: "Nextu",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        footerLink: [
          {
            name: "Website",
            url: "http://nextu.se/"
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
        image: require("../assets/images/saayaHealthLogo.webp").default,
        images: ["images/portfolio/statistics/p1.jpeg"],
        startDate: "2020",
        projectName: "Online Statistics Functions",
        projectDesc: "A stats solving app with Angular and C# backend.",
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
        image: require("../assets/images/saayaHealthLogo.webp").default,
        images: [
          "images/portfolio/personalizados-lopes/p2.jpeg",
          "images/portfolio/personalizados-lopes/p3.jpeg",
          "images/portfolio/personalizados-lopes/p4.jpeg",
          "images/portfolio/personalizados-lopes/p5.jpeg",
        ],
        startDate: "2020",
        projectName: "Custom accessories store",
        projectDesc:
        "The app handles all the processes of purchasing and managing custom products.",
        footerLink: [
          {
            name: "Website",
            url: "https://personalizadoslopes.com.br"
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
      {
        image: require("../assets/images/saayaHealthLogo.webp").default,
        images: ["images/portfolio/schedule/p1.jpeg"],
        startDate: "2020",
        projectName: "Veterinary Scheduling",
        projectDesc:
          "A project where I worked as a frontend developer together with a Senior Angular developer in the first clinic with online appointment.",
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
    ]
  },
  otherProjects: {
    seeMoreLabel: "Mehr auf Github",
    projects: [
      {
        href: "https://github.com/Metalefs/MVP-PHP-EuMotorista",
        title: "Eumotorista - Gamifizierte Fahrschule",
        description: `Sehen Sie sich unseren Pitch an, indem Sie auf die Schaltfläche unten klicken. (Erzählung und Bearbeitung von Guilherme
            Neubaner- Frontend von mir und Backend von mir und Guilherme Neubaner).`,
        badge: "Kostenlos",
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
      companylogo: require("../assets/images/f3Logo.jpg").default,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    },
    {
      company: "Santander",
      companyWebsite: "https://www.oleconsignado.com.br",
      title: "Front-End Developer",
      years: "2021 - 2022",
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
      companylogo: require("../assets/images/santanderLogo.png").default,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    },
    {
      company: "PluralSystems",
      companyWebsite: "https://pluralsystems.com.br/",
      title: "Junior Front-End Developer",
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
      companylogo: require("../assets/images/pluralLogo.png").default,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
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
      companylogo: require("../assets/images/rumoLogo.png").default,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
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
      companylogo: require("../assets/images/rumoLogo.png").default,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
            url: "https://pakistan-olx-1.firebaseapp.com/"
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
    number: "+92-0000000000",
    email_address: "jackson.pires.rm@gmail.com"
  },
  testimonials: {
    seeMoreLabel: "More on LinkedIn",
    sources: [
      {
        from: "Daniel Fiedler",
        quote: `Ein Entwickler extrem
          besorgt über die Qualität des Codes. Proaktiv, dokumentiert alles
          und ist immer auf der Suche nach besseren Lösungen für die Probleme, immer auf der Suche nach Lernen
          mehr über das Projekt und die verwendeten Sprachen zu lernen.`,
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
