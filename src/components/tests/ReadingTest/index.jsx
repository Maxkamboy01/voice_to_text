import React from "react";
import { ReadingTestStyle, VoiceSection } from "./styles";
import SpeechRecorder from "../../../components/speechrecorger/index";
// IMAGES
import AvatarImg from "../../../assets/avatarImg.png";
import AvatarImg_2 from "../../../assets/avatarImg_2.png";
function ReadingTest() {
  return (
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
            <span>
              Hi, John. <u> How are you</u> <i>?</i>
            </span>
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
            <span>
              <u> Fine thanks </u>, Sandra. And you<i>?</i>
            </span>
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
            <span>
              <u>I’m OK, Thanks.</u>
            </span>
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
  );
}

export default ReadingTest;
