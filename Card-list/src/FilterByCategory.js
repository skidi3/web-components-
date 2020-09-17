import React from "react";

class FilterByCategory extends React.Component {
  render() {
    return (
      <div>
        <div class="input-field col s12">
          <form action="#">
            <p>
              <label>
                <input
                  type="checkbox"
                  class="filled-in by-category--filter "
                  name="PG"
                  value="PG"
                  onChange={this.props.categoryHandler}
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
                  onChange={this.props.categoryHandler}
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
