import React from "react";

class FilterByRating extends React.Component {
  render() {
    return (
      <div class="input-field col s12">
        <form action="#">
          <p>
            <label>
              <input
                name="rating"
                type="radio"
                class="with-gap"
                value="5"
                onChange={this.props.ratingHandler}
              />
              <span>5 star and above</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="rating"
                type="radio"
                class="with-gap"
                value="4"
                onChange={this.props.ratingHandler}
              />
              <span>4 star and above</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="rating"
                type="radio"
                class="with-gap"
                value="3"
                onChange={this.props.ratingHandler}
              />
              <span>3 star and above</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="rating"
                type="radio"
                class="with-gap"
                value="2"
                onChange={this.props.ratingHandler}
              />
              <span>2 star and above</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="rating"
                type="radio"
                class="with-gap"
                value="1"
                onChange={this.props.ratingHandler}
              />
              <span>1 star and above</span>
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
