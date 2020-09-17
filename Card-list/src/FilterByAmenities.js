import React, { Component } from "react";
import M from "materialize-css";
import $ from "jquery";

class FilterByAmenities extends Component {
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
          <select
            id="amenities"
            multiple
            onChange={this.props.amenitiesHandler}
          >
            <option type="select-multiple" name="ac" value="ac">
              AC
            </option>
            <option
              type="select-multiple"
              name="washingmachine"
              value="washingmachine"
            >
              Washing Machine
            </option>
            <option type="select-multiple" name="kitchen" value="kitchen">
              Kitchen
            </option>
            <option type="select-multiple" name="fridge" value="fridge">
              Fridge
            </option>
            <option type="select-multiple" name="wifi" value="wifi">
              WiFi
            </option>
            <option type="select-multiple" name="furniture" value="furniture">
              Furniture
            </option>
            <option type="select-multiple" name="laundry" value="laundry">
              Laundry
            </option>
            <option type="select-multiple" name="cctv" value="cctv">
              CCTV
            </option>
            <option type="select-multiple" name="cab" value="cab">
              Cabs
            </option>
            <option type="select-multiple" name="store" value="store">
              Store
            </option>
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
export default FilterByAmenities;
