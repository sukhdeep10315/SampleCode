import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import store from "./store";
import { Provider } from "react-redux";
import "./index.css";
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
