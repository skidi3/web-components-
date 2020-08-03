import React from "react";

class FilterByCategory extends React.Component {
  render() {
    return (
      <div>
        <div class="input-field col s12">
          <form action="#">
            <p>
              <label>
                <input type="checkbox" class="filled-in " />
                <span>PG</span>
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" class="filled-in" />
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
