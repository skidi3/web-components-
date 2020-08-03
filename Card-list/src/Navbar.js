import React from "react";
import M from "materialize-css";

class Navbar extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <div class="nav-logo">
              <a href="#" class="brand-logo">
                CoAcco
              </a>
            </div>
            <div class="nav-lists">
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
