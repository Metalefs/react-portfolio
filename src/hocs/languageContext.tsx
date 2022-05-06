import React from "react";
import * as primary from "../data/res_portuguese";

export enum Language {
  PT_BR,
  EN_US,
  GER
}

export declare type ResumeData = {
  basic_info: {
    description_header: string;
    description: string;
  };
  greeting: {
    resumeLink: string;
    displayGreeting: boolean // Set false to hide this section, defaults to true
  },
  section_name: {
    contact: string;
    about: string;
    projects: string;
    otherProjects: string;
    skills: string;
    experience: string;
    github: string;
    recommendations: string;
    education: string;
    languages: string;
    proficiency: string;
    blog: string;
    music: string;
    conferences: string;
    source_code: string;
  };
  projects: {
    title:string;
    subtitle:string;
    projects:{
      image: string;
      images: string[];
      startDate: string;
      projectName: string;
      projectDesc: string;
      footerLink: {
        name: string,
        url: string
      }[],
      technologies: {}[];
    }[]
  };
  otherProjects: {
    seeMoreLabel: string;
    projects: {
      href: string;
      title: string;
      description: string;
      badge: string;
      pitchSrc: string;
      iframeSrc: string;
    }[];
  };
  skills: {
    title: string;
    description: string;
    seeMoreLabel: string;
  };
  stackProgress: Array<{
    name: string;
    level: string;
    levelTitle: string;
    progress: string;
  }>;
  experience: {
    company: string;
    title: string;
    years: string;
    mainTech: string[];
    technologies: string[];
  }[];
  testimonials: {
    seeMoreLabel: string;
    sources: { from: string; quote: string }[];
  };
  education: {
    schoolName: string;
    logo: string;
    subHeader: string;
    duration: string;
    desc: string;
    descBullets: string[]
  }[];
  languages: {
    name: string;
    stars: number;
    proficiency:string
  }[];
};

export interface IResumeData {
  language: Language;
  data: ResumeData;
  toggleLanguage: (language: Language) => void;
}

export const LanguageContext = React.createContext<IResumeData>({
  language: Language.PT_BR,
  data: primary.data,
  toggleLanguage: (language: Language) => {},
});
