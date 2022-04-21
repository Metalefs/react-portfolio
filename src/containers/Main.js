import React, { useEffect, useState } from "react";
import Header from "../components/header/";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";
import LanguageSwitch from "../languageSwitch";

import { LanguageContext } from "../hocs/languageContext";
import Testimonials from "../components/testimonials";
import Languages from "../components/languages/languages";
import Music from "../components/music";
import Conferences from "../components/conferences";

const Main = (props) => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <LanguageContext.Consumer>
        {({ language, data, toggleLanguage }) => (
          <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
            {isShowingSplashAnimation && splashScreen.enabled ? (
              <SplashScreen />
            ) : (
              <>
                <Header />
                <LanguageSwitch language={props.state.language} />
                <Greeting data={data}/>
                <Skills data={data}/>
                <StackProgress data={data}/>
                <Education data={data}/>
                <WorkExperience data={data}/>
                <Projects data={data}/>
                <StartupProject data={data}/>
                <Achievement data={data}/>
                <Blogs data={data}/>
                <Talks data={data}/>
                <Twitter data={data}/>
                <Podcast data={data}/>
                <Profile data={data}/>

                <Testimonials />
                <Conferences />
                <Languages />
                <Music />

                <Footer />
                <ScrollToTopButton />
              </>
            )}
          </StyleProvider>
        )}
      </LanguageContext.Consumer>
    </div>
  );
};

export default Main;
