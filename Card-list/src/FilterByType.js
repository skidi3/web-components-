import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

class FilterByType extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems, {});
    });
  }
  render() {
    return (
      <div>
        <div class="input-field col s12">
          <select>
            <option value="" selected>
              Gender
            </option>
            <option value="1">For Men</option>
            <option value="2">For Women</option>
          </select>
        </div>
      </div>
    );
  }
}

export default FilterByType;
