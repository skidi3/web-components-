import React from "react";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";
import * as wNumb from "wnumb";
import $ from "jquery";

class FilterByPrice extends React.Component {
  componentDidMount() {
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
  }

  render() {
    return (
      <div class="price-filter-wrapper" onClick={this.props.priceHandler}>
        <br />
        <div class="input-field col s12 by-price ">
          <div id="slider"></div>
        </div>
      </div>
    );
  }
}

export default FilterByPrice;
