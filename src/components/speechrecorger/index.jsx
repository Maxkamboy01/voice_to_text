import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
// import { FaMicrophone } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { BiReset } from "react-icons/bi";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Speechkit() {
  const { speak, voices } = useSpeechSynthesis({ lang: "en" });
  const [textvalue, settextvalue] = useState("hello");
  const [resetvalue, setresetvalue] = useState(false);
  const [mistakes, setMistakes] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ continuous: true });
  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech to text converter</span>;
  }

  if (transcript === textvalue) {
    // setMistakes(!mistakes);
    console.log(transcript);
  } else {
    console.log("not working");
  }


  const speechstart = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
      resetTranscript: true,
    });
    setresetvalue(false);
  };

  const speechend = () => {
    SpeechRecognition.stopListening();
    setresetvalue(true)
  };

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
          onMouseDown={speechstart}
          onMouseUp={speechend}
          onTouchStart={speechstart}
          onTouchEnd={speechend}
          id="convert"
          className="convert"
        >
          Voice to Text{/* {mistakes ? "correct" : "mistake"} */}
        </button>
        {resetvalue ? (
          <BiReset className="reset" onClick={resetTranscript}></BiReset>
        ) : (
          ""
        )}
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
