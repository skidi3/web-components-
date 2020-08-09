import React from "react";

class FilterByCategory extends React.Component {
  render() {
    return (
      <div>
        <div class="input-field col s12">
          <select multiple>
            <option value="" disabled>
              Property Type
            </option>
            <option value="1">PG</option>
            <option value="2">Hostel</option>
          </select>
        </div>
      </div>
    );
  }
}

export default FilterByCategory;
