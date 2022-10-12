import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { Testcontainer, ResultContainer, PopUpBox } from "./style";
import { Link } from "react-router-dom";
// ICONS
import Correct from "../../assets/checked.png";
import Mistake from "../../assets/cancel.png";
import { BiReset } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
// ICONS

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Speechkit() {
  const [mistakes, setMistakes] = useState(true);
  const [volumeOpened, setvolumeOpened] = useState(false);
  const { speak, cancel, voices } = useSpeechSynthesis({ lang: "en" });
  const [textvalue, settextvalue] = useState(
    "hello! my name is Tom...   hello! my name is Liza"
  );
  const [resetvalue, setresetvalue] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ continuous: true });

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech to text converter</span>;
  }

  const speechstart = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });
    setresetvalue(false);
  };

  const settingcorrect = () => {
    setMistakes(false);
  };
  const settingmistakes = () => {
    setMistakes(true);
  };

  const speechend = () => {
    SpeechRecognition.stopListening();
    setresetvalue(true);
    //
    if (transcript.includes("hello my name is ")) {
      settingcorrect();
      console.log(transcript);
    } else {
      settingmistakes();
      console.log("not working");
    }
  };

  const redoTest = () => {
    setresetvalue(false);
    transcript = null;
  };

  const nextTest = () => {
    setresetvalue(false);
  };

  const closeReset = () => {
    if (mistakes) {
      setresetvalue(false);
      transcript = "";
    }
  };

  // volume functions
  const rangeOpened = () => {
    setvolumeOpened(!volumeOpened);
    console.log(volumeOpened);
  };

  return (
    <div
      className="test-function"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Testcontainer className="test_container">
        <button
          onMouseDown={speechstart}
          onMouseUp={speechend}
          onTouchStart={speechstart}
          onTouchEnd={speechend}
          id="convert"
          className="convert"
        >
          {listening ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              className="recording_btn"
              islistening={listening}
            >
              <path
                fillRule="evenodd"
                d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"
              ></path>
            </svg>
          ) : (
            <>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="white"
                xmlns="http://www.w3.org/2000/svg"
                className="microphone"
                isListening={listening}
              >
                <path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"></path>
              </svg>
            </>
          )}
        </button>
        {resetvalue ? (
          <PopUpBox>
            <div className="cover" onClick={() => closeReset()}></div>
            <div className="popUpbox">
              <h1 className="test_result_header">
                {mistakes ? "Ozgina yetmay qoldi😑" : "Good Job!!!🥳"}
              </h1>
              <h2 className="test_result_subheader">
                {mistakes
                  ? "Qaytadan urinib kuring😉"
                  : " Let's go to the other test😎"}
              </h2>
              <button className="nextreset_btn">
                {mistakes ? (
                  <Link to="/" onClick={() => redoTest()} className="link_btn">
                    Boshidan
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="link_icon"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        d="M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"
                      ></path>
                    </svg>
                  </Link>
                ) : (
                  <Link to="/" onClick={() => nextTest()} className="link_btn">
                    Keyingisi
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="link_icon"
                    >
                      <polyline
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        points="7 2 17 12 7 22"
                      ></polyline>
                    </svg>
                  </Link>
                )}
              </button>
            </div>
          </PopUpBox>
        ) : (
          ""
        )}
        {/* {resetvalue ? (
          <BiReset className="reset" onClick={resetTranscript}></BiReset>
        ) : (
          ""
        )}
         */}

        {/* {listening ? (
            <>
              <div className="animation" />
            </>
          ) : (
            ""
          )} */}
        <div className="text_to_speech_box">
          <AiFillPlayCircle
            // onClick={listening ? () => window.speechSynthesis.cancel()
            //     : () => speak({ text: textvalue, voice: voices[6] })
            // }
            onClick={() => speak({ text: textvalue, voice: voices[6] })}
            className="play_btn"
          />
          <input type="range" name="slider" className="audio_slider" />
          <div className="volume_settings">
            <div
              className="volume_box"
              onClick={() => rangeOpened()}
            >
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
            </div>
            <input
              type="range"
              name="volume_range"
              className="volume_range"
              id="volume_range"
              isOpened={volumeOpened}
            />
          </div>
        </div>
      </Testcontainer>
      <ResultContainer>
        <h2 className="header">Endi sizning navbatingiz</h2>
        <marquee className="marquee">{transcript}</marquee>
        <h4 className="subheader">Tepadagi tugmani bosing va gapiring</h4>
      </ResultContainer>
    </div>
  );
}

export default Speechkit;
