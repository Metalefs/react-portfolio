import emoji from "react-easy-emoji";

export const data = {
   header: {
     skills: "Skills",
     experience: "Experiences",
     opensource: "Open Source",
     achievements: "Achievements",
     blogs: "Blogs",
     talks: "Lectures",
     contact: "Contact",
   },
   greeting: {
     resumeLink:
       "https://my.indeed.com/p/t5j12kj", // Set to empty to hide the button
     displayGreeting: true // Set false to hide this section, defaults to true
   },
   basic_info: {
     description_header: "Hello World!",
     description: `👋 My name is Jackson Pires. I'm working with the newest front-end frameworks like Angular, React and Vue. Learning new front and back-end technologies, actively seeking to minimize manual processes, to the detriment of automated processes.

       I work in the development of applications using the following technologies:
        nodejs,
        .Net Core,
        React, Angular & Vue
      
       My biggest interest at the moment has been decoupling monolithic applications by orchestrating them following a microservices architecture pattern.
      
       I have extra knowledge of technologies:
        Asp.Net MVC and Web Forms &
        PHP.
      
       I work with the development of native applications in the following technologies:
        Xamarin.Forms, Ionic, React Native`,
   },
   section_name: {
     contact: "Contact",
     about: "About me",
     projects: "Projects",
     otherProjects: "Other Projects",
     achievements: "Achievements and Certifications",
     skills: "Skills",
     experience: "Experience",
     github: "My GitHub",
     recommendations: "Recommendations",
     education: "Education",
     languages: "Languages",
     proficiency: "Proficiency",
     blog: "Latest posts from me on StackOverflow and Medium",
     music: "My favorite song to code",
     conferences: "Conferences",
     source_code: "See the source code of this site",
     resume: "See my Resume",
     moreProjects: "More Projects",
   },
   skills: {
     subTitle:
       "FULLSTACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
     skills: [
       emoji(
         "⚡ I develop highly functional and interactive user interfaces/front-end for web applications"
       ),
       emoji("⚡ Progressive Web Applications (PWA) in normal Stacks (Dotnet, php) and in SPAs"),
       emoji(
         "⚡ Integration of third-party services like Firebase & AWS"
       ),
     ],
     title: `I am a self-taught person learning new technology
     development and aspiring programmer 10x.`,
     description: `A Fullstack developer with over four years of experience developing
     new and innovative designs.`,
     seeMoreLabel: "See more on Github",
   },
   stackProgress: [
     {
       name: ".NET",
       level: "Pro",
       levelTitle: "2 years of experience with development and maintenance.",
       progress: "86%",
     },
     {
       name: "React",
       level: "Advanced",
       levelTitle: "I'm working full time with React.",
       progress: "75%",
     },
     {
       name: "Angular",
       level: "Pro",
       levelTitle:
         "I worked on 2 large projects and a couple of smaller projects.",
       progress: "86%",
     },
     {
       name: "Vue",
       level: "Intermediate",
       levelTitle:
         "I developed a simple cookie manager with this framework.",
       progress: "64%",
     },
     {
       name: "Docker",
       level: "Intermediate",
       levelTitle:
         "I mostly use Docker to publish API containers.",
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
       levelTitle: "Create API's ways with nodeJS",
       progress: "70%",
     },
     {
       name: "MongoDB",
       level: "Pro",
       levelTitle:
         "I can develop minimal/optimized services using this database",
       progress: "86%",
     },
   ],
   projects: {
     title: "Large Projects",
     subtitle: "SOME STARTUPS I'M WORKING ON",
     projects: [
       {
         image: "/react-portfolio/images/portfolio/schedule/p1.jpeg",
         images: ["images/portfolio/schedule/p1.jpeg"],
         startDate: "2020",
         projectName: "Doctor Pet Scheduling",
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
         image: "/react-portfolio/images/portfolio/navega/p1.png",
         images: ["images/portfolio/navega/p1.png"],
         startDate: "2022",
         projectName: "Navega",
         projectDesc: "A startup that is revolutionizing the private pension sector in Brazil, creating a system from the ground up",
         footerLink: [
           {
             name: "Navega",
             url: ""
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
         image: "/react-portfolio/images/portfolio/AMAVC/p1.png",
         images: ["images/portfolio/AMAVC/p1.jpeg"],
         startDate: "2022",
         projectName: "AMAVC",
         projectDesc: "A scheduling dashboard for a stroke Prevention, Information, Treatment and Rehabilitation clinic",
         footerLink: [
           {
             name: "Website",
             url: "https://amavc.com.br"
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
         image: "/react-portfolio/images/portfolio/ellas4/p1.png",
         images: ["images/portfolio/ellas4/p1.png"],
         startDate: "2020",
         projectName: "Ellas 4 subscription",
         projectDesc: "Subscription logic on the frontend for adult website",
         footerLink: [
           {
             name: "Website",
             url: "https://ellas4.com/login"
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
     ]
   },
   otherProjects: {
     seeMoreLabel: "See more on Github",
     projects: [
       {
         href: "https://github.com/Metalefs/MVP-PHP-EuMotorista",
         title: "Eumotorista - Gamified driving learning",
         description: `Watch our pitch using the button below. (Narration and Editing by Guilherme
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
       years: "2021 - 2023",
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
       desc: "Working as Front-End Engineer at F3 Capital.",
       descBullets: [
       "I played a fundamental role in the development of a startup.",
       "Implemented an end-to-end rule engine to perform custom payroll processing",
       "I implemented style guidelines to keep design consistent across the team and created an enterprise UI library with Storybook, increasing productivity and code reuse.",
       "I added regression tests with Cypress ensuring greater control over features.",
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
       "Developed a custom UI library that increased developer productivity and code reuse for the company",
       "Development of architecture and templates for new solutions",
       "I worked on database architecture, its treatment and display on the front-end"
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
       withpanylogo: require("../assets/images/santanderLogo.png").default,
       desc: `I developed the open banking flow. Recaptcha challenges. Implementation of usage analysis on loan flows.`,
       descBullets: [
         "I participated in the development of the 'Open Banking' module to achieve compliance with external measures in a timely manner",
         "I analyzed the project requirements, translating specifications into functional application of the components.",
         "Improved the implementation of user experience monitoring in credit operations with A/B testing.",
         "I escalated problems and concerns to facilitate resolutions and avoid impacts on schedules.",
         "Azure Gateway Maintenance.",
         "Docker and Kubernetes maintenance.",
         "Micro-frontends with Reactjs.",
         "Microservices.",
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
       "Development of web applications with Angular with its own Design System",
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
         "W#",
         "ASP.NET",
         "Webforms",
         "JavaScript",
         "Nodejs",
         "Xamarin",
         "EF Core",
         "OleDB",
         "SQLServer",
         "Dapper",
       ],
       companylogo: require("../assets/images/rumoLogo.png").default,
       desc: "I employed several front-end technologies during development, including Asp.Net, Angular and JQuery.",
       descBullets: [
       "I developed ready-to-use applications in Asp.Net and Angular 9 for financial purposes and for managing working hours",
       "I maintained Asp.Net MVC and Asp.Net Web Forms and Xamarin.Forms applications for internal use.",
       "I developed Webcrawers implementing software design patterns such as Factory, Decorator and Template for a bank client providing a dashboard for court orders across the country",
       "I implemented Machine Learning solutions with IBM Watson to analyze court order documents and develop institutional page chatbots.",
       ]
     },
     {
       company: "Rumo Soluções",
       companyWebsite: "https://rumosolucoes.com.br",
       title: "Internship",
       years: "01.2019 - 01.2021",
       mainTech: [".Net/C#"],
       technologies: [
         "W#",
         "ASP.NET",
         "Webforms",
         "JavaScript",
         "Nodejs",
         "Xamarin",
         "EF Core",
         "OleDB",
         "SQLServer",
         "Dapper",
       ],
       companylogo: require("../assets/images/rumoLogo.png").default,
       desc: "",
       descBullets: [
       "I learned the right tools and processes for different types of development to minimize errors and achieve coding goals.",
       "Technologies: WebForms, Asp.Net Core, Angular",
       "Languages: C#, Javascript",
       ]
     },
   ],
   achievements: {
     title: emoji("Achievements and Certifications 🏆 "),
     subtitle:
       "Achievements, Certifications, Awards and Some Cool Things I Did!",
  
     achievementsCards: [
       {
         title: "PWA Web App Developer",
         subtitle: "SMIT Completed Certification for PWA Web App Development",
         image: require("../assets/images/pwaLogo.png").default,
         footerLink: [
           {name: "Certification", url: ""},
           {
             name: "Final Project",
             url: "#"
           }
         ]
       }
     ],
   },
   blog: {
     title: "Blogs",
     subtitle:
       "With a love for developing cool things, I love writing and teaching others what I've learned.",
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
       "I LOVE TO SHARE MY LIMITED KNOWLEDGE 😅"
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
   },podcasts: {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TALKING ABOUT MYSELF AND TECHNOLOGY",
 
    // Please Provide with Your Podcast embedded Link
    podcast: [
      "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
  },
  contactInfo: {
    title: emoji("Contact me ☎️"),
    subtitle:
      "Discussing a proposal or just want to say hi? My inbox is open.",
    number: "+55-31987576467",
    email_address: "jackson.pires.rm@gmail.com"
  },
  testimonials: {
    seeMoreLabel: "More on LinkedIn",
    sources: [
      {
        from: "Daniel Fiedler",
        quote: `Extremely professional
        concerned about code quality, proactive, seeks to document everything
        and seek better solutions to problems, always seeking to learn
        more about the project and languages.`,
      },
    ],
  },
  education: [
    {
      schoolName: "Faculty of Applied Social Sciences (FACISABH)",
      logo: require("../assets/images/facisaLogo.png").default,
      subHeader: "Systems Analysis and Development",
      duration: "June 2019 - June 2021",
      desc: "I participated in systems research for the internship process and published 1 paper.",
      descBullets: [
        "Duration of 2 years.",
        "Transfer in the 5th period to Unicesumar."
      ]
    },
    {
      schoolName: "Unicesumar",
      logo: require("../assets/images/unicesumarLogo.png").default,
      subHeader: "Systems Analysis and Development",
      duration: "January 2022 - June 2022",
      desc: "Semi-presential graduation.",
      descBullets: [
        "Software architecture concepts.",
        "System requirements.",
      ]
    }
  ],
  languages: [
    {
      name: "Portuguese",
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