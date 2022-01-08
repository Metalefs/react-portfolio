import "./themeSwitch.scss";
import Switch from "react-switch";
import { Component } from "react";

class ThemeSwitch extends Component {
  titles = [];

  constructor(props: any) {
    super(props);
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked: any) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    return (
      <Switch
        checked={(this.state as any).checked}
        onChange={this.onThemeSwitchChange}
        offColor="#"
        onColor="#"
        className="react-switch mx-auto"
        width={90}
        height={40}
        uncheckedIcon={
          <span
            className="iconify dark-mode-switch d-flex"
            data-icon="twemoji:owl"
            data-inline="false"
            style={{
              display: "block",
              height: "100%",
              fontSize: 25,
              textAlign: "end",
              marginLeft: "20px",
              border: "1px solid black",
              borderRadius: "50%",
              color: "#",
            }}
          ></span>
        }
        checkedIcon={
          <span
            className="iconify dark-mode-switch d-flex"
            data-icon="noto-v1:sun-with-face"
            data-inline="false"
            style={{
              display: "block",
              height: "100%",
              fontSize: 25,
              textAlign: "end",
              marginLeft: "10px",
              color: "#353239",
            }}
          ></span>
        }
        id="icon-switch"
      />
    );
  }
}

export default ThemeSwitch;
