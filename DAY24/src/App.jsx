import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Routes/About";
import Profile from "./Routes/Profile";
import Dashboard from "./Routes/Dashboard";
import Home from "./Routes/Home";
import { UserContext } from "./Context/UserContext";
function App() {
  return (
    <div className="App">
      <Router>
        <ul className="nav">
          <li>
            <Link className="hlink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hlink" to="/About">
              About
            </Link>
          </li>
          <li>
            <Link className="hlink" to="/Profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="hlink" to="/Dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
        <UserContext>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </UserContext>
      </Router>
    </div>
  );
}

export default App;
