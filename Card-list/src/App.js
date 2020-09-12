import React from "react";
import Card from "./Card";
import CardDetails from "./CardDetails";
import Filters from "./Filters";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="form-wrapper">
        <Router>
          <div className="filter-container">
            <Filters />
          </div>
          <div className="card-container">
            <Router>
              <Route path="/list" exact component={Card} />
              <Route path="/list/:id" component={CardDetails} />
            </Router>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
