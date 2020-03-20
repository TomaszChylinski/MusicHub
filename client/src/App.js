import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./component/Navigation";
import Login from "./component/Login";
import Home from "./component/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid mainContainer">
          {<Navigation />}
          {<Login />}

          {<Home />}

          {/* <Switch>
            <Route exact path="/" component={Book} />
            <Route exact path="/saved" component={Book} />
            {/* <Route exact path="/saved" component={Saved} /> */}
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
