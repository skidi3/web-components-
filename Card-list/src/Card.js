import React from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import Tabs from "./Tabs";
import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import image4 from "./assets/images/image4.jpg";

//Some dummy data
const data = [
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

class Card extends React.Component {
  componentDidMount() {
    var el = document.querySelectorAll(".tabs");
    var instance = M.Tabs.init(el, {});
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".fixed-action-btn");
      var instances = M.FloatingActionButton.init(elems, {
        toolbarEnabled: true,
      });
    });
    /*$(function () {
      $("i").click(function () {
        $("i,span").toggleClass("press", 1000);
      });
    });*/
  }
  render() {
    return (
      <div class="main">
        <div class="show-on-small hide-on-med-and-up">
          {data.map(({ title, price, image, rating, reviews }) => (
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
                          <i class=" material-icons margin ">airport_shuttle</i>
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
          ))}
        </div>
        <div class="hide-on-small-only">
          {data.map(
            ({
              id,
              title,
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
                            <h5 class="align-left">{title}</h5>
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
