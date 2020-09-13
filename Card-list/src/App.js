import React from "react";
import Card from "./Card";
import CardDetails from "./CardDetails";
import Filters from "./Filters";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import image4 from "./assets/images/image4.jpg";
import axios from "axios";
const data1 = [
  {
    id: 1,
    title: "The Villa",
    address: "The Villa, Murano Hill, Manhattan, NY",
    price: "₹11000",
    newprice: "₹5000",
    image: image1,
    rating: 4,
    reviews: 1000,
    tab1: "#test1",
    tab2: "#test2",
  },
  {
    id: 2,
    title: "Santa Ynez",
    address: "Santa Ynez, Santa Barbara County, CA",
    price: "₹12000",
    newprice: "₹6000",
    image: image2,
    rating: 4,
    reviews: 2000,
    tab1: "#test3",
    tab2: "#test4",
  },
  {
    id: 3,
    title: "La Grange",
    address: "La Grange cro, Stanislaus County, USA",
    price: "₹15000",
    newprice: "₹10000",
    image: image3,
    rating: 5,
    reviews: 3000,
    tab1: "#test5",
    tab2: "#test6",
  },
  {
    id: 4,
    title: "Suite",
    address: "Suite Cardinal La Suite, Green Bay, WI",
    price: "₹24000",
    newprice: "₹12000",
    image: image4,
    rating: 4,
    reviews: 4000,
    tab1: "#test7",
    tab2: "#test8",
  },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      allData: [],
      filteredData: [],
    };
    this.handleData(); //this.getData();
  }

  getData = (e) => {
    axios
      .get("http://localhost:3000/getAllData")
      .then((response) => {
        //console.log(response.data);
        this.setState({
          allData: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:3000/getFilteredData")
      .then((response) => {
        //console.log(response.data);
        this.setState({
          filteredData: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //this.handleData();
  };

  //Overwrites card-data if filter-data is present.
  handleData = (e) => {
    if (this.state.filteredData.length === 0) {
      const allDataArray = [...data1]; //[...this.state.allData]
      this.state.cardData.push(allDataArray);
    } else {
      const filteredArray = [...this.state.filteredData];
      this.state.cardData.push(filteredArray);
    }
  };
  render() {
    return (
      <div>
        <div className="form-wrapper">
          <Router>
            <div className="filter-container">
              <Filters />
            </div>
            <div className="card-container">
              <Router>
                <Route
                  path="/list"
                  exact
                  render={(props) => (
                    <Card
                      {...props}
                      data={this.state.cardData}
                      dataHandler={this.handleData}
                    />
                  )}
                />
                <Route path="/list/:id" component={CardDetails} />
              </Router>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
