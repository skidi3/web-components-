import React from "react";
import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import image4 from "./assets/images/image4.jpg";
import image5 from "./assets/images/image5.jpg";
import image6 from "./assets/images/image6.jpg";
import image7 from "./assets/images/image7.jpg";
//Some dummy data
const data = [
  {
    title: "The Villa, Murano Hill, Manhattan, NY",
    address: "The Villa, Murano Hill, Manhattan, NY",
    price: "$110000",
    image: image1,
    rating: 4,
    reviews: 1000,
  },
  {
    title: "Santa Ynez, Santa Barbara County, CA",
    address: "Santa Ynez, Santa Barbara County, CA",
    price: "$280000",
    image: image2,
    rating: 4,
    reviews: 2000,
  },
  {
    title: "La Grange cro, Stanislaus County, USA",
    address: "La Grange cro, Stanislaus County, USA",
    price: "$325000",
    image: image3,
    rating: 5,
    reviews: 3000,
  },
  {
    title: "Suite Cardinal La Suite, Green Bay, WI",
    address: "Suite Cardinal La Suite, Green Bay, WI",
    price: "$470000",
    image: image4,
    rating: 4,
    reviews: 4000,
  },
];

class Card extends React.Component {
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
          {data.map(({ title, price, image, rating, reviews }) => (
            <div class="wrapper">
              <div class="col s12 m6">
                <div class="card horizontal small">
                  <div class="card-image">
                    <img src={image} />
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                      <div class="card-left">
                        <div class="card-address">
                          <b>
                            <h6 class="align-left">{title}</h6>
                          </b>
                        </div>
                        <div class="review-component valign-wrapper">
                          <a class="valign-wrapper waves-effect waves-light btn-small card-rating">
                            <a class="rating-text">{rating}</a>
                            <i class="material-icons small left">star</i>
                          </a>
                          <a class="total-reviews margin-lg">
                            <p>({reviews} Ratings)</p>
                          </a>
                        </div>
                      </div>
                      <div class="card-right">
                        <div class="card-price">
                          <b>
                            <h6 class="align-right">{price}</h6>
                          </b>
                        </div>
                      </div>
                    </div>
                    <div class="card-action ">
                      <div class="amenities">
                        <i class="material-icons margin ">airport_shuttle</i>
                        <i class="material-icons margin ">network_wifi</i>
                        <i class="material-icons margin ">store</i>
                        <i class="material-icons margin ">weekend</i>
                      </div>
                      <div class="favourites valign-wrapper">
                        <button
                          class="btn waves-effect waves-light indigo"
                          type="submit"
                          name="action"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
