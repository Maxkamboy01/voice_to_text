import React,{useState} from "react";
import { EnterWordsStyle, FormBoxStyle, MatchingImgInput } from "./styles";

function EnterWordsTest() {
  //  ENTER WORDS SETTINGS AND FUNCTIONS
  const [valueCorrect, setValueCorrect] = useState(true);
  const [firstInput, setFirstInput] = useState();
  const [secondInput, setSecondinput] = useState();
  const [thirdInput, setThirdInput] = useState();

  const getValues = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(valueCorrect);
    if (firstInput === "" && secondInput === "" && thirdInput === "") {
      setValueCorrect(true);
    } else {
      if (firstInput === "am" && secondInput === "are" && thirdInput === "is") {
        setValueCorrect(true);
      } else {
        setValueCorrect(false);
      }
    }
  };

  return (
    <EnterWordsStyle className="container">
      <div className="test_info">
        <h1 className="theme">Hello!</h1>
        <p className="task">Bosh joylarni tuldiraylik!</p>
      </div>
      <FormBoxStyle
        onSubmit={(e) => getValues(e)}
        className="main enter_word_box"
      >
        <div className="message_box">
          I
          <MatchingImgInput
            onChange={(e) => setFirstInput(e.target.value)}
            correctValue={valueCorrect}
            type="text"
            value={firstInput}
            name="first"
            id="first"
            className="word_inputs"
          />
          Sandra
        </div>
        <div className="message_box">
          How{" "}
          <MatchingImgInput
            onChange={(e) => setSecondinput(e.target.value)}
            correctValue={valueCorrect}
            value={secondInput}
            type="text"
            name="second"
            id="second"
            className="word_inputs"
          />{" "}
          you?
        </div>
        <div className="message_box">
          This{" "}
          <MatchingImgInput
            onChange={(e) => setThirdInput(e.target.value)}
            correctValue={valueCorrect}
            value={thirdInput}
            type="text"
            name="third"
            id="third"
            className="word_inputs"
          />{" "}
          John
        </div>
        <div className="task_texts_box">
          <p className="task_title">Grammar Slot </p>
          <div className="line"></div>
          <p className="task_subtitle">
            Tepadagi tugmani bosing va audioni qushing
            <b> am , is , are </b> yozing
          </p>
          <button className="checking_btn">Tekshirish</button>
        </div>
      </FormBoxStyle>
    </EnterWordsStyle>
  );
}

export default EnterWordsTest;
