import React, { Component } from "react";
import M from "materialize-css";

export default class ListingDetail extends Component {
  state = {
    carddetails: [],
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    if (!id) {
      return;
    }

    fetch(
      `` //Link for API(search according to id) ex. https://api.themoviedb.org/3/movie/${id}?api_key=81f382d33088c6d52099a62eab51d967&language=en-US
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          carddetails: data,
        })
      );

    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".slider");
      var options = { indicators: true, height: 400, interval: 2000 };
      var instances = M.Slider.init(elems, options);
    });
    var el = document.querySelectorAll("tabs");
    var options = { duration: 400 };
    var instance = M.Tabs.init(el, options);
  }
  render() {
    const { carddetails } = this.state;
    return (
      <div className="listcontainer">
        {console.log(this.props)}
        {console.log(carddetails)}
        <div id="topsection" className="pgdetail-header">
          <div className="section1">
            <h1></h1>
            <h6>Rent/Bed</h6>
            <h5>Rs 8500 onwards</h5>
          </div>
          <div className="section2">
            <div className="type">For Girls</div>
            <h5>Home Stay Pg</h5>
            <h6>Occupancy Type: Double </h6>
          </div>
          <div className="contact-view ">
            <a className="waves-effect red lighten-2  btn">Contact Owner</a>
            <div id="map">
              <img src="images/location.png" />
              <h6>View on Map</h6>
            </div>
          </div>
        </div>

        <div className="pgdetails_middle">
          <ul className="tabs ">
            <li className="tab ">
              <a href="#test1">Property Details</a>
            </li>
            <li className="tab">
              <a href="#test2">Occupancy Options</a>
            </li>
            <li className="tab">
              <a href="#test3"> Amenities</a>
            </li>
            <li className="tab">
              <a href="#test4">Food and kitchen</a>
            </li>
            <li className="tab">
              <a href="#test5">Other Charges</a>
            </li>
            <li className="tab">
              <a href="#test6">House Rules</a>
            </li>
            <li className="tab">
              <a href="#test6">Nearby location</a>
            </li>
          </ul>
        </div>

        <div className="container" id="test1">
          <div className="slider">
            <ul className="slides ">
              <li className="sliderlist">
                <img src="images/ApartmentOne.jpg" />
                <div className="caption center-align"></div>
              </li>
              <li>
                <img src="images/Apartment2.jpg" />
              </li>
              <li>
                <img src="images/Apartment3.jpg" />
              </li>
              <li>
                <img src="images/Apartment9.jpg" />
              </li>
            </ul>
          </div>
          <div>
            <ul className="detail-info-group">
              <li className="detail-info-grid">
                <span>Deposit Amount</span>
                <h6>Rs 3000</h6>
              </li>
              <li className="detail-info-grid">
                <span>Notice Period</span>
                <h6>2 months</h6>
              </li>
              <li className="detail-info-grid">
                <span>AC Rooms</span>
                <h6>Yes</h6>
              </li>
            </ul>
          </div>
          <div className="contact-view">
            <a className="waves-effect red lighten-2  btn">Contact Owner</a>
          </div>
        </div>

        <div id="test2" className="container">
          <div className="detail-section-title">Occupancy Options</div>
          <div class="row">
            <div class="col s10 m4">
              <div className="card ">
                <div className="card-image">
                  <img src="images/Apartment2.jpg" />
                </div>
                <div className="card-content">
                  <h5>Single Room</h5>

                  <ul classname="occupancy-detail">
                    <li className="occupancy-list-item">
                      Rent
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      Rs 5000
                    </li>
                    <li className="occupancy-list-item">
                      Room Dimension &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10ft x 12ft
                    </li>
                    <li className="occupancy-list-item">
                      Rooms Available &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      2
                    </li>
                  </ul>

                  <p>
                    This is very near to Uttam nagar west metro station. It is a
                    corner property.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="test3" className="container">
          <div className="detail-section-title">Comman Area And Amenities</div>
          <ul className="amenties-list">
            <li className="amenties-list-item">
              <img src="images/wifi.png"></img>
              <h6>Wifi</h6>
            </li>
            <li className="amenties-list-item">
              <img src="images/Powerbackup.png"></img>
              <h6> Power Backup</h6>
            </li>
            <li className="amenties-list-item">
              <img src="images/parking.png"></img>
              <h6>2 Wheeler Parking</h6>
            </li>
            <li className="amenties-list-item">
              <img src="images/drink.png"></img>
              <h6>No Drinks</h6>
            </li>
            <li className="amenties-list-item">
              <img src="images/TV.png"></img>
              <h6>TV</h6>
            </li>
            <li className="amenties-list-item">
              <img src="images/WashingMachine.png"></img>
              <h6>Washing Machine</h6>
            </li>
            <li className="amenties-list-item">
              <img src="images/fingerprintaccess.png"></img>
              <h6>FingerPrint Access</h6>
            </li>

            <li className="amenties-list-item">
              <img src="images/Transport.png"></img>
              <h6>Transport Available</h6>
            </li>
          </ul>
        </div>

        <div id="test4" className="container">
          <div className="detail-section-title">Food And Kitchen</div>
          <ul className="amenties-list">
            <li className="amenties-list-item">
              <img src="images/Food.png"></img>
              <h6>Food Availability</h6>
            </li>

            <li className="amenties-list-item">
              <img src="images/kitchen.png"></img>
              <h6>Fridge</h6>
            </li>
          </ul>
        </div>
        <div id="test5" className="container">
          <div className="detail-section-title">Other Charges</div>
          <ul className="amenties-list">
            <li className="amenties-list-item">
              <img src="images/Deposit.png"></img>
              <h6>Deposit</h6>
            </li>
            <li className="amenties-list-item">
              <img src="images/Maintenance.png"></img>
              <h6>Maintanence</h6>
            </li>
          </ul>
        </div>

        <div id="test6" className="container">
          <div className="detail-section-title">House Rules</div>
          <ul className="amenties-list">
            <li className="amenties-list-item">
              <img src="images/Music.png"></img>
              <h6>Loud Music-No</h6>
            </li>
            <li className="amenties-list-item">
              <img src="images/Visitors.png"></img>
              <h6>Visitors Allowed-Yes</h6>
            </li>
          </ul>
        </div>

        <div id="test7" className="container">
          <div className="detail-section-title">Nearby Locations</div>
          <ul className="amenties-list">
            <li className="amenties-list-item">
              <h6 className="nearby-item">Koramangala Indoor stadium</h6>
              <h6>1.3 km away </h6>
            </li>
            <li className="amenties-list-item">
              <h6 className="nearby-item">IT Park </h6>
              <h6>3 km away </h6>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
