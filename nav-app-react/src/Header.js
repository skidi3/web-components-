import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <i class="fa fa-cubes fa-2x nav-title"></i>
          <div class="nav-title">CoAcco</div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="#" target="_blank">
            Home
          </a>
          <a href="#" target="_blank">
            About
          </a>
          <a href="#" target="_blank">
            Contact us
          </a>
          <a href="#" target="_blank">
            <i class="fa fa-user fa-lg"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
