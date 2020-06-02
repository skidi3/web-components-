import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="form">
        <div className="form-title">
          <h2>Login</h2>
        </div>
        <br />
        <br />
        <div className="form-input">
          <div class="group">
            <input type="text" required />
            <span class="highlight" />
            <span class="bar" />
            <label>Enter Email ID</label>
          </div>

          <div class="group">
            <input type="text" required />
            <span class="highlight" />
            <span class="bar" />
            <label>Enter Password</label>
          </div>
          <button name="login" placeholder="Login">
            LOGIN
          </button>
          <br />
          <p href="#">Forgot your Password?</p>
        </div>
        <br />
        <br />
        <div className="line">
          <p>
            <span>Or login using</span>
          </p>
        </div>
        <div id="social">
          <div className="facebook sm-margin">
            <a class="facebookBtn smGlobalBtn" href="#"></a>
            <b href="#">Facebook</b>
          </div>
          <div className="google sm-margin">
            <a class="googleplusBtn smGlobalBtn" href="#"></a>
            <b href="#">Google</b>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
