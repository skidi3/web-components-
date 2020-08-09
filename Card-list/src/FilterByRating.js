import React from "react";

class FilterByRating extends React.Component {
  render() {
    return (
      <div>
        <div class="input-field col s12">
          <select>
            <option value="" selected>
              Ratings
            </option>
            <option value="1">4★ & above</option>
            <option value="2">3★ & above</option>
            <option value="3">2★ & above</option>
            <option value="4">1★ & above</option>
          </select>
        </div>
      </div>
    );
  }
}

export default FilterByRating;
