import React from "react";
import { Route } from "react-router-dom";
import IndexLayout from "./component/pages/IndexLayout";
import SearchDisplay from "./component/pages/SearchDisplay";
import Aboutus from "./component/pages/Aboutus";
import Terms from "./component/pages/Terms";
import Cookies from "./component/pages/Cookies";
import Privacy from "./component/pages/Privacy";

const App = () => (
  <div>
    <Route exact path="/" component={IndexLayout} />
    <Route exact path="/search/" component={SearchDisplay} />
    <Route exact path="/aboutus" component={Aboutus} />
    <Route exact path="/terms" component={Terms} />
    <Route exact path="/cookies" component={Cookies} />
    <Route exact path="/privacy" component={Privacy} />
  </div>
);
export default App;
