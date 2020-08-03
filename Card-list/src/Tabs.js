import React from "react";
import M from "materialize-css";

class Tabs extends React.Component {
  render() {
    return (
      <div class="tabset">
        <input
          type="radio"
          name="tabset"
          id={this.props.area1}
          aria-controls="Services"
        />
        <label for={this.props.area1} class="tab-btn">
          <p>Services</p>
        </label>

        <input
          type="radio"
          name="tabset"
          id={this.props.area2}
          aria-controls="Amenities"
        />
        <label for={this.props.area2} class="tab-btn">
          <p>Amenities</p>
        </label>

        <div class="tab-panels">
          <section id="Services" class="tab-panel">
            <div class="services-tab">
              <i class="material-icons margin ">restaurant_menu</i>
              <i class="material-icons margin ">local_hospital</i>
              <i class="material-icons margin ">local_taxi</i>
              <i class="material-icons margin ">local_bar</i>
              <a class="margin">+15 more</a>
            </div>
          </section>
          <section id="Amenities" class="tab-panel">
            <div class="amenities-tab">
              <i class="material-icons margin ">airport_shuttle</i>
              <i class="material-icons margin ">network_wifi</i>
              <i class="material-icons margin ">local_laundry_service</i>
              <i class="material-icons margin ">smoke_free</i>
              <a class="margin">+10 more</a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Tabs;
