import React from "react";
import FilterByRating from "./FilterByRating";
import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
import FilterByType from "./FilterByType";
import FilterByTags from "./FilterByTags";
import FilterByOccupancy from "./FilterByOccupancy";

import "nouislider/distribute/nouislider.css";

class Filters extends React.Component {
  render() {
    return (
      <div>
        <div class="filter-wrapper">
          <p>
            <b>BY CATEGORY</b>
          </p>
          <FilterByCategory />
          <br />

          <p>
            <b>BY GENDER</b>
          </p>
          <FilterByType />
          <br />

          <p>
            <b>BY PRICE</b>
          </p>
          <FilterByPrice />
          <br />

          <p>
            <b>BY STARS</b>
          </p>
          <FilterByRating />
          <br />

          <p>
            <b>BY OCCUPANCY</b>
          </p>
          <FilterByOccupancy />
          <br />

          <p>
            <b>BY AMENETIES</b>
          </p>
          <FilterByTags />
        </div>
        <div class="filter-button">
          <button
            class="filter-button-submit btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    );
  }
}

export default Filters;
