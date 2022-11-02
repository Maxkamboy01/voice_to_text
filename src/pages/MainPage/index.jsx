import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPagestyle, Mainsidebarstyle, SidebarStyle } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";
// PAGES
import AuthorPage from "../AuthorPage";
import ContentsPage from "../ContentsPage";
import Helppage from "../HelpPage";
import HomePage from "../HomePage/index";
import SettingsPage from "../SettingsPage";
// PAGES
// COMPONENTS
import Navbar from "../../components/Navbar/index";
import TestsPage from "../TestsPage/index";
// COMPONENTS

// ICONS
import { ReactComponent as HomeIcon } from "../../assets/home_icon.svg";
import { ReactComponent as HelpIcon } from "../../assets/help_icon.svg";
import { ReactComponent as ContentsIcon } from "../../assets/contents_icon.svg";
import { ReactComponent as AuthorsIcon } from "../../assets/authors_icon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/settings.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout_icon.svg";
// ICONS

function MainPage(props) {
  const [mainsidebarOpen, setmainsidebarOpen] = useState(false);
  const [sidebarOpen, setsidebarOpen] = useState(false);

  return (
    <MainPagestyle>
      <BrowserRouter>
        <Navbar  setLogin={props.setLogin} sidebarstate={mainsidebarOpen} sidebarsetstate={setmainsidebarOpen} />

        <Mainsidebarstyle onMouseLeave={()=>setmainsidebarOpen(false)} ismainOpen={mainsidebarOpen}>
          <li>
            <Link to="">
              <HomeIcon />
              <h2>Bosh sahifa</h2>
            </Link>
          </li>
          <li>
            <Link to="/helppage">
              <HelpIcon />
              <h2>Yordam</h2>
            </Link>
          </li>
          <li>
            <Link to="/contentspage">
              <ContentsIcon />
              <h2>Mundarija</h2>
            </Link>
          </li>
          <li>
            <Link to="/authorspage">
              <AuthorsIcon />
              <h2>Muallif haqida</h2>
            </Link>
          </li>
          <ul className="bottomul">
            <li>
              <Link to="/settingspage">
                <SettingsIcon />
                <h2>Sozlamalar</h2>
              </Link>
            </li>
            <li>
              <Link onClick={()=>props.setLogin(false)}>
                <LogoutIcon />
                <h2 >Chiqish</h2>
              </Link>
            </li>
          </ul>
        </Mainsidebarstyle>
        <SidebarStyle isOpen={sidebarOpen}>
          <li className="lesson_info">
            <h2> Lesson {"1"}</h2>
            <h3>Theme: {"Hello!"}</h3>
          </li>
          <li>
            <Link to="/testspage">
              {/* {id} */}1. {"Greating"}
            </Link>
          </li>
          <li>
            <Link to="/testspage">
              {/* {id} */}2. {"Meeting"}
            </Link>
          </li>
          <li>
            <Link to="/testspage">
              {/* {id} */}3. {"Task1"}
            </Link>
          </li>
          <li>
            <Link to="/testspage">
              {/* {id} */}4. {"Greating"}
            </Link>
          </li>
          <li>
            <Link to="/testspage">
              {/* {id} */}5. {"Greating"}
            </Link>
          </li>
        </SidebarStyle>

        <Routes>
          <Route
            path="/"
            element={
              <HomePage ismainOpen={mainsidebarOpen} isOpen={sidebarOpen} />
            }
          />
          <Route
            path="/helppage"
            element={
              <Helppage ismainOpen={mainsidebarOpen} isOpen={sidebarOpen} />
            }
          />
          <Route
            path="/contentspage"
            element={
              <ContentsPage ismainOpen={mainsidebarOpen} isOpen={sidebarOpen} />
            }
          />
          <Route
            path="/authorspage"
            element={
              <AuthorPage ismainOpen={mainsidebarOpen} isOpen={sidebarOpen} />
            }
          />
          <Route
            path="/settingspage"
            element={
              <SettingsPage ismainOpen={mainsidebarOpen} isOpen={sidebarOpen} />
            }
          />
          <Route
            path="/testspage"
            element={
              <TestsPage ismainOpen={mainsidebarOpen} isOpen={sidebarOpen} />
            }
          />
        </Routes>
      </BrowserRouter>
    </MainPagestyle>
  );
}

export default MainPage;
