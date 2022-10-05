import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
// import { FaMicrophone } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Speechkit() {
  const { speak, voices } = useSpeechSynthesis({ lang: "en" });
  const [textvalue, settextvalue] = useState("hello");
  const [mistakes, setMistakes] = useState(false);
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech to text converter</span>;
  }

  if (transcript == textvalue) {
    // setMistakes(!mistakes);
    console.log(transcript);
  } else {
    console.log("not working");
  }

  return (
    <div className="test_container">
      <div
        onClick={() => speak({ text: textvalue, voice: voices[5] })}
        className="text_to_speech-box"
      >
        <GoMegaphone className="megaphone_btn" />
        <input
          className="textarea"
          id="test_text"
          value={textvalue}
          disabled
        ></input>
      </div>
      <div className="voice_section">
        <button
          onClick={() =>
            SpeechRecognition.startListening({ language: "en-US" })
          }
          id="convert"
          className="convert"
        >
          Voice to Text{/* {mistakes ? "correct" : "mistake"} */}
        </button>
        {listening ? (
          <>
            <div className="animation" />
          </>
        ) : (
          ""
        )}
        <p className="convertedText" id="convertedText">
          {transcript}
        </p>
      </div>
    </div>
  );
}

export default Speechkit;
