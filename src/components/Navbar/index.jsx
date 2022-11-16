import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarStyle, ProfileStyles } from "./style";
// IMG
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../../assets/Frame 18.png";
import Logo from "../../assets/logo.png";
// IMG

function Navbar({
  sidebarstate,
  sidebarsetstate,
  setLogin,
  mainsidebarOpen,
  setmainsidebarOpen,
}) {
  const [profileOpen, setprofileOpen] = useState(false);

  const location = useLocation();
  const sidebarHandleclick = () => {
    if (
      location.pathname === "/testspage" ||
      location.pathname === "/testspage1" ||
      location.pathname === "/testspage2" ||
      location.pathname === "/testspage3" ||
      location.pathname === "/testspage4" ||
      location.pathname === "/testspage5" ||
      location.pathname === "/testspage6" ||
      location.pathname === "/testspage7" ||
      location.pathname === "/testspage8"
    ) {
      if (sidebarstate) {
        sidebarsetstate(false);
      } else {
        sidebarsetstate(true);
      }
    } else {
      if (mainsidebarOpen) {
        setmainsidebarOpen(false);
      } else {
        setmainsidebarOpen(true);
      }
    }
  };

  const profileHandleclick = () => {
    if (profileOpen) {
      setprofileOpen(false);
    } else {
      setprofileOpen(true);
    }
    console.log(profileOpen);
  };
  return (
    <NavbarStyle className="navbar">
      <AiOutlineMenu
        onClick={() => sidebarHandleclick()}
        className="sidebar_btn"
      />
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="profile">
        <img
          className="avatar_img"
          onClick={profileHandleclick}
          src={Avatar}
          alt=""
        />
        <ProfileStyles
          onBlur={() => setmainsidebarOpen(false)}
          onMouseLeave={() => setprofileOpen(false)}
          className="profile_menu"
          profOpened={profileOpen}
        >
          <h2 className="menu_header">
            Profile <br />
            __________
          </h2>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/settingspage">settings</Link>
            </li>
            <li>
              <Link to="/helppage">support</Link>
            </li>
            <li>
              <Link to="/propage">get pro</Link>
            </li>
            <li>
              <Link onClick={() => setLogin(false)}>log out</Link>
            </li>
          </ul>
        </ProfileStyles>
      </div>
    </NavbarStyle>
  );
}

export default Navbar;
