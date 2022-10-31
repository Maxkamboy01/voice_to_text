import React from "react";
import { ReactComponent as LoginImg } from "../../assets/loginImg.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {


    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <LoginImg />
          </div>
          <div className="form">
            <div className="form_group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="username"
                placeholder="username"
              />
            </div>
            <div className="form_group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="password"
                placeholder="password"
              />
            </div>
            <div className="footer">
              <button className="form_btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
