import React, { useContext } from "react";
// @ts-ignore
import Typical from "react-typical";
import ProfileLinks from "./components/profileLinks";

import { SharedData, SharedDataContext } from "../../hocs/sharedDataProvider";
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";

import "./header.scss";
import ProfileImage from "./components/profileImage";

function ContactButton(props: any) {
  const [{ y, color }, set] = useSpring(() => ({ y: 100, color: "#fff" }));
  return (
    <button
      onMouseEnter={() => set({ y: 0, color: "#000" })}
      onMouseLeave={() => set({ y: 100, color: "#fff" })}
    >
      <animated.a
        className="btn btn-cta-primary"
        href={`mailto:${props.mailto}`}
        target="_blank"
        rel="noreferrer"
        style={{ color: color }}
      >
        <span className="iconify mr-3" data-icon="ion:paper-plane-sharp"></span>
        <span> Contato</span>
      </animated.a>
      <animated.div
        style={{ transform: y.to((v) => `translateY(${v}%`) }}
        className="glance"
      ></animated.div>
    </button>
  );
}

function Header(props) {
  const mailto = "jackson.pires.rm@gmail.com";
  const sharedBasicInfo = useContext(SharedDataContext) as SharedData;
  const name = sharedBasicInfo.basic_info.name;
  const titles = sharedBasicInfo.basic_info.titles
    .map((x) => [x.toUpperCase(), 1500])
    .flat();

  const springConfig = useSpring({
    loop: true,
    config: config.gentle,
    from: { transform: "translate3d(0, 0px,0)" },
    to: [
      { transform: "translate3d(0, 2px,0)" },
      { transform: "translate3d(0, 0px,0)" },
    ],
    duration: 500,
  });
  // <div className="mx-4">
  //   <span
  //     className="iconify"
  //     data-icon="fontelico:emo-coffee"
  //     data-width="150"
  //   ></span>
  // </div>
  const animatedCoffed = <ProfileImage />;
  const HeaderTitleTypeAnimation = React.memo(
    () => {
      return <Typical className="title-styles desc" steps={titles} loop={1} />;
    },
    (props, prevProp) => true
  );

  return (
    <header
      className="header"
      id="home"
      style={{ height: window.innerHeight - 0, display: "block" }}
    >
      <div className="profile-content">
        {animatedCoffed}
        <animated.div style={springConfig}>
          <h1 className="mb-0 name" >
            <Typical className="name" steps={[name]} wrapper="p" />
          </h1>
          <div className="title-container">
            <HeaderTitleTypeAnimation />
          </div>
          <ProfileLinks />
        </animated.div>
      </div>
      <ContactButton mailto={mailto}></ContactButton>
    </header>
  );
}

export default Header;
