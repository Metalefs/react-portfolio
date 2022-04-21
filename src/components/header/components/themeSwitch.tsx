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
      // offColor="#000000"
      //   onColor="#fff"
      <Switch
        checked={(this.state as any).checked}
        onChange={this.onThemeSwitchChange}
        className="react-switch theme-switch"
        width={90}
        height={40}
        uncheckedIcon={
          <span
            className="iconify dark-mode-switch"
            data-icon="twemoji:owl"
            data-inline="false"
          ></span>
        }
        checkedIcon={
          <span
            className="iconify dark-mode-switch"
            data-icon="noto-v1:sun-with-face"
            data-inline="false"
          ></span>
        }
        id="icon-switch"
      />
    );
  }
}

export default ThemeSwitch;
