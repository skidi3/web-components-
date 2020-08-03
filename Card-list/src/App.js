import React from "react";
import Card from "./Card";
import Filters from "./Filters";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="form-wrapper">
        <div className="filter-container">
          <Filters />
        </div>
        <div className="card-container">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
