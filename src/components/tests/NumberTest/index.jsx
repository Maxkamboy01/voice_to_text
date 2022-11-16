import React, { useState } from "react";
import SpeechRecorder from "../../../components/speechrecorger/index";
import { useSpeechSynthesis } from "react-speech-kit";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { NumberTestStyle, Scoresection } from "./styles";
import NumberTestImg from "../../../assets/numberTestImg.png";

function NumberTest() {
  // ITEMS COUNT SETTING AND FUNCTIONS

  const [currentItem, setcurrentItem] = useState(0);
  const [itemScore, setItemScore] = useState(0);
  const [showItemScore, setshowItemScore] = useState(false);
  const [volumeOpened, setvolumeOpened] = useState(false);
  const { transcript, listening, resetTranscript } = useSpeechRecognition({
    continuous: true,
  });
  const { speak, cancel, voices } = useSpeechSynthesis({ lang: "en" });

  const itemOptions = [
    {
      itemsoptions: [
        {
          number: 1,
          imageurl: <img src={NumberTestImg} alt="" />,
          id: 10,
          correctText: "one apple",
        },
      ],
    },
    {
      itemsoptions: [
        {
          number: 2,
          imageurl: <img src={NumberTestImg} alt="" />,
          id: 20,
          correctText: "two apples",
        },
      ],
    },
    {
      itemsoptions: [
        {
          number: 3,
          imageurl: <img src={NumberTestImg} alt="" />,
          id: 30,
          correctText: "three apples",
        },
      ],
    },
    {
      itemsoptions: [
        {
          number: 4,
          imageurl: <img src={NumberTestImg} alt="" />,
          id: 40,
          correctText: "four apples",
        },
      ],
    },
    {
      itemsoptions: [
        {
          number: 5,
          imageurl: <img src={NumberTestImg} alt="" />,
          id: 50,
          correctText: "five apples",
        },
      ],
    },
    {
      itemsoptions: [
        {
          number: 6,
          imageurl: <img src={NumberTestImg} alt="" />,
          id: 60,
          correctText: "six apples",
        },
      ],
    },
    {
      itemsoptions: [
        {
          number: 7,
          imageurl: <img src={NumberTestImg} alt="" />,
          id: 70,
          correctText: "seven apples",
        },
      ],
    },
    {
      itemsoptions: [
        {
          number: 8,
          imageurl: <img src={NumberTestImg} alt="" />,
          id: 80,
          correctText: "eight apples",
        },
      ],
    },
    {
      itemsoptions: [
        {
          number: 9,
          imageurl: <img src={NumberTestImg} alt="" />,
          id: 90,
          correctText: "nine apples",
        },
      ],
    },
    {
      itemsoptions: [
        {
          number: 10,
          imageurl: <img src={NumberTestImg} alt="" />,
          id: 100,
          correctText: "ten apples",
        },
      ],
    },
  ];

  const speechstart = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });
    resetTranscript();
  };

  const speechend = (item) => {
    SpeechRecognition.stopListening();
    if (
      transcript.toLowerCase() ===
      itemOptions[currentItem].itemsoptions.map((el) => el.correctText)
    ) {
      setItemScore(itemScore + 1);
    } else {
      setItemScore(itemScore - 1);
    }

    const nextItem = currentItem + 1;

    if (nextItem < itemOptions.length) {
      setcurrentItem(nextItem);
    } else {
      setshowItemScore(true);
    }
  };

  const refreshItems = () => {
    setcurrentItem(0);
    setItemScore(0);
    setshowItemScore(false);
    resetTranscript();
  };
  var ItemFeeling = () => {
    if (itemScore === itemOptions.length) return "😎";
    else if (itemScore >= itemOptions.length / 2) {
      return "😜";
    } else {
      return "😪";
    }
  };

  const rangeOpened = () => {
    if (volumeOpened) {
      setvolumeOpened(false);
    } else {
      setvolumeOpened(true);
    }
    // setvolumeOpened(!volumeOpened);
    console.log(volumeOpened);
  };

  // ITEMS COUNT SETTING AND FUNCTIONS

  return (
    <NumberTestStyle className="container">
      <div className="test_info">
        <h1 className="theme">Hello!</h1>
        <p className="task">Numbers!</p>
      </div>
      {showItemScore ? (
        <Scoresection className="score_section">
          <div>
            {itemScore > 0
              ? `${itemScore} Правильных ответов из ${itemOptions.length}
${ItemFeeling()}`
              : `Не найдено правильных ответов${ItemFeeling()}`}
          </div>
          <button onClick={() => refreshItems()} className="refresh_btn button">
            Boshidan
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmins="http://www.w3.org/2000/svg"
            >
              <path d="M497.408 898.56c-.08-.193-.272-.323-.385-.483l-91.92-143.664c-6.528-10.72-20.688-14.527-31.728-8.512l-8.193 5.04c-11.007 6-10.767 21.537-4.255 32.256l58.927 91.409c-5.024-1.104-10.096-2-15.056-3.296-103.184-26.993-190.495-96.832-239.535-191.6-46.336-89.52-55.04-191.695-24.512-287.743 30.512-96.048 99.775-174.464 189.295-220.784 15.248-7.888 21.2-26.64 13.312-41.856-7.872-15.264-26.64-21.231-41.855-13.327-104.272 53.952-184.4 145.28-219.969 257.152C45.982 485.008 56.11 604.033 110.078 708.29c57.136 110.336 158.832 191.664 279.024 223.136 1.36.352 2.784.56 4.16.911l-81.311 41.233c-11.008 6.032-14.657 19.631-8.128 30.351l3.152 8.176c6.56 10.72 17.84 14.527 28.815 8.512L484.622 944.4c.193-.128.385-.096.578-.224l9.984-5.456c5.52-3.024 9.168-7.969 10.624-13.505 1.52-5.52.815-11.663-2.448-16.991zm416.496-577.747c-57.056-110.304-155.586-191.63-275.762-223.118-8.56-2.24-17.311-3.984-26.048-5.712l79.824-40.48c11.008-6.033 17.568-19.632 11.04-30.369l-3.153-8.16c-6.56-10.736-20.752-14.528-31.727-8.528L519.262 80.654c-.176.112-.384.08-.577.208l-9.967 5.472c-5.537 3.04-9.168 7.967-10.624 13.503-1.52 5.52-.816 11.648 2.464 16.976l5.92 9.712c.096.192.272.305.384.497l91.92 143.648c6.512 10.736 20.688 14.528 31.712 8.513l7.216-5.025c11.008-6 11.727-21.536 5.231-32.24l-59.2-91.856c13.008 2 25.968 4.416 38.624 7.76 103.232 27.04 187.393 96.864 236.4 191.568 46.32 89.519 55.024 191.695 24.48 287.728-30.511 96.047-96.655 174.448-186.174 220.816-15.233 7.887-21.168 26.607-13.28 41.87 5.519 10.64 16.335 16.768 27.599 16.768 4.8 0 9.664-1.12 14.272-3.488 104.272-53.936 181.248-145.279 216.816-257.119 35.536-111.904 25.393-230.929-28.574-335.152z"></path>
            </svg>
          </button>
        </Scoresection>
      ) : (
        itemOptions[currentItem].itemsoptions.map((item) => {
          return (
            <div className="main test_content_box">
              <div key={item.id} className="test_content">
                <div className="number_box">{item.number}=</div>
                {item.imageurl}
              </div>
              <div className="test№">
                {currentItem + 1} / {itemOptions.length}
              </div>

              {/* {itemScore}
  {item.correctText} */}

              <div className="test_working_btn">
                <button
                  id="convert"
                  className="convert"
                  onMouseDown={speechstart}
                  onMouseUp={(item) => speechend(item)}
                  onTouchStart={speechstart}
                  onTouchEnd={(item) => speechend(item)}
                >
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
                {transcript}
                <button
                  className="volume"
                  onClick={() =>
                    speak({
                      text: item.correctText,
                      voice: voices[6],
                    })
                  }
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
                </button>
              </div>
            </div>
          );
        })
      )}

      <div className="task_texts_box">
        <p className="task_title">
          Yangi o’rganayotgan so’zlarizni yodda saqlang
        </p>
        <div className="line"></div>
        <p className="task_subtitle">
          Tepadagi tugmani bosing va audioni qaytaring. Tepada chapdagi tugmani
          bosing va gapiring
        </p>
      </div>
    </NumberTestStyle>
  );
}

export default NumberTest;
