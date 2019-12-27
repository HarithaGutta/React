import React from "react";
import Movies from "./Movies/Movies.jsx";
import movies1 from "./Movies/movies1.js";
import LifeCycleDemo from "./LifeCycleDemo/LifeCycleDemo";
import Calculator from "./Calculator/Calculator";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { func } from "prop-types";

function Links() {
  return (
    <div className="Links">
      <Link to="/Movies">Movies</Link>
      <br />
      <Link to="/Calc"> Calculator</Link>
      <br />
      <Link to="/Lifecycle">LifeCycleDemo</Link>
    </div>
  );
}

function CustomeRouter() {
  return (
    <div>
      <Route path="/Movies" component={Movies} />
      <Route path="/Calc" component={Calculator} />
      <Route path="/Lifecycle" component={LifeCycleDemo} />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      Heelo World..
      <hr />
      <div className="router">
        <Router>
          <Links />
          <hr />
          <CustomeRouter />
        </Router>
      </div>
    </div>
  );
}

export default App;
