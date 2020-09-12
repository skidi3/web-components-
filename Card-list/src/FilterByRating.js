import React from "react";

class FilterByRating extends React.Component {
  render() {
    return (
      <div class="input-field col s12">
        <form action="#">
          <p>
            <label>
              <input name="group1" type="radio" class="with-gap" />
              <span>5 star and above</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" class="with-gap" />
              <span>4 star and above</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" class="with-gap" />
              <span>3 star and above</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" class="with-gap" />
              <span>2 star and above</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" class="with-gap" />
              <span>1star and above</span>
            </label>
          </p>
        </form>
        {/*
      <div>
        <div class="rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
      </div>*/}
      </div>
    );
  }
}

export default FilterByRating;
