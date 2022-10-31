import React from "react";
import { LinkedaccStyle } from "./style";
// IMG
import GoogleIcon from "../../assets/google_icon.png";
import FacebookIcon from "../../assets/facebook_icon.png";
import TwitterIcon from "../../assets/twitter.png";
import { ReactComponent as Connected } from "../../assets/connected.svg";
import { ReactComponent as DisConnected } from "../../assets/disconnected.svg";
// IMG

function Linkedaccounts() {
  return (
    <LinkedaccStyle>
      <h2 className="title">Linked Accounts</h2>
      <ul className="acc_list">
        <li>
          <div className="acc_icon">
            <img src={GoogleIcon} alt="" />
          </div>
          <p className="acc_text">
            <span className="acc_name">{"google"}</span>(
            <span className="acc_connection">{"connected"}</span>)
          </p>
          <div className="acc_con_discon_icon">
            <Connected />
          </div>
        </li>
        <li>
          <div className="acc_icon">
            <img src={FacebookIcon} alt="" />
          </div>
          <p className="acc_text">
            <span className="acc_name">{"facebook"}</span>(
            <span className="acc_connection">{"disconnected"}</span>)
          </p>
          <div className="acc_con_discon_icon">
            <DisConnected />
          </div>
        </li>
        <li>
          <div className="acc_icon">
            <img src={TwitterIcon} alt="" />
          </div>
          <p className="acc_text">
            <span className="acc_name">{"twitter"}</span>(
            <span className="acc_connection">{"disconnected"}</span>)
          </p>
          <div className="acc_con_discon_icon">
            <DisConnected />
          </div>
        </li>
      </ul>
      <div className="buttons">
        <button className="cancel_btn">Cancel</button>
        <button className="save_btn">Save</button>
      </div>
    </LinkedaccStyle>
  );
}

export default Linkedaccounts;
