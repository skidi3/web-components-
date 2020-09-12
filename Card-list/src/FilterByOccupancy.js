import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

class FilterByOccupancy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      occupancy: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".datepicker");
      var instances = M.Datepicker.init(elems, {});
    });
  }
  handleChange = (event) => {
    let selected = [];
    const occupancyInput = document.querySelectorAll(".by-occupancy--filter");
    for (let i = 0; i < occupancyInput.length; i++) {
      if (occupancyInput[i].checked) {
        selected.push(occupancyInput[i].value);
      }
    }

    this.setState({
      occupancy: selected,
    });
  };
  render() {
    return (
      <div>
        {console.log(this.state)}
        <div class="input-field col s12">
          <form action="#">
            <p>
              <label>
                <input
                  type="checkbox"
                  class="filled-in by-occupancy--filter"
                  value="Single"
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
