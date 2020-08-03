import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

class FilterByTime extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".datepicker");
      var instances = M.Datepicker.init(elems, {});
    });
  }
  render() {
    return (
      <div class="by-time">
        <input type="text" class="datepicker" />
      </div>
    );
  }
}
export default FilterByTime;
