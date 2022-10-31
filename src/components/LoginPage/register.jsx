import React from "react";
import { ReactComponent as LoginImg } from "../../assets/loginImg.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
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
              <label htmlFor="password">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="email"
                placeholder="email"
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
              <button className="form_btn">Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
