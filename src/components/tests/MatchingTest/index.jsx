import React, { useState } from "react";
import { MatchingImageStyle, Scoresection } from "./styles";
import SpeechRecorder from "../../../components/speechrecorger/index";
import { useSpeechSynthesis } from "react-speech-kit";
import MatchingImg from "../../../assets/matchingImg.png";
import MatchingImg_2 from "../../../assets/matchingImg_2.png";
import MatchingImg_3 from "../../../assets/matchingImg_3.png";
import MatchingImg_4 from "../../../assets/matchingImg_4.png";

function MatchingTest() {
  //  MATCHING IMAGE SETTING AND FUNCTIONS
  const { speak, cancel, voices } = useSpeechSynthesis({ lang: "en" });

  const matchingOptions = [
    {
      imageurl: MatchingImg,
      id: 11,
      answerid: 111,
      answerOptions: [
        { answerText: "HOUSE", isCorrect: false },
        { answerText: "PHOTO", isCorrect: false },
        { answerText: "BOOK", isCorrect: true },
        { answerText: "HAMBURGER", isCorrect: false },
      ],
    },
    {
      imageurl: MatchingImg_2,
      id: 22,
      answerid: 222,
      answerOptions: [
        { answerText: "HOUSE", isCorrect: false },
        { answerText: "PHOTO", isCorrect: true },
        { answerText: "BOOK", isCorrect: false },
        { answerText: "HAMBURGER", isCorrect: false },
      ],
    },
    {
      imageurl: MatchingImg_3,
      id: 33,
      answerid: 333,
      answerOptions: [
        { answerText: "HOUSE", isCorrect: true },
        { answerText: "PHOTO", isCorrect: false },
        { answerText: "BOOK", isCorrect: false },
        { answerText: "HAMBURGER", isCorrect: false },
      ],
    },
    // {
    //   imageurl: MatchingImg_4,
    //   answerOptions: [
    //     { answerText: "HOUSE", isCorrect: false },
    //     { answerText: "PHOTO", isCorrect: false },
    //     { answerText: "BOOK", isCorrect: false },
    //     { answerText: "HAMBURGER", isCorrect: true },
    //   ],
    // },
  ];
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [score, setscore] = useState(0);
  const [showScore, setshowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect, answerText) => {
    // speak({ text: answerText, voice: voices[2] });
    if (isCorrect) {
      setscore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < matchingOptions.length) {
      setcurrentQuestion(nextQuestion);
    } else {
      setshowScore(true);
    }
  };

  const refresh = () => {
    setcurrentQuestion(0);
    setscore(0);
    setshowScore(false);
  };

  var feeling = () => {
    if (score === matchingOptions.length) return "😎";
    else if (score >= matchingOptions.length / 2) {
      return "😜";
    } else {
      return "😪";
    }
  };

  //  MATCHING IMAGE SETTING AND FUNCTIONSF

  return (
    <MatchingImageStyle className="container">
      <div className="test_info">
        <h1 className="theme">Hello!</h1>
        <p className="task">Vocabilary</p>
      </div>
      <div className="main images_section">
        {showScore ? (
          <Scoresection className="score_section">
            <div>
              {score > 0
                ? `${score} Правильных ответов из ${matchingOptions.length}
${feeling()}`
                : `Не найдено правильных ответов${feeling()}`}
            </div>
            <button onClick={() => refresh()} className="refresh_btn button">
              Boshidan
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M497.408 898.56c-.08-.193-.272-.323-.385-.483l-91.92-143.664c-6.528-10.72-20.688-14.527-31.728-8.512l-8.193 5.04c-11.007 6-10.767 21.537-4.255 32.256l58.927 91.409c-5.024-1.104-10.096-2-15.056-3.296-103.184-26.993-190.495-96.832-239.535-191.6-46.336-89.52-55.04-191.695-24.512-287.743 30.512-96.048 99.775-174.464 189.295-220.784 15.248-7.888 21.2-26.64 13.312-41.856-7.872-15.264-26.64-21.231-41.855-13.327-104.272 53.952-184.4 145.28-219.969 257.152C45.982 485.008 56.11 604.033 110.078 708.29c57.136 110.336 158.832 191.664 279.024 223.136 1.36.352 2.784.56 4.16.911l-81.311 41.233c-11.008 6.032-14.657 19.631-8.128 30.351l3.152 8.176c6.56 10.72 17.84 14.527 28.815 8.512L484.622 944.4c.193-.128.385-.096.578-.224l9.984-5.456c5.52-3.024 9.168-7.969 10.624-13.505 1.52-5.52.815-11.663-2.448-16.991zm416.496-577.747c-57.056-110.304-155.586-191.63-275.762-223.118-8.56-2.24-17.311-3.984-26.048-5.712l79.824-40.48c11.008-6.033 17.568-19.632 11.04-30.369l-3.153-8.16c-6.56-10.736-20.752-14.528-31.727-8.528L519.262 80.654c-.176.112-.384.08-.577.208l-9.967 5.472c-5.537 3.04-9.168 7.967-10.624 13.503-1.52 5.52-.816 11.648 2.464 16.976l5.92 9.712c.096.192.272.305.384.497l91.92 143.648c6.512 10.736 20.688 14.528 31.712 8.513l7.216-5.025c11.008-6 11.727-21.536 5.231-32.24l-59.2-91.856c13.008 2 25.968 4.416 38.624 7.76 103.232 27.04 187.393 96.864 236.4 191.568 46.32 89.519 55.024 191.695 24.48 287.728-30.511 96.047-96.655 174.448-186.174 220.816-15.233 7.887-21.168 26.607-13.28 41.87 5.519 10.64 16.335 16.768 27.599 16.768 4.8 0 9.664-1.12 14.272-3.488 104.272-53.936 181.248-145.279 216.816-257.119 35.536-111.904 25.393-230.929-28.574-335.152z"></path>
              </svg>
            </button>
          </Scoresection>
        ) : (
          <div>
            <div className="question_section">
              <div className="question_img">
                <img src={matchingOptions[currentQuestion].imageurl} alt="" />
              </div>
            </div>
            <ul className="test_options_box">
              {matchingOptions[currentQuestion].answerOptions.map((el) => (
                <li
                  key={el.id}
                  onClick={() =>
                    speak({ text: el.answerText, voice: voices[2] })
                  }
                  onDoubleClick={() =>
                    handleAnswerOptionClick(el.isCorrect, el.answerText)
                  }
                  className="button"
                >
                  {el.answerText}
                </li>
              ))}
            </ul>
          </div>
        )}
        {setscore ? (
          ""
        ) : (
          <div className="test№">
            Вопрос {currentQuestion + 1} / {matchingOptions.length}
          </div>
        )}
      </div>
      <div className="task_texts_box">
        <p className="task_title">
          Yangi o’rganayotgan so’zlarizni yodda saqlang
        </p>
        <div className="line"></div>
        <p className="task_subtitle">
          Tepadagi tugmani bosing va audioni qaytaring.Ikki marta bosib
          tanlashingiz mumkin. <i>Italik</i> yozuvlarni yodda tuting
        </p>
        <button className="checking_btn">Tekshirish</button>
      </div>
    </MatchingImageStyle>
  );
}

export default MatchingTest;
