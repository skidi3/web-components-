import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class FilterByTags extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".collapsible");
      var instances = M.Collapsible.init(elems, {});
    });
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".tooltipped");
      var instances = M.Tooltip.init(elems, {});
    });
  }
  render() {
    return (
      <div>
        <ul class="collapsible">
          <li>
            <div class="collapsible-header">
              <a>
                <i class="material-icons">arrow_drop_down</i>
              </a>
              <a> Amenities</a>
            </div>
            <div class="collapsible-body">
              <a
                class="waves-effect waves-light btn-large margin tooltipped"
                data-position="top"
                data-tooltip="Cab"
              >
                <i class="material-icons margin  medium">airport_shuttle</i>
              </a>
              <a
                class="waves-effect waves-light btn-large margin tooltipped"
                data-position="top"
                data-tooltip="Wifi"
              >
                <i class="material-icons margin  medium">network_wifi</i>
              </a>
              <a
                class="waves-effect waves-light btn-large margin tooltipped"
                data-position="top"
                data-tooltip="Store"
              >
                <i class="material-icons margin  medium">store</i>
              </a>
              <a
                class="waves-effect waves-light btn-large margin tooltipped"
                data-position="top"
                data-tooltip="Furniture"
              >
                <i class="material-icons margin  medium">weekend</i>
              </a>
              <a
                class="waves-effect waves-light btn-large margin tooltipped"
                data-position="top"
                data-tooltip="Hospital"
              >
                <i class="material-icons margin  medium">local_hospital</i>
              </a>
              <a
                class="waves-effect waves-light btn-large margin tooltipped"
                data-position="top"
                data-tooltip="Laundry"
              >
                <i class="material-icons margin  medium">
                  local_laundry_service
                </i>
              </a>
              <a
                class="waves-effect waves-light btn-large margin tooltipped"
                data-position="top"
                data-tooltip="CCTV"
              >
                <i class="material-icons margin  medium">camera</i>
              </a>
              <a
                class="waves-effect waves-light btn-large margin tooltipped"
                data-position="top"
                data-tooltip="AC"
              >
                <i class="material-icons margin  medium">ac_unit</i>
              </a>
              <a
                class="waves-effect waves-light btn-large margin tooltipped"
                data-position="top"
                data-tooltip="Shuttle"
              >
                <i class="material-icons margin  medium">airport_shuttle</i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default FilterByTags;
