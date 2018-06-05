import React from "react";
import ReactDOM from "react-dom";

import AppProvider from "./components/AppProvider";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import Store from "./store";

// Main Render
ReactDOM.render(
  <AppProvider store={Store}>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
registerServiceWorker();
