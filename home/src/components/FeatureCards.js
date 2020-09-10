import React, { Component } from "react";
import PropTypes from "prop-types";

class FeatureCards extends Component {
  componentDidMount() {}

  render() {
    return (
      <div class="sec-3">
        <div class="sec-3-container">
          <div class="grid">
            <div class="grid__item">
              <article class="pantone-card pantone-card--mischka">
                <div class="pantone-card__footer">
                  <h1 class="pantone-card__name">Dummy Heading</h1>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </article>
            </div>
            <div class="grid__item">
              <article class="pantone-card pantone-card--vanilla-ice">
                <div class="pantone-card__footer">
                  <h1 class="pantone-card__name">Dummy Heading</h1>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </article>
            </div>
            <div class="grid__item">
              <article class="pantone-card pantone-card--mischka">
                <div class="pantone-card__footer">
                  <h1 class="pantone-card__name">Dummy Heading</h1>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </article>
            </div>
            <div class="grid__item">
              <article class="pantone-card pantone-card--vanilla-ice">
                <div class="pantone-card__footer">
                  <h1 class="pantone-card__name">Dummy Heading</h1>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureCards;
