import emoji from "react-easy-emoji";

export const data = {
  header: {
    skills: "Fähigkeiten",
    experience: "Erfahrungen",
    opensource: "Open Source",
    achievements: "Erfolge",
    blogs: "Blogs",
    talks: "Vorträge",
    contact: "Kontakt",
  },
  greeting: {
    resumeLink: "https://resume.io/r/JGutirjVB",
    displayGreeting: true,
  },
  basic_info: {
    description_header: "Hallo Welt!",
    description:
      "👋 Mein Name ist Jackson Pires. Ich arbeite mit den neuesten Frontend-Frameworks wie Angular, React und Vue. Erlernen neuer Front- und Back-End-Technologien, aktives Bemühen um die Minimierung manueller Prozesse zum Nachteil automatisierter Prozesse. Ich arbeite in der Entwicklung von Anwendungen unter Verwendung der folgenden Technologien: NodeJS, .Net Core, React, Angular und Vue. Mein größtes Interesse gilt derzeit der Entkopplung monolithischer Anwendungen durch deren Orchestrierung nach einem Microservices-Architekturmuster. Ich verfüge über zusätzliche Kenntnisse der Technologien: Asp.Net MVC und Web Forms & PHP. Ich arbeite mit der Entwicklung nativer Anwendungen in den folgenden Technologien: Xamarin.Forms, Ionic, React Native",
  },
  section_name: {
    contact: "Kontakt",
    about: "Über mich",
    projects: "Projekte",
    otherProjects: "Weitere Projekte",
    achievements: "Erfolge und Zertifizierungen",
    skills: "Fähigkeiten",
    experience: "Erfahrung",
    github: "Mein GitHub",
    recommendations: "Empfehlungen",
    education: "Ausbildung",
    languages: "Sprachen",
    proficiency: "Kompetenz",
    blog: "Neueste Beiträge von mir auf StackOverflow und Medium",
    music: "Mein Lieblingslied zum Programmieren",
    conferences: "Konferenzen",
    source_code: "Sehen Sie sich den Quellcode dieser Website an",
    resume: "Siehe meinen Lebenslauf",
    moreProjects: "Weitere Projekte",
  },
  skills: {
    subTitle: "FULLSTACK-ENTWICKLER, DER JEDEN TECH-STACK ERKUNDEN MÖCHTE",
    skills: [
      emoji("⚡ Ich entwickle hochfunktionale und interaktive Benutzeroberflächen/Frontends für Webanwendungen"),
      emoji("⚡ Progressive Webanwendungen (PWA) in normalen Stacks (Dotnet, PHP) und in SPAs"),
      emoji("Integration von Drittanbieterdiensten wie Firebase und AWS"),
    ],
    title:
      "Ich bin ein Autodidakt, der sich mit der Entwicklung neuer Technologien beschäftigt und zehnmal ein angehender Programmierer ist.",
    description:
      "Ein Fullstack-Entwickler mit über vier Jahren Erfahrung in der Entwicklung neuer und innovativer Designs.",
    seeMoreLabel: "Weitere Informationen finden Sie auf Github",
  },
  stackProgress: [
    {
      name: ".NETZ",
      level: "Profi",
      levelTitle: "2 Jahre Erfahrung mit Entwicklung und Wartung.",
      progress: "86%",
    },
    {
      name: "Reagieren",
      level: "Fortschrittlich",
      levelTitle: "Ich arbeite Vollzeit mit React.",
      progress: "75%",
    },
    {
      name: "Eckig",
      level: "Profi",
      levelTitle:
        "Ich habe an zwei großen Projekten und einigen kleineren Projekten gearbeitet.",
      progress: "86%",
    },
    {
      name: "Vue",
      level: "Dazwischenliegend",
      levelTitle:
        "Mit diesem Framework habe ich einen einfachen Cookie-Manager entwickelt.",
      progress: "64%",
    },
    {
      name: "Docker",
      level: "Dazwischenliegend",
      levelTitle:
        "Ich verwende Docker hauptsächlich zum Veröffentlichen von API-Containern.",
      progress: "54%",
    },
    {
      name: "Kubernetes",
      level: "Dazwischenliegend",
      levelTitle: "Ich verwende Kubernetes, um Docker-Container zu skalieren.",
      progress: "54%",
    },
    {
      name: "NodeJS",
      level: "Dazwischenliegend",
      levelTitle: "Erstellen Sie API-Wege mit nodeJS",
      progress: "70%",
    },
    {
      name: "MongoDB",
      level: "Profi",
      levelTitle:
        "Mithilfe dieser Datenbank kann ich minimale/optimierte Dienste entwickeln",
      progress: "86%",
    },
  ],
  projects: {
    title: "Große Projekte",
    subtitle: "EINIGE STARTUPS, AN DENEN ICH ARBEITE",
    projects: [
      {
        image: "/react-portfolio/images/portfolio/schedule/p1.jpeg",
        images: ["images/portfolio/schedule/p1.jpeg"],
        startDate: "2020",
        projectName: "Arzt-Haustierplanung",
        projectDesc:
          "Ein Projekt, bei dem ich als Frontend-Entwickler zusammen mit einem Senior Angular-Entwickler beim ersten Tierarzt mit Online-Service gearbeitet habe.",
        footerLink: [{ name: "Webseite", url: "http://191.252.156.153:8010/" }],
        technologies: [
          { class: "Devicon-Angular-Original", name: "Eckig" },
          { class: "devicon-typescript-plain", name: "Typoskript" },
        ],
      },
      {
        image: "/react-portfolio/images/portfolio/navega/p1.png",
        images: ["images/portfolio/navega/p1.png"],
        startDate: "2022",
        projectName: "Navega",
        projectDesc:
          "Ein Startup, das den privaten Rentensektor in Brasilien revolutioniert und ein System von Grund auf aufbaut",
        footerLink: [{ name: "Navega", url: "--" }],
        technologies: [
          { class: "devicon-angularjs-plain", name: "Eckig" },
          { class: "devicon-typescript-plain", name: "Typoskript" },
          { class: "devicon-csharp-plain", name: "C#" },
        ],
      },
      {
        image: "/react-portfolio/images/portfolio/AMAVC/p1.png",
        images: ["images/portfolio/AMAVC/p1.jpeg"],
        startDate: "2022",
        projectName: "AMAVC",
        projectDesc:
          "Ein Planungs-Dashboard für eine Schlaganfall-Präventions-, Informations-, Behandlungs- und Rehabilitationsklinik",
        footerLink: [{ name: "Webseite", url: "https://amavc.com.br" }],
        technologies: [
          { class: "devicon-angularjs-plain", name: "Eckig" },
          { class: "devicon-typescript-plain", name: "Typoskript" },
          { class: "devicon-csharp-plain", name: "C#" },
        ],
      },
      {
        image: "/react-portfolio/images/portfolio/ellas4/p1.png",
        images: ["images/portfolio/ellas4/p1.png"],
        startDate: "2020",
        projectName: "Ellas 4-Abonnement",
        projectDesc: "Abonnementlogik im Frontend für Websites für Erwachsene",
        footerLink: [{ name: "Webseite", url: "https://ellas4.com/login" }],
        technologies: [
          { class: "devicon-angularjs-plain", name: "Eckig" },
          { class: "devicon-typescript-plain", name: "Typoskript" },
          { class: "devicon-csharp-plain", name: "C#" },
        ],
      },
    ],
  },
  otherProjects: {
    seeMoreLabel: "Weitere Informationen finden Sie auf Github",
    projects: [
      {
        href: "https://github.com/Metalefs/MVP-PHP-EuMotorista",
        title: "Eumotorista – Gamifiziertes Fahrlernen",
        description:
          "Sehen Sie sich unseren Pitch über die Schaltfläche unten an. (Erzählung und Bearbeitung von Guilherme Neubaner – Frontend von mir und Backend von mir und Guilherme Neubaner).",
        badge: "Frei",
        pitchSrc: "https://youtu.be/o_LTPT1F4H8",
        iframeSrc: "https://www.youtube.com/embed/o_LTPT1F4H8?controls=0",
      },
    ],
  },
  experience: [
    {
      company: "F3-Capital",
      companyWebsite: "https://f3capital.com.br",
      title: "Entwickler für Benutzeroberflächen",
      years: "2021 - 2023",
      mainTech: ["Winkel >2"],
      technologies: [
        "REST-API",
        "RxJS",
        "JavaScript",
        "Mikrodienste",
        ".NET Core",
        "MUI",
        "Reactjs",
        "Eckig",
      ],
      companylogo: require("../assets/images/f3Logo.jpg").default,
      desc: "Arbeitet als Front-End-Ingenieur bei F3 Capital.",
      descBullets: [
        "Ich war maßgeblich an der Entwicklung eines Startups beteiligt.",
        "Ich habe Stilrichtlinien implementiert, um das Design im gesamten Team konsistent zu halten, und mit Storybook eine Unternehmens-UI-Bibliothek erstellt, um die Produktivität und die Wiederverwendung von Code zu steigern.",
        "Ich habe Regressionstests mit Cypress hinzugefügt, um eine bessere Kontrolle über die Funktionen zu gewährleisten.",
      ],
    },
    {
      company: "Interligados",
      companyWebsite: "https://interligados.com.br",
      title: "Frontend-/Fullstack-Entwickler",
      years: "Freiberuflich",
      mainTech: ["Winkel >2"],
      technologies: [
        "REST-API",
        "RxJS",
        "JavaScript",
        ".NET Core",
        "MUI",
        "Eckig",
      ],
      companylogo: require("../assets/images/interligadosLogo.png").default,
      desc: "Arbeitet als Front-End/Fullstack-Entwickler bei Interligados.",
      descBullets: [
        "End-to-End-Entwicklung neuer Websites",
        "Entwicklung einer benutzerdefinierten UI-Bibliothek, die die Produktivität der Entwickler und die Wiederverwendung von Code für das Unternehmen steigerte",
        "Entwicklung von Architektur und Templates für neue Lösungen",
        "Ich habe an der Datenbankarchitektur, ihrer Behandlung und Anzeige im Frontend gearbeitet",
      ],
    },
    {
      company: "Santander",
      companyWebsite: "https://www.oleconsignado.com.br",
      title: "Fullstack-Entwickler",
      years: "2021 - 2022",
      mainTech: ["Winkel >=2, Reag"],
      technologies: [
        "REST-API",
        "RxJS",
        "JavaScript",
        "Mikrodienste",
        ".NET Core",
        "MUI",
        "Reactjs",
        "Eckig",
      ],
      withpanylogo: require("../assets/images/santanderLogo.png").default,
      desc: "Ich habe den Open-Banking-Flow entwickelt. Recaptcha-Herausforderungen. Durchführung einer Nutzungsanalyse der Kreditströme.",
      descBullets: [
        "Ich war an der Entwicklung des Moduls „Open Banking“ beteiligt, um die Einhaltung externer Maßnahmen zeitnah zu erreichen",
        "Ich habe die Projektanforderungen analysiert und die Spezifikationen in die funktionale Anwendung der Komponenten übersetzt.",
        "Die Implementierung der Überwachung der Benutzererfahrung im Kreditgeschäft mit A/B-Tests wurde verbessert.",
        "Ich habe Probleme und Bedenken eskaliert, um Lösungen zu erleichtern und Auswirkungen auf Zeitpläne zu vermeiden.",
        "Azure Gateway-Wartung.",
        "Docker- und Kubernetes-Wartung.",
        "Micro-Frontends mit Reactjs.",
        "Mikrodienste.",
      ],
    },
    {
      company: "PluralSysteme",
      companyWebsite: "https://pluralsystems.com.br/",
      title: "Junior Front-End-Entwickler",
      years: "Freiberuflich",
      mainTech: ["Winkel >2"],
      technologies: [
        "REST-API",
        "RxJS",
        "JavaScript",
        "EF Core",
        ".NET Core",
        "Mikrodienste",
        "Eckiges Material",
      ],
      companylogo: require("../assets/images/pluralLogo.png").default,
      desc: "Freiberuflich",
      descBullets: [
        "Entwicklung von Webanwendungen mit Angular mit eigenem Design System",
        "Ereignisgesteuerte Architektur",
        "Mehrmandantenfähigkeit",
      ],
    },
    {
      company: "Gerüchte über Lösungen",
      companyWebsite: "https://rumosolucoes.com.br",
      title: ".NET Junior-Entwickler",
      years: "01.2021 - 09.2022",
      mainTech: [".Net/C#"],
      technologies: [
        "W#",
        "ASP.NET",
        "Webformulare",
        "JavaScript",
        "Nodejs",
        "Xamarin",
        "EF Core",
        "OleDB",
        "SQL Server",
        "Elegant",
      ],
      companylogo: require("../assets/images/rumoLogo.png").default,
      desc: "Während der Entwicklung habe ich mehrere Front-End-Technologien eingesetzt, darunter Asp.Net, Angular und JQuery.",
      descBullets: [
        "Für Finanzzwecke und zur Arbeitszeitverwaltung habe ich gebrauchsfertige Anwendungen in Asp.Net und Angular 9 entwickelt",
        "Ich habe Asp.Net MVC- und Asp.Net Web Forms- und Xamarin.Forms-Anwendungen für den internen Gebrauch gepflegt.",
        "Ich habe Webcrawer entwickelt, die Software-Designmuster wie Factory, Decorator und Template für einen Bankkunden implementieren und ein Dashboard für Gerichtsbeschlüsse im ganzen Land bereitstellen",
        "Ich habe Lösungen für maschinelles Lernen mit IBM Watson implementiert, um Gerichtsbeschlussdokumente zu analysieren und Chatbots für institutionelle Seiten zu entwickeln.",
      ],
    },
    {
      company: "Gerüchte über Lösungen",
      companyWebsite: "https://rumosolucoes.com.br",
      title: "Praktikum",
      years: "01.2019 - 01.2021",
      mainTech: [".Net/C#"],
      technologies: [
        "W#",
        "ASP.NET",
        "Webformulare",
        "JavaScript",
        "Nodejs",
        "Xamarin",
        "EF Core",
        "OleDB",
        "SQL Server",
        "Elegant",
      ],
      companylogo: require("../assets/images/rumoLogo.png").default,
      desc: "--",
      descBullets: [
        "Ich habe die richtigen Tools und Prozesse für verschiedene Arten der Entwicklung kennengelernt, um Fehler zu minimieren und Codierungsziele zu erreichen.",
        "Technologien: WebForms, Asp.Net Core, Angular",
        "Sprachen: C#, Javascript",
      ],
    },
  ],
  achievements: {
    title: "Erfolge und Zertifizierungen 🏆",
    subtitle:
      "Erfolge, Zertifizierungen, Auszeichnungen und einige coole Dinge, die ich getan habe!",
    achievementsCards: [
      {
        title: "PWA-Web-App-Entwickler",
        subtitle:
          "SMIT hat die Zertifizierung für PWA-Web-App-Entwicklung abgeschlossen",
        image: require("../assets/images/pwaLogo.png").default,
        footerLink: [
          { name: "Zertifizierung", url: "--" },
          { name: "Abschlussprojekt", url: "#" },
        ],
      },
    ],
  },
  blog: {
    title: "Blogs",
    subtitle:
      "Da ich es liebe, coole Dinge zu entwickeln, liebe ich es, zu schreiben und anderen beizubringen, was ich gelernt habe.",
    displayMediumBlogs: "WAHR",
    blogs: [
      {
        url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
        title: "--",
        description: "--",
      },
    ],
  },
  talks: {
    title: "GESPRÄCHE",
    subtitle: "ICH LIEBE ES, MEIN BEGRENZTES WISSEN ZU TEILEN 😅",
    talks: [
      {
        title: "Erstellen Sie Aktionen für Google Assistant",
        subtitle: "Codelab beim GDG DevFest Karachi 2019",
        slides_url: "https://bit.ly/saadpasta-slides",
        event_url: "https://www.facebook.com/events/2339906106275053/",
      },
    ],
    display: false,
  },
  podcasts: {
    title: "Podcast 🎙️",
    subtitle: "ICH LIEBE ES, ÜBER MICH UND TECHNOLOGIE ZU SPRECHEN",
    podcast: [
      "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
    ],
    display: false,
  },
  contactInfo: {
    title: "Kontaktieren Sie mich ☎️",
    subtitle:
      "Besprechen Sie einen Vorschlag oder möchten Sie einfach nur Hallo sagen? Mein Posteingang ist geöffnet.",
    number: "+55-31987576467",
    email_address: "jackson.pires.rm@gmail.com",
  },
  testimonials: {
    seeMoreLabel: "Mehr auf LinkedIn",
    sources: [
      {
        from: "Daniel Fiedler",
        quote:
          "Äußerst professionell, besorgt um die Qualität des Codes, proaktiv, versucht alles zu dokumentieren und bessere Lösungen für Probleme zu finden, immer bestrebt, mehr über das Projekt und die Sprachen zu erfahren.",
      },
    ],
  },
  education: [
    {
      schoolName: "Fakultät für Angewandte Sozialwissenschaften (FACISABH)",
      logo: require("../assets/images/facisaLogo.png").default,
      subHeader: "Systemanalyse und -entwicklung",
      duration: "Juni 2019 – Juni 2021",
      desc: "Ich habe im Rahmen des Praktikumsprozesses an der Systemforschung teilgenommen und eine Arbeit veröffentlicht.",
      descBullets: [
        "Dauer 2 Jahre.",
        "Transfer in der 5. Periode zu Unicesumar.",
      ],
    },
    {
      schoolName: "Unicesumar",
      logo: require("../assets/images/unicesumarLogo.png").default,
      subHeader: "Systemanalyse und -entwicklung",
      duration: "Januar 2022 – Juni 2022",
      desc: "Halbpräsente Abschlussfeier.",
      descBullets: [
        "Konzepte der Softwarearchitektur.",
        "System Anforderungen.",
      ],
    },
  ],
  languages: [
    { name: "Portugiesisch", stars: 5, proficiency: "Einheimisch" },
    { name: "Englisch", stars: 4, proficiency: "Konversation" },
    { name: "Deutsch", stars: 3, proficiency: "Konversation" },
  ],
};
