import React from "react";
import { VoiceSection } from "../../../pages/TestsPage/style";
import SpeechRecorder from "../../../components/speechrecorger/index";
import { GreetingStyle } from "./styles";
import Dialogue_img from "../../../assets/testpage_guys.png";

function Greeting() {
  return (
    <GreetingStyle className="container">
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
    </GreetingStyle>
  );
}

export default Greeting;
