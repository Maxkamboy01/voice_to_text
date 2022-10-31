import React from "react";
import { useState } from "react";
import { SettingsPageStyle } from "./style";
import PersonalInfo from "../../components/personalinfo";
import Password from "../../components/password/index";
import Linkedaccounts from "../../components/linkedaccounts/index";
import SettingLang from "../../components/settinglang/index";
import { ReactComponent as Arrowright } from "../../assets/rightarrow_icon.svg";

function SettingsPage({ isOpen, ismainOpen }) {
  const [routerpage, setRouterpage] = useState("");

  let page = <Password />;
  const settingpage = () => {
  if (routerpage === "personal information") {
    return (page = <PersonalInfo />);
  } else if (routerpage === "password") {
    return (page = <Password />);
  } else if (routerpage === "linked accounts") {
    return (page = <Linkedaccounts />);
  } else if (routerpage === "setting languages") {
    return (page = <SettingLang />);
  } else {
    return (page = <PersonalInfo />);
  }
  }
  ;
  settingpage()

  return (
    <SettingsPageStyle isOpen={isOpen} ismainOpen={ismainOpen}>
      <div className="container">
        <div className="title main_title">
          <h1 onClick={() => setRouterpage("personal information")}>
            Settings
          </h1>{" "}
          {!routerpage ? "" : <Arrowright />} <span>{routerpage}</span>
        </div>
        <div className="account_settings">
          <ul className="account_settings_menu">
            <h2 className="account_settings_menu_title">Account Setting</h2>
            <li onClick={() => setRouterpage("personal information")}>
              Personal information
            </li>
            <li onClick={() => setRouterpage("password")}>Password</li>
            <li onClick={() => setRouterpage("linked accounts")}>
              Linked accounts
            </li>
            <li onClick={() => setRouterpage("setting languages")}>
              Setting Languages
            </li>
          </ul>
          <div className="routerpage">{page}</div>
        </div>
      </div>
    </SettingsPageStyle>
  );
}

export default SettingsPage;
