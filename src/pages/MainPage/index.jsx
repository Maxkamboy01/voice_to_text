import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// PAGES
import AuthorPage from "../AuthorPage";
import ContentsPage from "../ContentsPage";
import Helppage from "../HelpPage";
import HomePage from "../HomePage/style";
import SettingsPage from "../SettingsPage";
// PAGES
// COMPONENTS
import Navbar from "../../components/Navbar/index";
import TestsPage from "../TestsPage/index";
// COMPONENTS

function MainPage() {
  return (
    <BrowserRouter>
      <Navbar  />
      <Routes>
        <Route path="/" element={<TestsPage />} />
        <Route path="/helppage" element={<Helppage />} />
        <Route path="/contentspage" element={<ContentsPage />} />
        <Route path="/authorpage" element={<AuthorPage />} />
        <Route path="/settingspage" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainPage;
