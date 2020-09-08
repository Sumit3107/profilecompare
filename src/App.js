import React from "react";
import {Route, Switch, Redirect} from "react-router-dom"
import Compare from "./components/compare"
import Profile from "./components/profile"
export const App = () => {
  return (
    <div className="App">
      <Compare />
      <Switch>
        <Route path="/home/:username" component={Profile} />
        <Redirect from="/" to="/home" />
      </Switch>
      {/* <Profile /> */}
    </div>
  );
};

export default App;
