import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-react';
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "../client/style/style.scss";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
 ,
  document.getElementById("app"),
);

