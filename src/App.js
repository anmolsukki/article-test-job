import React from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory as createHistory } from 'history'
import Routes from "./Config/Router/Routes";

const history = createHistory()

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
