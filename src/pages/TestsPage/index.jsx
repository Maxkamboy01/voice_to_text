import React from "react";
import {
  MatchingImageStyle,
  NumberTestStyle,
  ReadingTestStyle,
  TestStyle,
  VideoTestStyle,
  VoiceSection,
} from "./style";
import SpeechRecorder from "../../components/speechrecorger/index";
// IMAGES
import Dialogue_img from "../../assets/testpage_guys.png";
import AvatarImg from "../../assets/avatarImg.png";
import AvatarImg_2 from "../../assets/avatarImg_2.png";
import MatchingImg from "../../assets/matchingImg.png";
import NumberTestImg from "../../assets/numberTestImg.png";

function TestsPage({ isOpen, ismainOpen }) {
  return (
    <TestStyle isOpen={isOpen} ismainOpen={ismainOpen}>
      <div className="container">
        <div className="test_info">
          <h1 className="theme">Hello!</h1>
          <p className="task">Ingliz tilida salomlashaylik!</p>
        </div>
        <div className="images">
          <div className="dialogue_text first_person">
            Hello! <br />
            My name is <br /> Tom
          </div>
          <img className="dialogue_people" src={Dialogue_img} alt="" />
          <div className="dialogue_text  second_person">
            Hello! <br /> My name is <br /> Liza
          </div>
        </div>
        <VoiceSection>
          <SpeechRecorder
            testText="hello! my name is Tom...  hello! my name is Liza"
            tasktexts="Eshiting, O’qing va Qaytaring"
            taskInstructions="Tepadagi tugmani bosing va audioni qaytaring"
          />
        </VoiceSection>
      </div>
      <VideoTestStyle className="container">
        <div className="test_info">
          <h1 className="theme">Grammatika vaqti!</h1>
          <p className="task">
            Quyidagi videoni yaxshilab tushunib, daftaringizga ham yozib oling!
          </p>
        </div>
        <div className="main_test_box">
          <iframe
            width="885"
            height="498"
            src="https://www.youtube.com/embed/W-sZo6Gtx_E"
            title="Register and Login Page Tutorial | ReactJs, NodeJS, MySQL (Beginner)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="main_subtitle">
            Ushbu videoni yaxshi tushinmagunizcha qayta-qayta ko’ring, chunki
            keyingi mashqlarda bu bilimlar kerak bo’ladi!
          </p>
          <div className="line"></div>
        </div>
      </VideoTestStyle>
      <ReadingTestStyle className="container">
        <div className="test_info">
          <h1 className="theme">Hello!</h1>
          <p className="task">Ingliz tilida o’qishni urganaylik!</p>
        </div>
        <div className="main chat_section">
          <div className="message first_message">
            <div className="avatar_box">
              <div className="avatar_img_box">
                <img className="avatar_img" src={AvatarImg} alt="" />
              </div>
              <span className="message_author">Sandra</span>
            </div>
            <div className="message_text_box">
              Hi, John. <u> How are you</u> <i>?</i>{" "}
            </div>
          </div>
          <div className="message second_message">
            <div className="avatar_box">
              <div className="avatar_img_box">
                <img className="avatar_img" src={AvatarImg_2} alt="" />
              </div>
              <span className="message_author">John</span>
            </div>
            <div className="message_text_box">
              <u> Fine thanks, </u> Sandra. And you<i>?</i>
            </div>
          </div>
          <div className="message first_message">
            <div className="avatar_box">
              <div className="avatar_img_box">
                <img className="avatar_img" src={AvatarImg} alt="" />
              </div>
              <span className="message_author">Sandra</span>
            </div>
            <div className="message_text_box">
              <u>I’m OK, thanks.</u>
            </div>
          </div>
        </div>
        <VoiceSection>
          <SpeechRecorder
            testText="Hi, John. How are you?... Fine thanks, Sandra. And you?...  I’m OK, thanks."
            tasktexts="Eshiting, O’qing, Yodlang va Qaytaring"
            taskInstructions="Tepadagi tugmani bosing va audioni qaytaring.
 <b> tagiga chizilgan </b> yozuvlarni yodda tuting "
          />
        </VoiceSection>
      </ReadingTestStyle>

      <MatchingImageStyle className="container">
        <div className="test_info">
          <h1 className="theme">Hello!</h1>
          <p className="task">Vocabilary</p>
        </div>
        <div className="main images_section">
          <div className="img_box">
            <img src={MatchingImg} alt="" />
          </div>
          <ul className="test_options_box">
            <li>CAR</li>
            <li>PHOTO</li>
            <li>BOOK</li>
            <li>HAMBURGER</li>
          </ul>
          <div className="test№">1/10</div>
        </div>
        <div className="task_texts_box">
          <p className="task_title">
            Yangi o’rganayotgan so’zlarizni yodda saqlang
          </p>
          <div className="line"></div>
          <p className="task_subtitle">
            Tepadagi tugmani bosing va audioni qaytaring. Italik yozuvlarni
            yodda tuting{" "}
          </p>
          <button className="checking_btn">Tekshirish</button>
        </div>
      </MatchingImageStyle>
      <NumberTestStyle className="container">
        <div className="test_info">
          <h1 className="theme">Hello!</h1>
          <p className="task">Numbers!</p>
        </div>
        <div className="main test_content_box">
          <div className="test_content">
            <div className="number_box">{"ONE"} =</div>
            <img src={NumberTestImg} alt="" />
          </div>
          <div className="test№">1/10</div>
        </div>
        <div className="test_working_btn">
          <button id="convert" className="convert">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              color="white"
              xmlns="http://www.w3.org/2000/svg"
              className="microphone"
            >
              <path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"></path>
            </svg>
          </button>
          <button className="volume">
            <svg
              className="volume_btn"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z"></path>
              <path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9z"></path>
            </svg>
          </button>
        </div>
        <div className="task_texts_box">
          <p className="task_title">
            Yangi o’rganayotgan so’zlarizni yodda saqlang
          </p>
          <div className="line"></div>
          <p className="task_subtitle">
            Tepadagi tugmani bosing va audioni qaytaring. Tepada chapdagi
            tugmani bosing va gapiring
          </p>
        </div>
      </NumberTestStyle>
    </TestStyle>
  );
}

export default TestsPage;
