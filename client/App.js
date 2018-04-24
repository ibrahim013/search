import React from "react";
import { Route, Switch } from "react-router-dom";
import IndexLayout from "./component/pages/IndexLayout";
import SearchDisplay from "./component/pages/SearchDisplay";
import NoMatch from "./component/pages/NoMatch";

const App = () => (
  <div className="">
  <Switch>
    <Route exact path="/" component={IndexLayout} />
    <Route exact path="/search/" component={SearchDisplay} />
    <Route component={NoMatch}/>
    </Switch>
  </div>
);
export default App;
