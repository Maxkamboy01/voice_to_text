import React from "react";
import { SettinglangStyle } from "./style";

function Settinglang() {
  return (
    <SettinglangStyle>
      <h2 className="title">Change Password of Account</h2>
      <div className="inputs">
        <label htmlFor="changelangselect">
          Language, which is comfortable for you
        </label>
        <select name="changelangselect" id="changelangselect">
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="uz">Uzbekcha</option>
        </select>
        <div className="buttons">
          <button className="cancel_btn">Cancel</button>
          <button className="save_btn">Save</button>
        </div>
      </div>
    </SettinglangStyle>
  );
}

export default Settinglang;
