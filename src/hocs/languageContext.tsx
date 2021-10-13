import React from "react";
import * as primary from "../data/res_primaryLanguage";

export enum Language {
  PT_BR,
  EN_US,
}

export declare type ResumeData = {
  basic_info: {
    description_header: string;
    description: string;
    section_name: {
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
    };
  };
  projects: {
    title: string;
    startDate: string;
    description: string;
    images: string[];
    url: string;
    technologies: {}[];
  }[];
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
    technologies: Array<{
      name: string;
      level: string;
      levelTitle: string;
      progress: string;
    }>;
  };
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
    title: string;
    university: string;
    period: string;
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
