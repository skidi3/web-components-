import React from "react";
import noUiSlider from "nouislider";
import * as wNumb from "wnumb";

class FilterByPrice extends React.Component {
  componentDidMount() {
    var connectSlider = document.getElementById("slider-connect");
    noUiSlider.create(connectSlider, {
      start: 10,
      connect: [true, false],
      range: {
        min: 1000,
        max: 10000,
      },
      tooltips: wNumb({ decimals: 0, suffix: "$" }),
      format: wNumb({ decimals: 0 }),
    });

    function manualStep(direction) {
      var currentPosition = parseInt(connectSlider.noUiSlider.get());
      var stepSize = 1;
      if (direction == "f") {
        currentPosition += stepSize;
      }
      if (direction == "b") {
        currentPosition -= stepSize;
      }
      currentPosition = Math.round(currentPosition / stepSize) * stepSize;
      connectSlider.noUiSlider.set(currentPosition);
    }
    document.getElementById("stepforward").onclick = function () {
      manualStep("f");
    };
    document.getElementById("stepback").onclick = function () {
      manualStep("b");
    };
  }
  render() {
    return (
      <div class="input-field col s12 by-price ">
        <div class="left margin-btn">
          <div id="slider-connect" class="range"></div>
          <div class="example-val" hidden="" id="event-end"></div>
        </div>
        <br />
        <div class="right margin-btn">
          <button id="stepback">
            <i class="fa fa-minus fa-lg" aria-hidden="true"></i>
          </button>
          <button id="stepforward">
            <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default FilterByPrice;
