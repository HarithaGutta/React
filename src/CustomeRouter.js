import React from "react";
import Movies from "./Movies/Movies.jsx";
import LifeCycleDemo from "./LifeCycleDemo/LifeCycleDemo";
import Calculator from "./Calculator/Calculator";
import { Route } from "react-router-dom";
export function CustomeRouter() {
  return (
    <div>
      <Route path="/Movies" component={Movies} />
      <Route path="/Calc" component={Calculator} />
      <Route path="/Lifecycle" component={LifeCycleDemo} />
    </div>
  );
}
