import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarStyle, SidebarStyle, ProfileStyles } from "./style";
// COMPONENTS
// COMPONENTS
// IMG
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../../assets/Frame 18.png";
import Logo from "../../assets/logo.png";
// IMG

function Navbar() {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const [profileOpen, setprofileOpen] = useState(false);
  const sidebarHandleclick = () => {
    if (sidebarOpen) {
      setsidebarOpen(false);
    } else {
      setsidebarOpen(true);
    }
    console.log(sidebarOpen);
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
    <>
      <NavbarStyle className="navbar">
        <AiOutlineMenu onClick={sidebarHandleclick} className="sidebar_btn" />
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
          <ProfileStyles className="profile_menu" profOpened={profileOpen}>
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
                <Link to="/">get pro</Link>
              </li>
              <li>
                <Link to="/">log out</Link>
              </li>
            </ul>
          </ProfileStyles>
        </div>
      </NavbarStyle>

      {/* SIDEBAR */}

      <SidebarStyle isOpen={sidebarOpen}>
        <li className="lesson_info">
          <h2> Lesson {"1"}</h2>
          <h3>Theme: {"Hello!"}</h3>
        </li>
        <li>
          <Link to="/next_test">
            {/* {id} */}1. {"Greating"}
          </Link>
        </li>
        <li>
          <Link to="/next_test">
            {/* {id} */}2. {"Meeting"}
          </Link>
        </li>
        <li>
          <Link to="/next_test">
            {/* {id} */}3. {"Task1"}
          </Link>
        </li>
        <li>
          <Link to="/next_test">
            {/* {id} */}4. {"Greating"}
          </Link>
        </li>
        <li>
          <Link to="/next_test">
            {/* {id} */}5. {"Greating"}
          </Link>
        </li>
      </SidebarStyle>
    </>
  );
}

export default Navbar;
