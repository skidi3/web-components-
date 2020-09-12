import React, { Component } from "react";
import M from "materialize-css";

class FilterByTags extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".tooltipped");
      var instances = M.Tooltip.init(elems, {});
    });
  }
  render() {
    return (
      <div>
        <div class="input-field col s12">
          <select multiple>
            <option value="" disabled selected>
              Choose your option
            </option>
            <option value="1">AC</option>
            <option value="2">Washing Machine</option>
            <option value="3">Kitchen</option>
            <option value="4">Fridge</option>
            <option value="5">WiFi</option>
            <option value="6">Furniture</option>
            <option value="7">Laundry</option>
            <option value="8">CCTV</option>
            <option value="9">Cabs</option>
            <option value="10">Store</option>
          </select>
        </div>
        {/*<div class="amenities">
          <a
            class="waves-effect waves-light btn-large margin-lg tooltipped"
            data-position="top"
            data-tooltip="Cab"
          >
            <i class="material-icons margin">airport_shuttle</i>
          </a>
          <a
            class="waves-effect waves-light btn-large margin-lg tooltipped"
            data-position="top"
            data-tooltip="Wifi"
          >
            <i class="material-icons margin">network_wifi</i>
          </a>
          <a
            class="waves-effect waves-light btn-large margin-lg tooltipped"
            data-position="top"
            data-tooltip="Store"
          >
            <i class="material-icons margin">store</i>
          </a>
          <a
            class="waves-effect waves-light btn-large margin-lg tooltipped"
            data-position="top"
            data-tooltip="Furniture"
          >
            <i class="material-icons margin">weekend</i>
          </a>
          <a
            class="waves-effect waves-light btn-large margin-lg tooltipped"
            data-position="top"
            data-tooltip="Hospital"
          >
            <i class="material-icons margin">local_hospital</i>
          </a>
          <a
            class="waves-effect waves-light btn-large margin-lg tooltipped"
            data-position="top"
            data-tooltip="Laundry"
          >
            <i class="material-icons margin">local_laundry_service</i>
          </a>
          <a
            class="waves-effect waves-light btn-large margin-lg tooltipped"
            data-position="top"
            data-tooltip="CCTV"
          >
            <i class="material-icons margin">camera</i>
          </a>
          <a
            class="waves-effect waves-light btn-large margin-lg tooltipped"
            data-position="top"
            data-tooltip="AC"
          >
            <i class="material-icons margin">ac_unit</i>
          </a>
          <a
            class="waves-effect waves-light btn-large margin-lg tooltipped"
            data-position="top"
            data-tooltip="Shuttle"
          >
            <i class="material-icons margin">airport_shuttle</i>
          </a>
    </div>*/}
      </div>
    );
  }
}
export default FilterByTags;
