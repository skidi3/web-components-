import React from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import Tabs from "./Tabs";

//Some dummy data

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDetails: this.props.data,
    };
    console.log("props:", this.props.data);
    console.log("state:", this.state.cardDetails[0]);
    this.setCard();
  }
  setCard = () => {
    var el = document.querySelectorAll(".tabs");
    var instance = M.Tabs.init(el, {});
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".fixed-action-btn");
      var instances = M.FloatingActionButton.init(elems, {
        toolbarEnabled: true,
      });
    });
  };

  render() {
    return (
      <div class="main">
        <div class="show-on-small hide-on-med-and-up">
          {this.state.cardDetails[0].map(
            ({ title, price, image, rating, reviews }) => (
              <div class="wrapper">
                <div class="row">
                  <div class="col s12 m6 ">
                    <div class="card">
                      <div class="card-image">
                        <img src={image} />
                      </div>

                      <div class="card-stacked">
                        <div class="card-content">
                          <div class="card-address">
                            <h6 class="align-left">{title}</h6>
                          </div>
                          <div class="card-price">
                            <h6 class="align-left">{price}</h6>
                          </div>
                        </div>
                        <div class="card-action ">
                          <div class="amenities">
                            <i class=" material-icons margin ">
                              airport_shuttle
                            </i>
                            <i class="material-icons margin ">network_wifi</i>
                            <i class="material-icons margin ">store</i>
                            <i class="material-icons margin ">weekend</i>
                          </div>
                          <div class="favourites valign-wrapper">
                            <button
                              class="btn waves-effect waves-light"
                              type="submit"
                              name="action"
                            >
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div class="hide-on-small-only">
          {this.state.cardDetails[0].map(
            ({
              id,
              companyName,
              address,
              price,
              newprice,
              image,
              rating,
              reviews,
              tab1,
              tab2,
            }) => (
              <div class="wrapper">
                <div class="col s12 m6">
                  <div class="card horizontal small">
                    <div class="card-image">
                      <img src={image} />
                      <div class="pos-heart-favorite">
                        <div class="heart-favorite">
                          <i class="heart-favorite-icon"></i>
                          <span class="heart-favorite-span">liked!</span>
                        </div>
                      </div>
                    </div>

                    <div class="card-stacked">
                      <div class="card-content">
                        <div class="card-left">
                          <div class="card-title">
                            <h5 class="align-left">{companyName}</h5>
                          </div>
                          <div class="card-address">
                            <p class="align-left truncate">{address}</p>
                          </div>
                          <br />
                          <div class="review-component valign-wrapper">
                            <a class="valign-wrapper waves-effect waves-light btn-small card-rating">
                              <p class="rating-text">{rating}</p>
                              <i class="material-icons small left">star</i>
                            </a>
                            <a class="total-reviews margin-lg">
                              <a>({reviews} Ratings)</a>
                            </a>
                          </div>
                          <div class="tabs-wrapper">
                            <Tabs area1={tab1} area2={tab2} />
                          </div>
                        </div>
                        <div class="card-right">
                          <div class="card-price">
                            <div class="style-1">
                              <del>
                                <span class="align-right amount">{price}</span>
                              </del>
                              <ins>
                                <span class="align-right amount">
                                  {newprice}
                                </span>
                              </ins>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card-action ">
                        <div class="collection">
                          <a href="#!" class="collection-item">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                            <a>IT Park 0.5KM</a>
                          </a>
                          <a href="#!" class="collection-item">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                            <a>Hospital 5KM</a>
                          </a>
                          <a href="#!" class="collection-item">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                            <a>Bus Stop 1KM</a>
                          </a>
                        </div>
                        <div class="details valign-wrapper">
                          <button
                            class="valign-wrapper  btn waves-effect waves-light indigo"
                            type="submit"
                            name="action"
                          >
                            {/*<a href={`/list/${id}`} class="btn-txt">
                              Details
                            </a>*/}
                            <Link to={`/list/${id}`}>
                              <p>Details</p>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div class="pagination-wrapper">
          <ul class="pagination">
            <li class="disabled">
              <a href="#!">
                <i class="material-icons">chevron_left</i>
              </a>
            </li>
            <li class="active">
              <a href="#!">1</a>
            </li>
            <li class="waves-effect">
              <a href="#!">2</a>
            </li>
            <li class="waves-effect">
              <a href="#!">3</a>
            </li>
            <li class="waves-effect">
              <a href="#!">4</a>
            </li>
            <li class="waves-effect">
              <a href="#!">5</a>
            </li>
            <li class="waves-effect">
              <a href="#!">
                <i class="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
