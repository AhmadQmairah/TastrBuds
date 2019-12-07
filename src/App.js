import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage";
import TasteList from "./components/TasteList";
import VotePage from "./components/VotingPage";
import MakeAtaste from "./components/MakeAtaste";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/Profile/:id" component={Profile} />
        <Route path="/make" component={MakeAtaste} />
        <Route path="/vote" component={VotePage} />
        <Route path="/taste" component={TasteList} />

        <Route path="/(login|register)" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
