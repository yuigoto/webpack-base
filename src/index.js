import { createElement } from "core";
import { App } from "views/App";
import "styles/main.scss";

window.createElement = createElement;

document.body.appendChild(
  <App/>
);
