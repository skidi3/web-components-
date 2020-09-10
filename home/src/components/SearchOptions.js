import React from "react";
import M from "materialize-css";
import $ from "jquery";
import wNumb from "wnumb";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";

class SearchOptions extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems, {});
    });

    var slider = document.getElementById("slider");
    noUiSlider.create(slider, {
      start: [1, 99],
      connect: true,
      tooltips: true,
      step: 1,
      range: {
        min: 0,
        max: 100,
      },
      format: wNumb({
        decimals: 0,
      }),
    });
  }
  render() {
    return (
      <div>
        <div class="search-options-row">
          <div class="search-options-col">
            <br />
            <div class="input-field col s12">
              <p>By gender:</p>
              <select multiple>
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="1">Men</option>
                <option value="2">Women</option>
              </select>
              {/*<label>By gender</label>*/}
            </div>

            <div class="input-field col s12">
              <p>By type:</p>
              <select multiple>
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="1">PG</option>
                <option value="2">Hostel</option>
              </select>
              {/*<label>By hostel type</label>*/}
            </div>
          </div>
          <div class="search-options-col">
            <br />
            <div class="col s10 offset s1">
              <br />
              <p>Price:</p>
              <br />

              <div id="slider"></div>
            </div>
            <br />
            <br />
            <div class="input-field col s12">
              <p>By category:</p>
              <select multiple>
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="3">Colive</option>
                <option value="3">Co-ed</option>
              </select>
              {/*<label>By gender</label>*/}
            </div>
          </div>
        </div>
        <br />
        <div class="search-options-btn ">
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            <p class="center-align">SEARCH</p>
          </button>
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            <p class="center-align">CLOSE</p>
          </button>
        </div>
      </div>
    );
  }
}

export default SearchOptions;
