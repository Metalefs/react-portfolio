import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import * as serviceWorker from './serviceWorker';
import {
  SharedDataProvider,
} from "./hocs/sharedDataProvider";

import reportWebVitals from "./reportWebVitals";
import { data } from "./data/portfolio_shared_data";
import "./index.scss";

/* GLOBAL VARIABLES */

import {
  BrowserRouter as Router
} from "react-router-dom";

window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'pl';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SharedDataProvider sharedData={data}>
          <App />
      </SharedDataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
