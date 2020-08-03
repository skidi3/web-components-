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
                <span>For men</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" class="with-gap" />
                <span>For women</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" class="with-gap" />
                <span>Co-ed</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" class="with-gap" />
                <span>Co live</span>
              </label>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default FilterByType;
