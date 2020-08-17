import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Header from "../Header";
import "./../../styles/base.scss";
import FiveDays from "../../pages/FiveDays";

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/fivedays" component={FiveDays} />
      <Redirect to="/" />
    </Switch>
  </>
);
export default App;
