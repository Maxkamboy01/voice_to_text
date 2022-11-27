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
  const [currentTestLink, setCurrentTestLink] = useState("");

  const closemainSideBar = () => {
    if (mainsidebarOpen) {
      setmainsidebarOpen(false);
    } else {
    }
  };

  return (
    <MainPagestyle /* onSwipe={() => setmainsidebarOpen(true)} */>
      <BrowserRouter>
        <Navbar
          setLogin={props.setLogin}
          sidebarstate={sidebarOpen}
          sidebarsetstate={setsidebarOpen}
          mainsidebarOpen={mainsidebarOpen}
          setmainsidebarOpen={setmainsidebarOpen}
        />

        <Mainsidebarstyle ismainOpen={mainsidebarOpen}>
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
              <Link onClick={() => props.setLogin(false)}>
                <LogoutIcon />
                <h2>Chiqish</h2>
              </Link>
            </li>
          </ul>
        </Mainsidebarstyle>
        <SidebarStyle
          onBlur={() => setmainsidebarOpen(false)}
          isOpen={sidebarOpen}
        >
          <li className="lesson_info">
            <h2> Lesson {"1"}</h2>
            <h3>Theme: {"Hello!"}</h3>
          </li>
          <li onClick={() => setCurrentTestLink("greetingtest")}>
            {/* {id} */}1. {"Greating!"}
          </li>
          <li onClick={() => setCurrentTestLink("videotest")}>
            {/* {id} */}2. {"Video!"}
          </li>
          <li onClick={() => setCurrentTestLink("readingtest")}>
            {/* {id} */}3. {"Reading!"}
          </li>
          <li onClick={() => setCurrentTestLink("matchingtest")}>
            {/* {id} */}4. {"Matching!"}
          </li>
          <li onClick={() => setCurrentTestLink("numbertest")}>
            {/* {id} */}5. {"Numbers!"}
          </li>
          <li onClick={() => setCurrentTestLink("enterwordstest")}>
            {/* {id} */}6. {"Enter words!"}
          </li>
          <li onClick={() => setCurrentTestLink("greeting")}>
            {/* {id} */}7. {"Others!"}
          </li>
          <li>
            <Link to="/">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmins="http://www.w3.org/2000/svg"
              >
                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
              </svg>
            </Link>
          </li>
        </SidebarStyle>

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                closemainSideBar={closemainSideBar}
                ismainOpen={mainsidebarOpen}
                isOpen={sidebarOpen}
                closeSideBar={setsidebarOpen}
              />
            }
          />
          <Route
            path="/helppage"
            element={
              <Helppage
                closemainSideBar={closemainSideBar}
                ismainOpen={mainsidebarOpen}
                isOpen={sidebarOpen}
                closeSideBar={setsidebarOpen}
              />
            }
          />
          <Route
            path="/contentspage"
            element={
              <ContentsPage
                closemainSideBar={closemainSideBar}
                ismainOpen={mainsidebarOpen}
                isOpen={sidebarOpen}
                closeSideBar={setsidebarOpen}
              />
            }
          />
          <Route
            path="/authorspage"
            element={
              <AuthorPage
                closemainSideBar={closemainSideBar}
                ismainOpen={mainsidebarOpen}
                isOpen={sidebarOpen}
                closeSideBar={setsidebarOpen}
              />
            }
          />
          <Route
            path="/settingspage"
            element={
              <SettingsPage
                closemainSideBar={closemainSideBar}
                ismainOpen={mainsidebarOpen}
                isOpen={sidebarOpen}
                closeSideBar={setsidebarOpen}
              />
            }
          />
          <Route
            path="/testspage"
            element={
              <TestsPage
                currenttestLink={currentTestLink}
                closemainSideBar={closemainSideBar}
                ismainOpen={mainsidebarOpen}
                isOpen={sidebarOpen}
                closeSideBar={setsidebarOpen}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </MainPagestyle>
  );
}

export default MainPage;
