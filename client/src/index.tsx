import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "rsuite/dist/rsuite.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = createStore();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
