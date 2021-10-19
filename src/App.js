import { HashRouter, Switch, Route } from "react-router-dom";
//import { useState, useEffect, Component, useContext } from "react";
import Error404 from "./Pages/404";
import Home from "./Pages/Home";
import About from "./Pages/About";


//rafce

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/*" component={Error404} />
      </Switch>
    </HashRouter>
  );
}

export default App;
