import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

class FilterByOccupancy extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".datepicker");
      var instances = M.Datepicker.init(elems, {});
    });
  }

  render() {
    return (
      <div>
        <div class="input-field col s12">
          <form action="#">
            <p>
              <label>
                <input
                  type="checkbox"
                  class="filled-in by-occupancy--filter"
                  value="Single"
                  onChange={this.props.occupancyHandler}
                />
                <span>Single</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  class="filled-in by-occupancy--filter"
                  value="Double"
                  onChange={this.props.occupancyHandler}
                />
                <span>Double</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  class="filled-in by-occupancy--filter"
                  value="Triple"
                  onChange={this.props.occupancyHandler}
                />
                <span>Triple</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  class="filled-in  by-occupancy--filter"
                  value="Quadruple"
                  onChange={this.props.occupancyHandler}
                />
                <span>Quadruple</span>
              </label>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default FilterByOccupancy;
