import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import DenseAppBar from "./Components/NavBar/NavBar";
import Main from "./Pages/Main";

// <Router history={browserHistory}> */

const routing = (
  <Router>
    <DenseAppBar />
    <div>
      <Route path="/" component={Main} />
      {/* <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} /> */}
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
