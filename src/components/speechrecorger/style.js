import styled from "styled-components";

export const Testcontainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  }
  @media (max-width: 512px) {
    display: flex;
    flex-direction: column;
  }
  .convert {
    width: 55px;
    height: 50px;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0, 59, 218);
    background: linear-gradient(
      180deg,
      rgba(0, 59, 218, 1) 0%,
      rgba(0, 108, 230, 1) 30%,
      rgba(0, 148, 239, 1) 50%,
      rgba(0, 176, 243, 1) 70%,
      rgba(0, 212, 254, 1) 100%
    );
    @media (max-width: 768px) {
      width: 50px;
      height: 45px;
    }
    @media (max-width: 512px) {
      width: 66px;
      height: 60px;
    }

    &:hover {
      .microphone {
        transform: scale(1.3);
      }
    }

    .microphone {
      width: 2em;
      color: ${(props) => (props.isListening ? "red" : "white")};
      transition-duration: 400ms;
      @media (max-width: 768px) {
        width: 1.8em;
      }
      @media (max-width: 512px) {
        width: 2.5em;
      }
    }
    .recording_btn {
      width: 2.4em;
      color: white;
      @media (max-width: 768px) {
        width: 2.1em;
      }
      @media (max-width: 512px) {
        width: 3em;
      }
    }
  }
  .reset {
    font-size: 40px;
    margin: 0 10px;
    transition: all ease 400ms;
    @media (max-width: 768px) {
      font-size: 45px;
    }
    @media (max-width: 512px) {
      font-size: 60px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .text_to_speech_box {
    display: flex;
    align-items: center;
    margin-left: 5px;
    @media (max-width: 768px) {
    }
    @media (max-width: 512px) {
    }

    .play_btn {
      width: 40px;
      height: 40px;
      transition: all ease 400ms;
      @media (max-width: 768px) {
        width: 45px;
        height: 45px;
      }
      @media (max-width: 512px) {
        width: 60px;
        height: 60px;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
    .audio_slider {
      width: 222px;
      margin: 0 7px;
      color: black;
      -webkit-appearance: none;
      appearance: none;
      height: 6px;
      background: #444;
      border-radius: 4px;
      outline: none;
      opacity: 0.7;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
      @media (max-width: 768px) {
        width: 233px;
      }
      @media (max-width: 512px) {
        width: 250px;
      }

      &:hover {
        opacity: 1; /* Fully shown on mouse-over */
      }
      &::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 12px; /* Set a specific slider handle width */
        height: 12px; /* Slider handle height */
        background-color: #000; /* Green background */
        border-radius: 50%;
        cursor: pointer; /* Cursor on hover */
      }
      &::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 12px; /* Set a specific slider handle width */
        height: 12px; /* Slider handle height */
        background: #000; /* Green background */
        cursor: pointer; /* Cursor on hover */
      }
    }

    .volume_settings {
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      .volume_box {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all ease 400ms;
        @media (max-width: 768px) {
          width: 45px;
          height: 45px;
        }
        @media (max-width: 512px) {
          width: 60px;
          height: 60px;
        }

        &:hover {
          transform: scale(1.1);
        }

        svg {
          width: 30px;
          height: 30px;
          color: white;
          cursor: pointer;
          @media (max-width: 768px) {
            width: 35px;
          }
          @media (max-width: 512px) {
            width: 50px;
          }
        }
      }
      .volume_range_box {
      }
    }
  }
`;

export const VolumeRange = styled.div`
  display: ${(props) => (props.isVolumeOpened ? "block" : "none")};
  .volume_range {
    width: 60px;
    height: 6px;
    -webkit-appearance: none;
    appearance: none;
    background-color: #444;
    border-radius: 4px;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    margin-left: 8px;
    // margin-bottom: 30px;
    // transform:rotate(90deg);
    @media (max-width: 768px) {
      width: 65px;
    }
    @media (max-width: 512px) {
      width: 70px;
    }

    &:hover {
      opacity: 1;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      width: 12px; /* Set a specific slider handle width */
      height: 12px; /* Slider handle height */
      background-color: #000; /* Green background */
      border-radius: 50%;
      cursor: pointer; /* Cursor on hover */
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      width: 12px; /* Set a specific slider handle width */
      height: 12px; /* Slider handle height */
      background: #000; /* Green background */
      cursor: pointer; /* Cursor on hover */
    }
  }
`;

export const ResultContainer = styled.div`
  line-height: 32px;
  font-family: "Ibarra Real Nova", sans-serif;
  margin-top: 14px;
  @media (max-width: 768px) {
    margin-top: 12px;
  }
  @media (max-width: 512px) {
    margin-top: 16px;
  }

  .header {
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 0.055em;
    @media (max-width: 768px) {
      font-size: 33px;
    }
    @media (max-width: 512px) {
      font-size: 38px;
    }
  }

  .marquee {
    color: #000;
    border-bottom: 1px solid #000;
    width: 222px;
    font-size: 24px;
    font-weight: 400;
    @media (max-width: 768px) {
      width: 200px;
      font-size: 23px;
    }
    @media (max-width: 512px) {
      width: 230px;
      font-size: 26px;
    }
  }
  .subheader {
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0.015em;
    @media (max-width: 768px) {
      font-size: 23px;
    }
    @media (max-width: 512px) {
      font-size: 25px;
    }
  }
`;

export const PopUpBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2222;
  font-family: "Hubballi", cursive;
  .cover {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    position: relative;
  }
  .popUpbox {
    width: 500px;
    height: 200px;
    padding: 20px 30px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
    position: absolute;
    line-height: 35px;
    .test_result_header {
      font-size: 33px;
      font-weight: 700;
    }
    .test_result_subheader {
      font-size: 27px;
      color: #333;
    }
    .nextreset_btn {
      width: auto;
      margin-top: 20px;
      padding: 14px 30px;
      font-size: 18px;
      font-weight: bold;
      background: rgb(195, 66, 255);
      background: linear-gradient(
        135deg,
        rgba(195, 66, 255, 1) 2%,
        rgba(204, 53, 255, 1) 34%,
        rgba(212, 42, 255, 1) 50%,
        rgba(220, 32, 255, 1) 70%,
        rgba(223, 27, 255, 1) 97%
      );
      border: none;
      border-radius: 5px;
      &:hover {
        transform: scale(1.05);
        .link_icon {
          transform: rotate(360deg);
        }
      }
      .link_btn {
        color: white;
        display: flex;
        align-items: center;
        .link_icon {
          width: 30px;
          margin-left: 4px;
          color: white;
        }
      }
    }
  }
`;
