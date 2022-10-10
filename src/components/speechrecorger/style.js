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
      @media (max-width: 768px) {
        width: 233px;
      }
      @media (max-width: 512px) {
        width: 250px;
      }
    }
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
        @media (max-width: 768px) {
          width: 35px;
        }
        @media (max-width: 512px) {
          width: 50px;
        }
      }
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
