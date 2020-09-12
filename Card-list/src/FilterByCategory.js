import React from "react";

class FilterByCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    let selected = [];
    const categoryInput = document.querySelectorAll(".by-category--filter");

    for (let i = 0; i < categoryInput.length; i++) {
      if (categoryInput[i].checked) {
        selected.push(categoryInput[i].value);
      }
    }

    this.setState({
      category: selected,
    });
  };
  render() {
    return (
      <div>
        <div class="input-field col s12">
          {console.log(this.state)}
          <form action="#">
            <p>
              <label>
                <input
                  type="checkbox"
                  class="filled-in by-category--filter "
                  name="PG"
                  value="PG"
                  onChange={this.handleChange}
                />
                <span>PG</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  class="filled-in by-category--filter"
                  name="Hostel"
                  value="Hostel"
                  onChange={this.handleChange}
                />
                <span>Hostel</span>
              </label>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default FilterByCategory;
