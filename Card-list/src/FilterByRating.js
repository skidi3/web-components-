import React from "react";

class FilterByRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ rating: e.target.value });
  };
  render() {
    return (
      <div class="input-field col s12">
        {console.log(this.state)}
        <form action="#">
          <p>
            <label>
              <input
                name="rating"
                type="radio"
                class="with-gap"
                value="5"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
