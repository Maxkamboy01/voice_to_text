import React from "react";
import { TestStyle,VoiceSection } from "./style";
import SpeechRecorder from "../../components/speechrecorger/index"
// IMAGES
import Dialogue_img from "../../assets/boy-girl.jpg";

function TestsPage() {
  return (
    <TestStyle>
      <div className="container">
        <div className="test_info">
          <h1 className="theme">Hello!</h1>
          <p className="task">Ingliz tilida salomlashaylik!</p>
        </div>
        <div className="images">
          <div className="dialogue_text first_person">
            {" "}
            Hello! <br />
            My name is <br /> Tom
          </div>
          <img className="dialogue_people" src={Dialogue_img} alt="" />
          <div className="dialogue_text  second_person">
            {" "}
            Hello! <br /> My name is <br /> Liza
          </div>
        </div>
        <VoiceSection>
          <SpeechRecorder/>
        </VoiceSection>
      </div>
    </TestStyle>
  );
}

export default TestsPage;
