import React from "react";
import Previews from "../dragndrope";
import { PersonalInfoStyle } from "./style";
import { ReactComponent as Camera } from "../../assets/camera.svg";

function PersonalInfo() {
  return (
    <PersonalInfoStyle>
      <h2 className="title">Personal Information</h2>
      <div className="details_box">
        <div className="foto_name_box">
          {/* <Previews /> */}
          <div className="image_upload_box">
            <Camera />
          </div>
          <div className="name_surname">
            <label htmlFor="name">Your name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className=" input name_input"
              placeholder="ismingiz"
            />
            <label htmlFor="surname">Your surname:</label>
            <input
              type="text"
              id="surname"
              name="surname"
              className="input surname_input"
              placeholder="familiyangiz"
            />
          </div>
        </div>
        <div className="contactdetails_box">
          <label htmlFor="email">Your gmail:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="input email"
            placeholder="emailingiz@gmail.com"
          />
          <div className="phonenumber">
            <div className="phone_input">
              <label htmlFor="phonenumber">Your phone number: (optional)</label>
              <input
                type="tel"
                name="phonenumber"
                id="phonenumber"
                className="phonenumber"
                placeholder="+998(99)999-99-99"
              />
            </div>
            <button className="sendnumber">Send</button>
          </div>
        </div>
        <div className="buttons">
          <button className="cancel_btn">Cancel</button>
          <button className="save_btn">Save</button>
        </div>
      </div>
    </PersonalInfoStyle>
  );
}

export default PersonalInfo;
