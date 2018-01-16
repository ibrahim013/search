import React from "react";
import { Route } from "react-router-dom";
import IndexLayout from "./component/pages/IndexLayout";
import SearchDisplay from "./component/pages/SearchDisplay";

const App = () => (
  <div className="">
    <Route exact path="/" component={IndexLayout} />
    <Route exact path="/search/" component={SearchDisplay} />
  </div>
);
export default App;
