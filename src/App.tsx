import React, { Component } from "react";

import "./App.scss";

import Header from "./components/header";
import About from "./components/about";
//import Latest from "./components/projects/latest";
import Projects from "./components/projects/index";
import OtherProjects from "./components/projects/otherProjects";
import Experience from "./components/experience/experience";
import Github from "./components/github/github";
import Info from "./components/info";
import Skills from "./components/skills";
import Testimonials from "./components/testimonials";
import Education from "./components/education";
import Languages from "./components/languages/languages";
import Blog from "./components/blog";
import Music from "./components/music";
import Conferences from "./components/conferences";
import queryString from "query-string";

import * as PT_BR from "./data/res_primaryLanguage";
import * as EN_US from "./data/res_secondaryLanguage";

import {
  LanguageContext,
  Language,
  IResumeData,
  ResumeData,
} from "./hocs/languageContext";
import Footer from "./components/Footer";
import { withRouter } from "react-router-dom";
import ThemeSwitch from "./components/header/components/themeSwitch";
import LanguageSwitch from "./languageSwitch";
import ScrollAnimation from "react-animate-on-scroll";
import { SharedData, SharedDataContext } from "./hocs/sharedDataProvider";

class App extends Component<
  { history: any; match: any; location: any },
  IResumeData
> {
  constructor(props: any) {
    super(props);
    this.state = {
      language: Language.PT_BR,
      data: PT_BR.data,
      toggleLanguage: this.toggleLanguage,
    };
  }

  toggleLanguage = (language: Language) => {
    this.setState(() => ({
      data: this.getDataByLanguage(language),
      language: language,
    }));
    const sLang = Language[language];
    const params = new URLSearchParams();
    if (sLang) {
      params.append("lang", sLang);
    } else {
      params.delete("name");
    }
    if (Language[sLang] !== undefined) {
      this.props.history.push({
        search: params.toString(),
      });
    }
  };

  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    const lang = params.lang;
    if (Language[lang]) {
      this.toggleLanguage(Language[lang] as any);
    } else {
      this.toggleLanguage(Language.PT_BR);
    }
  }

  getDataByLanguage(language: Language): ResumeData {
    switch (+language) {
      case Language.PT_BR:
        return PT_BR.data;

      case Language.EN_US:
        return EN_US.data;
    }
    throw Error("Invalid language: " + language);
  }

  render() {
    return (
      <LanguageContext.Provider value={this.state}>
        <div className="App">
          <ThemeSwitch />

          <Header></Header>

          <LanguageSwitch language={this.state.language} />

          <div className=" sections-wrapper py-3">
            <div className="row" style={{ position: "relative" }}>
              <div className="primary col-12">
                <div>
                  <About></About>

                  <ScrollAnimation duration={0.5} animateIn="fadeInUp">
                    <Skills></Skills>
                  </ScrollAnimation>

                  <ScrollAnimation duration={0.5} animateIn="fadeInUp">
                    <Projects></Projects>
                  </ScrollAnimation>

                  <ScrollAnimation duration={0.5} animateIn="fadeInUp">
                    <OtherProjects></OtherProjects>
                  </ScrollAnimation>

                  <ScrollAnimation duration={0.5} animateIn="fadeInUp">
                    <Experience></Experience>
                  </ScrollAnimation>

                  <div className="row" style={{ position: "relative" }}>
                    <div className="primary col-lg-8 col-12">
                      <ScrollAnimation animateIn="slideInLeft">
                        <Github></Github>
                        <Blog></Blog>
                      </ScrollAnimation>
                    </div>
                    <ScrollAnimation
                      animateIn="slideInRight"
                      className="secondary col-lg-4 col-12"
                    >
                      <Info></Info>

                      <Testimonials></Testimonials>

                      <Education></Education>

                      <Conferences></Conferences>

                      <Languages></Languages>

                      <Music></Music>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SharedDataContext.Consumer>
          {( data : SharedData|{}) => (
            <a href={(data as SharedData).basic_info.source_code} rel="noreferrer" target="_blank">
              {this.state.data.basic_info.section_name.source_code}
            </a>
          )}
          </SharedDataContext.Consumer>
          <Footer></Footer>
        </div>
      </LanguageContext.Provider>
    );
  }
}

export default withRouter(App);
