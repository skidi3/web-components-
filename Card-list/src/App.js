import React from "react";
import Card from "./Card";
import CardDetails from "./CardDetails";
import Filters from "./Filters";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="form-wrapper">
        {/*<div className="filter-container">
          <Filters />
        </div>*/}
        <div className="card-container">
          <Router>
            <Route path="/list" exact component={Card} />
            <Route path="/list/:id" component={CardDetails} />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
