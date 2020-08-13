import React from "react";
import FilterByRating from "./FilterByRating";
import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
import FilterByType from "./FilterByType";
import FilterByTags from "./FilterByTags";
import FilterByTime from "./FilterByTime";

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
          <br />

          <br />
          <p>
            <b>BY JOINING</b>
          </p>
          <FilterByTime />
          <br />

          <p>
            <b>By Features</b>
          </p>
          <FilterByTags />
        </div>
      </div>
    );
  }
}

export default Filters;
