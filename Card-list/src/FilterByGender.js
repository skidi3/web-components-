import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

class FilterByGender extends React.Component {
  /*{constructor(props) {
    super(props);
    this.state = {
      gender: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }}*/
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
                <input
                  type="radio"
                  class="with-gap"
                  value="boys"
                  name="by-gender"
                  onChange={this.props.genderHandler}
                />
                <span>Boys only</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="radio"
                  class="with-gap"
                  value="girls"
                  name="by-gender"
                  onChange={this.props.genderHandler}
                />
                <span>Girls only</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="radio"
                  class="with-gap"
                  value="unisex"
                  name="by-gender"
                  onChange={this.props.genderHandler}
                />
                <span>Unisex</span>
              </label>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default FilterByGender;
