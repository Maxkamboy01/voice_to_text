import React from "react";
import { PasswordStyle } from "./style";

function Password() {
  return (
    <PasswordStyle>
      <h2 className="title">Change Password of Account</h2>
      <div className="inputs">
        <label htmlFor="currentpass">Your currently password:</label>
        <input
          type="password"
          name="currentpass"
          id="currentpass"
          placeholder="current password"
        />
        <label htmlFor="newpass">Your new password:</label>
        <input
          type="password"
          name="newpass"
          id="newpass"
          placeholder="new password"
        />
        <label htmlFor="newpassrepeat">Repeat your new password:</label>
        <input
          type="password"
          name="newpassrepeat"
          id="newpassrepeat"
          placeholder="repeat password"
        />
      </div>
      <div className="buttons">
          <button className="cancel_btn">Cancel</button>
          <button className="save_btn">Save</button>
        </div>
    </PasswordStyle>
  );
}

export default Password;
