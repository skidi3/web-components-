import React from "react";
import Card from "./Card";
import CardDetails from "./CardDetails";
import Filters from "./Filters";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      allData: [],
      filteredData: [],
      isLoading: true,
      isFilter: "0",
      filter: {},
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
    if (this.state.isFilter) {
      axios
        .get("http://localhost:8089/api/list")
        .then((response) => {
          this.state.filteredData.push(response.data);
          //this.setState({ isLoading: false });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    //Overwrites card-data if filter-data is present.
    if (this.state.filteredData.length === 0) {
      //this.setState({ cardData: [...this.state.allData] });
      this.state.cardData.push(this.state.allData);
    } else {
      //this.setState({ cardData: this.state.filteredData });
      this.state.cardData.push(this.state.filteredData);
    }
  }
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
                      <Card
                        {...props}
                        data={this.state.cardData[0]}

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
