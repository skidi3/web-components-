import React from "react";
import $ from "jquery";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";
import * as wNumb from "wnumb";
// import axios from "axios";
// import FilterByRating from "./FilterByRating";
// import FilterByCategory from "./FilterByCategory";
// import FilterByPrice from "./FilterByPrice";
// import FilterByGender from "./FilterByGender";
// import FilterByAmenities from "./FilterByAmenities";
// import FilterByOccupancy from "./FilterByOccupancy";

import "nouislider/distribute/nouislider.css";

class Filters extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems, {});
    });
    var slider = document.getElementById("slider");
    noUiSlider.create(slider, {
      start: [1001, 9999],
      connect: true,
      tooltips: true,
      step: 1,
      range: {
        min: 1000,
        max: 10000,
      },
      format: wNumb({
        decimals: 0,
      }),
    });
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".datepicker");
      var instances = M.Datepicker.init(elems, {});
    });
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems, {});
    });
  }
  render() {
    return (
      <form onSubmit={this.props.submitFilterData}>
        <div class="filter-wrapper">
          <p>
            <b>BY CATEGORY</b>
          </p>

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
          <br />

          <p>
            <b>BY GENDER</b>
          </p>
          <div class="input-field col s12">
            <form action="#">
              <p>
                <label>
                  <input
                    type="radio"
                    class="with-gap"
                    value="boys"
                    name="by-gender"
                    onChange={this.props.genderHandler}
                  />
                  <span>Boys only</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="radio"
                    class="with-gap"
                    value="girls"
                    name="by-gender"
                    onChange={this.props.genderHandler}
                  />
                  <span>Girls only</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="radio"
                    class="with-gap"
                    value="unisex"
                    name="by-gender"
                    onChange={this.props.genderHandler}
                  />
                  <span>Unisex</span>
                </label>
              </p>
            </form>
          </div>
          <br />

          <p>
            <b>BY PRICE</b>
          </p>
          <div class="price-filter-wrapper" onClick={this.props.priceHandler}>
            <br />
            <div class="input-field col s12 by-price ">
              <div id="slider"></div>
            </div>
          </div>
          <br />

          <p>
            <b>BY STARS</b>
          </p>
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
          </div>
          <br />

          <p>
            <b>BY OCCUPANCY</b>
          </p>
          <div class="input-field col s12">
            <form action="#">
              <p>
                <label>
                  <input
                    type="checkbox"
                    class="filled-in by-occupancy--filter"
                    value="Single"
                    onChange={this.props.occupancyHandler}
                  />
                  <span>Single</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    class="filled-in by-occupancy--filter"
                    value="Double"
                    onChange={this.props.occupancyHandler}
                  />
                  <span>Double</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    class="filled-in by-occupancy--filter"
                    value="Triple"
                    onChange={this.props.occupancyHandler}
                  />
                  <span>Triple</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    class="filled-in  by-occupancy--filter"
                    value="Quadruple"
                    onChange={this.props.occupancyHandler}
                  />
                  <span>Quadruple</span>
                </label>
              </p>
            </form>
          </div>
          <br />

          <p>
            <b>BY AMENETIES</b>
          </p>
          <div class="input-field col s12">
            <select
              id="amenities"
              multiple
              onChange={this.props.amenitiesHandler}
            >
              <option name="ac" value="ac">
                AC
              </option>
              <option name="washingmachine" value="washingmachine">
                Washing Machine
              </option>
              <option name="kitchen" value="kitchen">
                Kitchen
              </option>
              <option name="fridge" value="fridge">
                Fridge
              </option>
              <option name="wifi" value="wifi">
                WiFi
              </option>
              <option name="furniture" value="furniture">
                Furniture
              </option>
              <option name="laundry" value="laundry">
                Laundry
              </option>
              <option name="cctv" value="cctv">
                CCTV
              </option>
              <option name="cab" value="cab">
                Cabs
              </option>
              <option name="store" value="store">
                Store
              </option>
            </select>
          </div>
        </div>
        <div class="filter-button">
          <button
            class="filter-button-submit btn waves-effect waves-light"
            type="submit"
            name="action"
            //onClick={this.props.submitFilterData}
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    );
  }
}

export default Filters;
