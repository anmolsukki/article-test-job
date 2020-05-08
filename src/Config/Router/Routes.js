import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Articles from "../../Components/Article";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={history => {
          return (
            <Articles history={history.history} match={history.match} />
          );
        }} />
        <Route exact path="/article" render={history => {
          return (
            <Articles history={history.history} match={history.match} exact= {true} />
          );
        }} />     
      </Switch>
    </HashRouter>
  );
};

export default Routes;
