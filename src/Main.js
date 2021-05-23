import React from "react";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import NotFound from "./pages/NotFound";

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/404" component={withRouter(NotFound)} />
      <Route path="/" component={withRouter(App)} />
    </Switch>
  </Router>
);

export default Main;
