import React from "react";
import { NextTestBtnStyle, TestStyle } from "./style";

// TESTS
import Greetingtest from "../../components/tests/Greetiingtest/index";
import VideoTest from "../../components/tests/VideoTest";
import ReadingTest from "../../components/tests/ReadingTest";
import MatchingTest from "../../components/tests/MatchingTest";
import NumberTest from "../../components/tests/NumberTest";
import EnterWordsTest from "../../components/tests/EnterWordsTest";
// TESTS

function TestsPage({
  isOpen,
  ismainOpen,
  closemainSideBar,
  closeSideBar,
  currenttestLink,
}) {
  const closeLeftBars = () => {
    closemainSideBar(false);
    closeSideBar(false);
  };

  let currenttest = <Greetingtest />;

  const SettingCurrentTest = () => {
    if (currenttestLink === "greetingtest") {
      return (currenttest = <Greetingtest />);
    } else if (currenttestLink === "videotest") {
      return (currenttest = <VideoTest />);
    } else if (currenttestLink === "readingtest") {
      return (currenttest = <ReadingTest />);
    } else if (currenttestLink === "matchingtest") {
      return (currenttest = <MatchingTest />);
    } else if (currenttestLink === "numbertest") {
      return (currenttest = <NumberTest />);
    } else if (currenttestLink === "enterwordstest") {
      return (currenttest = <EnterWordsTest />);
    }
  };
  SettingCurrentTest();
  return (
    <TestStyle
      onClick={() => closeLeftBars()}
      isOpen={isOpen}
      ismainOpen={ismainOpen}
    >
      {currenttest}
      {/* <NextTestBtnStyle>Keyingisi</NextTestBtnStyle> */}
    </TestStyle>
  );
}

export default TestsPage;
