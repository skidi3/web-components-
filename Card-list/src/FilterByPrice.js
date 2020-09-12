import React from "react";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";
import * as wNumb from "wnumb";
import $ from "jquery";

class FilterByPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: "",
      max: "",
    };
  }
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
  render() {
    return (
      <div class="price-filter-wrapper" onClick={this.getCurrMinData}>
        <br />
        <div class="input-field col s12 by-price ">
          {console.log(this.state)}
          <div id="slider"></div>
        </div>
      </div>
    );
  }
}

export default FilterByPrice;
