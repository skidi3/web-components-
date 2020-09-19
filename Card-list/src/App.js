import React from "react";
import Card from "./Card";
import CardDetails from "./CardDetails";
import Filters from "./Filters";
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      cardData: [],
      allData: [],
      filteredData: [],
      isLoading: true,
      category: [],
      gender: "",
      min: "",
      max: "",
      rating: "",
      occupancy: [],
      amenities: [],
      isFilterDataPosted: false,
    };
    this.handleCategory = this.handleCategory.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.getCurrMaxData = this.getCurrMaxData.bind(this);
    this.getCurrMinData = this.getCurrMinData.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleOccupancy = this.handleOccupancy.bind(this);
    this.handleAmentiesChange = this.handleAmentiesChange.bind(this);
    this.getData = this.getData.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleFilterData = this.handleFilterData.bind(this);
    this.submitFilterData = this.submitFilterData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData = (e) => {
    console.log("getData function called successfully");
    axios
      .get("http://localhost:8008/api/all")
      .then((response) => {
        let tempArray = [];
        tempArray.push(response.data);
        console.log(tempArray, "temparray");
        this.setState({ allData: tempArray, cardData: tempArray }, () =>
          console.log(this.state.allData)
        );
        // this.state.cardData.push(this.state.allData);
        this.setState({ isLoading: false });
        console.log("All Data is being fetched", this.state.cardData);
      })
      .catch((error) => {
        console.log(error);
      });
    setTimeout(() => {
      this.handleData();
    }, 500);
  };
  handleData = () => {
    console.log(this.state.cardData);
    console.log("All data is pushed into cardData");
  };

  handleFilterData = (e) => {
    //console.log("updated filter data size:", this.state.filteredData[0]);
    if (this.state.filteredData[0].length > 0) {
      let tempArray = [];
      tempArray.push(this.state.filteredData[0]);
      this.setState({ cardData: tempArray });
      console.log("Filter Data is pushed into cardData");
    } else {
      console.log("No properties available with these filters!");
      this.getData();
    }
  };

  submitFilterData = (e) => {
    e.preventDefault();
    console.log("state new:", this.state);
    var filterData = {
      category: this.state.category,
      gender: this.state.gender,
      price: [this.state.min, this.state.max],
      rating: this.state.rating,
      occupancy: this.state.occupancy,
      amenities: this.state.amenities,
    };

    axios.post(`http://localhost:8008/api/list`, filterData).then((res) => {
      const newState = [];
      newState.push(res.data);
      console.log("posted!", newState, res);
      this.setState({ filteredData: newState, cardData: newState });
    });
    // setTimeout(() => {
    //   this.handleFilterData();
    // }, 500);
  };

  handleCategory = (event) => {
    let selected = [];
    const categoryInput = document.querySelectorAll(".by-category--filter");

    for (let i = 0; i < categoryInput.length; i++) {
      if (categoryInput[i].checked) {
        selected.push(categoryInput[i].value);
      }
    }

    this.setState({
      category: selected,
    });
  };

  handleGender = (e) => {
    this.setState({ gender: e.target.value });
  };

  handleRating = (e) => {
    this.setState({ rating: e.target.value });
  };

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

  handleOccupancy = (event) => {
    let selected = [];
    const occupancyInput = document.querySelectorAll(".by-occupancy--filter");
    for (let i = 0; i < occupancyInput.length; i++) {
      if (occupancyInput[i].checked) {
        selected.push(occupancyInput[i].value);
      }
    }
    this.setState({
      occupancy: selected,
    });
  };

  handleAmentiesChange = (event) => {
    var select = document.getElementById("amenities");
    var selected = [...select.selectedOptions].map((option) => option.value);

    this.setState({
      amenities: selected,
    });
  };

  render() {
    console.log("App js State:", this.state);

    return (
      <div>
        {this.state.isLoading && (
          <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-blue">
              <div class="circle-clipper center ">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        )}
        {!this.state.isLoading && (
          <div className="form-wrapper">
            <Router>
              <div className="filter-container">
                <Filters
                  handleFilterData={this.handleFilterData}
                  isFilterDataPosted={this.state.isFilterDataPosted}
                  categoryHandler={this.handleCategory}
                  genderHandler={this.handleGender}
                  priceHandler={this.getCurrMinData}
                  ratingHandler={this.handleRating}
                  occupancyHandler={this.handleOccupancy}
                  amenetiesHandler={this.handleAmentiesChange}
                  submitFilterData={this.submitFilterData}
                />
              </div>
              <div className="card-container">
                <Router>
                  <Route
                    path="/list"
                    exact
                    render={(props) => (
                      <Card
                        {...props}
                        data={this.state.cardData[0]}
                        key={this.state.key}
                      />
                    )}
                  />
                  <Route path="/list/:id" component={CardDetails} />
                </Router>
              </div>
            </Router>
          </div>
        )}
      </div>
    );
  }
}

export default App;
