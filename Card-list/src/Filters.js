import React from "react";
import $ from "jquery";
import axios from "axios";
import FilterByRating from "./FilterByRating";
import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
import FilterByGender from "./FilterByGender";
import FilterByAmenities from "./FilterByAmenities";
import FilterByOccupancy from "./FilterByOccupancy";

import "nouislider/distribute/nouislider.css";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      gender: "",
      min: "",
      max: "",
      rating: "",
      occupancy: [],
      amenities: [],
    };
    this.handleCategory = this.handleCategory.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.getCurrMaxData = this.getCurrMaxData.bind(this);
    this.getCurrMinData = this.getCurrMinData.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleOccupancy = this.handleOccupancy.bind(this);
    this.handleAmentiesChange = this.handleAmentiesChange.bind(this);
  }

  handleCategory = (event) => {
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

  handleGender = (e) => {
    this.setState({ gender: e.target.value });
  };

  handleRating = (e) => {
    this.setState({ rating: e.target.value });
  };

  getCurrMaxData = () => {
    var currMaxPos = $(".noUi-handle-upper .noUi-tooltip").html();
    //console.log(currMaxPos);
    this.setState({ max: currMaxPos });
  };

  getCurrMinData = () => {
    var currMinPos = $(".noUi-handle-lower .noUi-tooltip").html();
    //console.log(currMinPos);
    this.setState({ min: currMinPos });
    this.getCurrMaxData();
  };

  handleOccupancy = (event) => {
    let selected = [];
    const occupancyInput = document.querySelectorAll(".by-occupancy--filter");
    for (let i = 0; i < occupancyInput.length; i++) {
      if (occupancyInput[i].checked) {
        selected.push(occupancyInput[i].value);
      }
    }

    this.setState({
      occupancy: selected,
    });
  };

  handleAmentiesChange = (event) => {
    var select = document.getElementById("amenities");
    var selected = [...select.selectedOptions].map((option) => option.value);

    this.setState({
      amenities: selected,
    });
  };

  submitFilterData = (e) => {
    e.preventDefault();
    var filterData = {
      category: this.state.category,
      gender: this.state.gender,
      price: [this.state.min, this.state.max],
      rating: this.state.rating,
      occupancy: this.state.occupancy,
      amenities: this.state.amenities,
    };
    console.log(filterData);
    axios.post(`http://localhost:8089/api/list`, filterData).then((res) => {
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        {console.log("filter data:", this.state)}
        <div class="filter-wrapper">
          <p>
            <b>BY CATEGORY</b>
          </p>

          <FilterByCategory categoryHandler={this.handleCategory} />
          <br />

          <p>
            <b>BY GENDER</b>
          </p>
          <FilterByGender genderHandler={this.handleGender} />
          <br />

          <p>
            <b>BY PRICE</b>
          </p>
          <FilterByPrice priceHandler={this.getCurrMinData} />
          <br />

          <p>
            <b>BY STARS</b>
          </p>
          <FilterByRating ratingHandler={this.handleRating} />
          <br />

          <p>
            <b>BY OCCUPANCY</b>
          </p>
          <FilterByOccupancy occupancyHandler={this.handleOccupancy} />
          <br />

          <p>
            <b>BY AMENETIES</b>
          </p>
          <FilterByAmenities amenitiesHandler={this.handleAmentiesChange} />
        </div>
        <div class="filter-button">
          <button
            class="filter-button-submit btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={this.submitFilterData}
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
