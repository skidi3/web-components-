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
          <form action="#">
            <p>
              <label>
                <input name="group1" type="radio" class="with-gap" />
                <span>Boys only</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" class="with-gap" />
                <span>Girls only</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" class="with-gap" />
                <span>Unisex</span>
              </label>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default FilterByType;
