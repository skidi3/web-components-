import React from "react";
import $ from "jquery";
import image from "./assets/image1.jpg";
class Login extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("img").height($(".main-box").height());

      $(".to-signin").on("click", function () {
        $(this)
          .addClass("top-active-button")
          .siblings()
          .removeClass("top-active-button");
        $(".form-signup").slideUp(500);
        $(".form-signin").slideDown(500);
      });

      $(".to-signup").on("click", function () {
        $(this)
          .addClass("top-active-button")
          .siblings()
          .removeClass("top-active-button");
        $(".form-signin").slideUp(500);
        $(".form-signup").slideDown(500);
      });

      $(".to-signin-link").on("click", function () {
        $(".to-signin")
          .addClass("top-active-button")
          .siblings()
          .removeClass("top-active-button");
        $(".form-signup").slideUp(200);
        $(".form-signin").slideDown(200);
      });

      $(".to-signup-link").on("click", function () {
        $(".to-signup")
          .addClass("top-active-button")
          .siblings()
          .removeClass("top-active-button");
        $(".form-signin").slideUp(200);
        $(".form-signup").slideDown(200);
      });
    });
  }
  render() {
    return (
      <div class="wrapper">
        <div class="main-box">
          <div class="slider-cont">
            <div class="signup-slider">
              <div class="img-txt">
                <div class="img-layer">
                  <img src={image} />
                </div>
              </div>
            </div>
          </div>

          <div class="form-cont">
            <div class="top-buttons">
              <button class="to-signup top-active-button">Sign Up</button>
              <button class="to-signin">Sign In</button>
            </div>

            <div class="form form-signup">
              <form action="#">
                <lable>FULL NAME</lable>
                <input type="text" placeholder="Your full name" />
                <lable>E-MAIL</lable>
                <input type="email" placeholder="Your e-mail" />
                <lable>PASSWORD</lable>
                <input type="password" placeholder="Your password" />
                <p class="terms">
                  <input type="checkbox" class="margin-sm" />I accept the
                  <a href="#" class="lined-link margin-sm">
                    terms and conditions
                  </a>
                </p>
                <input type="submit" class="form-btn" value="Sign Up" />
              </form>
            </div>

            <div class="form form-signin">
              <form action="#">
                <lable>E-MAIL</lable>
                <input type="email" placeholder="Your e-mail" />
                <lable>PASSWORD</lable>
                <input type="password" placeholder="Your password" />
                <input type="submit" class="form-btn" value="Sign In" />
                <br />
              </form>
            </div>
          </div>
          <div class="clear-fix"></div>
        </div>
      </div>
    );
  }
}

export default Login;
