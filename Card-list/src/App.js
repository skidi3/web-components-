import React from "react";
import Card from "./Card";
import Loadable from "react-loadable";
import CardDetails from "./CardDetails";
import Filters from "./Filters";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import image4 from "./assets/images/image4.jpg";
import axios from "axios";
/*const data1 = [
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
]; */
const LoadableCard = Loadable({
  loader: () => import("./Card"),
  loading() {
    return <div>Loading...</div>;
  },
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      allData: [],
      filteredData: [],
      isLoading: true,
    };
  }
  componentWillMount() {
    axios
      .get("http://localhost:8008/api/all")
      .then((response) => {
        this.state.allData.push(response.data);
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });

    //Overwrites card-data if filter-data is present.
    if (this.state.filteredData.length === 0) {
      //this.setState({ cardData: [...this.state.allData] });
      this.state.cardData.push(this.state.allData);
    } else {
      //this.setState({ cardData: this.state.filteredData });
      this.state.cardData.push(this.state.filteredData);
    }

    // Change page
  }
  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };
  render() {
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
                <Filters />
              </div>
              <div className="card-container">
                <Router>
                  <Route
                    path="/list"
                    exact
                    render={(props) => (
                      <LoadableCard
                        {...props}
                        data={this.state.cardData[0]}
                        key={this.state.cardData[0].id}
                        //dataHandler={this.handleData}
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
