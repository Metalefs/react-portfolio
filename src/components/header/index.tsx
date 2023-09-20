import React, { useContext } from "react";
// @ts-ignore
import Typical from "react-typical";
import ProfileLinks from "./components/profileLinks";

import { SharedData, SharedDataContext } from "../../hocs/sharedDataProvider";
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";
import headerbg from './herobg.jpg'
import "./header.scss";
import ProfileImage from "./components/profileImage";
import { LanguageContext } from "../../hocs/languageContext";
import Headroom from "react-headroom";
import "./header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
} from "../../portfolio";

function ContactButton(props: any) {
  const [{ y, background }, set] = useSpring(() => ({
    y: 100,
    background: "green",
  }));
  const data = useContext(LanguageContext).data;
  const sectionName = data.section_name.contact;

  return (
    <animated.a
      className="btn btn-cta-primary mt-3"
      href={`mailto:${props.mailto}`}
      target="_blank"
      rel="noreferrer"
      style={{ background: background }}
    >
      <span className="iconify mr-3" data-icon="ion:paper-plane-sharp"></span>
      <span> {sectionName}</span>
      <animated.div
        style={{ transform: y.to((v) => `translateY(${v}%`) }}
        className="glance"
        onMouseEnter={() => set({ y: 0, background: "#000" })}
        onMouseLeave={() => set({ y: 100, background: "#fff" })}
      ></animated.div>
    </animated.a>
  );
}

function Header(props) {
  const { isDark } = useContext(StyleContext);
  const sharedBasicInfo = useContext(SharedDataContext) as SharedData;
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const mailto = "jackson.pires.rm@gmail.com";
  const titles = sharedBasicInfo.basic_info.titles
    .map((x) => [x.toUpperCase(), 3500])
    .flat();
  const name = sharedBasicInfo.basic_info.name;
  // const springConfig = useSpring({
  //   loop: true,
  //   config: config.gentle,
  //   from: { transform: "translate3d(0, 0px,0)" },
  //   to: [
  //     { transform: "translate3d(0, 2px,0)" },
  //     { transform: "translate3d(0, 0px,0)" },
  //   ],
  //   duration: 500,
  // });
  <div className="mx-4">
    <span
      className="iconify"
      data-icon="fontelico:emo-coffee"
      data-width="150"
    ></span>
  </div>;

  const HeaderTitleTypeAnimation = React.memo(
    () => {
      return <Typical contentEditable="true" className="title-styles desc" steps={titles} loop={1} />;
    },
    (props, prevProp) => true
  );
  return (
    <div>
      <Headroom>
        <header className={isDark ? "dark-menu header" : "header"}>
          <a href="/" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">{greeting.username}</span>
            <span className="grey-color">/&gt;</span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            style={{ color: "white" }}
          >
            <span
              className={isDark ? "navicon navicon-dark" : "navicon"}
            ></span>
          </label>
          <ul className={isDark ? "dark-menu menu" : "menu"}>
            {viewSkills && (
              <li>
                <a href="#skills">{props.data.skills}</a>
              </li>
            )}
            {viewExperience && (
              <li>
                <a href="#experience">{props.data.experience}</a>
              </li>
            )}
            {viewOpenSource && (
              <li>
                <a href="#opensource">{props.data.opensource}</a>
              </li>
            )}
            {viewAchievement && (
              <li>
                <a href="#achievements">{props.data.achievements}</a>
              </li>
            )}
            {viewBlog && (
              <li>
                <a href="#blogs">{props.data.blogs}</a>
              </li>
            )}
            {viewTalks && (
              <li>
                <a href="#talks">{props.data.talks}</a>
              </li>
            )}
            <li>
              <a href="#contact">{props.data.contact}</a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>
                <ToggleSwitch />
              </a>
            </li>
          </ul>
        </header>
      </Headroom>

      <div
        className="header-hero row align-items-center justify-content-center"
        style={
          {
            backgroundImage: `url(${headerbg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }
        }
        id="home"
      >
        <div className="profile-content d-flex">
            <div className="">
              <ProfileImage />
            </div>
          <animated.div>

            <div>
              <h1 className="mb-0 name">
              <span className="title-styles desc"> {name}</span>
              </h1>
              <div className="title-container d-flex">
                <HeaderTitleTypeAnimation /> <span className="title-styles desc"> DEV</span>
              </div>
            <ProfileLinks />
            </div>
          </animated.div>
          {/* <ContactButton mailto={mailto}></ContactButton> */}
        </div>
      </div>
    </div>
  );
}
export default Header;
