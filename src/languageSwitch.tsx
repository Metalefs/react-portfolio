import { Component } from "react";
import { Language, LanguageContext } from "./hocs/languageContext";

export default class LanguageSwitch extends Component<{ language: Language }, {}> {
  
    render() {
      return (
        <LanguageContext.Consumer>
          {({ language, toggleLanguage }) => (
            <div className="col-md-12 mx-auto text-center language d-flex justify-content-start align-items-center">
              <div
                onClick={() => {
                  toggleLanguage(Language.PT_BR);
                }}
                className={`${
                  this.props.language !== Language.PT_BR && "see-through"
                } delay`}
                style={{
                  display: "inline",
                }}
              >
                <span
                  className="iconify language-icon"
                  data-icon="twemoji-flag-for-flag-brazil"
                  data-width="45"
                  data-inline="false"
                ></span>
              </div>
              <div
                onClick={() => {
                  toggleLanguage(Language.EN_US);
                }}
                className={`${
                  this.props.language !== Language.EN_US && "see-through"
                } delay`}
                style={{
                  display: "inline",
                }}
              >
                <span
                  className="iconify language-icon"
                  data-icon="twemoji-flag-for-flag-united-states"
                  data-width="45"
                  data-inline="false"
                ></span>
              </div>
              <div
                onClick={() => {
                  toggleLanguage(Language.GER);
                }}
                className={`${
                  this.props.language !== Language.GER && "see-through"
                } delay`}
                style={{
                  display: "inline",
                }}
              >
                <span
                  className="iconify language-icon"
                  data-icon="twemoji-flag-for-flag-germany"
                  data-width="45"
                  data-inline="false"
                ></span>
              </div>
            </div>
          )}
        </LanguageContext.Consumer>
      );
    }
  }