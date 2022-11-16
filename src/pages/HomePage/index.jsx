import React from "react";
import { useState } from "react";
import { ReactComponent as TitleOpening } from "../../assets/titleopening.svg";
import { ReactComponent as TitleClosing } from "../../assets/titleclosing.svg";
import { ReactComponent as LockedLesson } from "../../assets/locked_lesson.svg";
import { CourseLessons, HomePageStyle } from "./style";
import { Link } from "react-router-dom";

function HomePage({ isOpen, ismainOpen, closemainSideBar, closeSideBar }) {
  const [titleOpened, settitleOpened] = useState({
    beginner: true,
    elementary: false,
    preintermidiate: false,
    intermidiate: false,
    upperintermidiate: false,
    advanced: false,
    skills: false,
  });

  const closeLeftBars = () => {
    closemainSideBar(false);
    closeSideBar(false);
  };

  return (
    <HomePageStyle
      onClick={() => closeLeftBars()}
      isOpen={isOpen}
      ismainOpen={ismainOpen}
      istitleOpen={titleOpened}
    >
      <div className="container">
        <div className="title">Home</div>
        <div className="opened_parts">
          <h2 className="opened_text">Ochiq qismlar:</h2>
          <div className="opened_courses">
            <div className="courses">
              <div
                className="courses_title"
                onClick={() =>
                  settitleOpened({ beginner: !titleOpened.beginner })
                }
              >
                <h2 className="course_title">Beginner</h2>
                <div className="titleOpenIcon">
                  {titleOpened ? <TitleClosing /> : <TitleOpening />}
                </div>
              </div>
              <CourseLessons
                isOpen={titleOpened.beginner}
                className="course_lessons"
              >
                <li>
                  <Link to="/testspage">
                    <h2 className="lesson_theme">1. Theme: {"Hello!"}</h2>
                    <button className="continue_btn">davom ettirish</button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">2. Theme: {"Lorem!"}</h2>
                    <button className="continue_btn">davom ettirish</button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">3. Theme: {"Lorem!"}</h2>
                    <button className="continue_btn">boshlash</button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">4. Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">5.Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">6. Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
              </CourseLessons>
            </div>
          </div>
        </div>

        <div className="opened_parts closed_parts">
          <h2 className="opened_text">Yopiq qismlar:</h2>
          <div className="opened_courses">
            <div className="courses">
              <div
                className="courses_title"
                onClick={() =>
                  settitleOpened({ elementary: !titleOpened.elementary })
                }
              >
                <h2 className="course_title">Elementary</h2>
                <div className="titleOpenIcon">
                  {/* {titleOpened ? <TitleClosing /> : <TitleOpening />} */}
                  <LockedLesson />
                </div>
              </div>
              <CourseLessons
                isOpen={titleOpened.elementary}
                className="course_lessons"
              >
                <li>
                  <Link to="/testspage">
                    <h2 className="lesson_theme">1. Theme: {"Hello!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">2. Theme: {"Lorem!"}</h2>
                    <button className="continue_btn">
                      {" "}
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">3. Theme: {"Lorem!"}</h2>
                    <button className="continue_btn">
                      {" "}
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">4. Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">5.Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">6. Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
              </CourseLessons>
            </div>
            <div className="courses">
              <div
                className="courses_title"
                onClick={() =>
                  settitleOpened({
                    preintermidiate: !titleOpened.preintermidiate,
                  })
                }
              >
                <h2 className="course_title">Pre-Intermidiate</h2>
                <div className="titleOpenIcon">
                  {/* {titleOpened ? <TitleClosing /> : <TitleOpening />} */}
                  <LockedLesson />
                </div>
              </div>
              <CourseLessons
                isOpen={titleOpened.preintermidiate}
                className="course_lessons"
              >
                <li>
                  <Link to="/testspage">
                    <h2 className="lesson_theme">1. Theme: {"Hello!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">2. Theme: {"Lorem!"}</h2>
                    <button className="continue_btn">
                      {" "}
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">3. Theme: {"Lorem!"}</h2>
                    <button className="continue_btn">
                      {" "}
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">4. Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">5.Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">6. Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
              </CourseLessons>
            </div>
            <div className="courses">
              <div
                className="courses_title"
                onClick={() =>
                  settitleOpened({ intermidiate: !titleOpened.intermidiate })
                }
              >
                <h2 className="course_title">Intermediate</h2>
                <div className="titleOpenIcon">
                  {/* {titleOpened ? <TitleClosing /> : <TitleOpening />} */}
                  <LockedLesson />
                </div>
              </div>
              <CourseLessons
                isOpen={titleOpened.intermidiate}
                className="course_lessons"
              >
                <li>
                  <Link to="/testspage">
                    <h2 className="lesson_theme">1. Theme: {"Hello!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">2. Theme: {"Lorem!"}</h2>
                    <button className="continue_btn">
                      {" "}
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">3. Theme: {"Lorem!"}</h2>
                    <button className="continue_btn">
                      {" "}
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">4. Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">5.Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">6. Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
              </CourseLessons>
            </div>
            <div className="courses">
              <div
                className="courses_title"
                onClick={() =>
                  settitleOpened({
                    upperintermidiate: !titleOpened.upperintermidiate,
                  })
                }
              >
                <h2 className="course_title">Upper-Intermediate</h2>
                <div className="titleOpenIcon">
                  {/* {titleOpened ? <TitleClosing /> : <TitleOpening />} */}
                  <LockedLesson />
                </div>
              </div>
              <CourseLessons
                isOpen={titleOpened.upperintermidiate}
                className="course_lessons"
              >
                <li>
                  <Link to="/testspage">
                    <h2 className="lesson_theme">1. Theme: {"Hello!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">2. Theme: {"Lorem!"}</h2>
                    <button className="continue_btn">
                      {" "}
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">3. Theme: {"Lorem!"}</h2>
                    <button className="continue_btn">
                      {" "}
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">4. Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">5.Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">6. Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
              </CourseLessons>
            </div>
            <div className="courses">
              <div
                className="courses_title"
                onClick={() =>
                  settitleOpened({ advanced: !titleOpened.advanced })
                }
              >
                <h2 className="course_title">Advanced</h2>
                <div className="titleOpenIcon">
                  {/* {titleOpened ? <TitleClosing /> : <TitleOpening />} */}
                  <LockedLesson />
                </div>
              </div>
              <CourseLessons
                isOpen={titleOpened.advanced}
                className="course_lessons"
              >
                <li>
                  <Link to="/testspage">
                    <h2 className="lesson_theme">1. Theme: {"Hello!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">2. Theme: {"Lorem!"}</h2>
                    <button className="continue_btn">
                      {" "}
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">3. Theme: {"Lorem!"}</h2>
                    <button className="continue_btn">
                      {" "}
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">4. Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">5.Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">6. Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
              </CourseLessons>
            </div>
            <div className="courses">
              <div
                className="courses_title"
                onClick={() => settitleOpened({ skills: !titleOpened.skills })}
              >
                <h2 className="course_title">Maxsus skillar</h2>
                <div className="titleOpenIcon">
                  {/* {titleOpened ? <TitleClosing /> : <TitleOpening />} */}
                  <LockedLesson />
                </div>
              </div>
              <CourseLessons
                isOpen={titleOpened.skills}
                className="course_lessons"
              >
                <li>
                  <Link to="/testspage">
                    <h2 className="lesson_theme">1. Theme: {"Hello!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">2. Theme: {"Lorem!"}</h2>
                    <button className="continue_btn">
                      {" "}
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">3. Theme: {"Lorem!"}</h2>
                    <button className="continue_btn">
                      {" "}
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">4. Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">5.Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="testspage">
                    <h2 className="lesson_theme">6. Theme: {"Unlock!"}</h2>
                    <button className="continue_btn">
                      <LockedLesson />
                    </button>
                  </Link>
                </li>
              </CourseLessons>
            </div>
          </div>
        </div>
      </div>
    </HomePageStyle>
  );
}

export default HomePage;
