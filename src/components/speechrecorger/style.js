import styled from "styled-components";

export const Testcontainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
    &:hover {
      .microphone {
        transform: scale(1.3);
      }
    }
    .microphone {
      width: 2em;
      color: ${(props) => (props.isListening ? "red" : "white")};
      // color: white;
      transition-duration: 400ms;
    }
    .recording_btn {
      width: 2.4em;
      color: white;
    }
  }
  .reset {
    font-size: 40px;
    margin: 0 10px;
    transition: all ease 400ms;
    &:hover {
      transform: scale(1.1);
    }
  }

  .text_to_speech_box {
    display: flex;
    align-items: center;
    margin-left: 5px;
    .play_btn {
      width: 40px;
      height: 40px;
      transition: all ease 400ms;
      &:hover {
        transform: scale(1.1);
      }
    }
    .audio_slider {
      width: 222px;
      margin: 0 7px;
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
      &:hover {
        transform: scale(1.1);
      }

      svg {
        width: 30px;
        height: 30px;
        color: white;
      }
    }
  }
`;



export const ResultContainer = styled.div`
  line-height: 32px;
  font-family: "Ibarra Real Nova", sans-serif;
  margin-top: 14px;
  .header {
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 0.055em;
  }
  
  .marquee{
    color: #000;
    border-bottom: 1px solid #000;
    width: 222px;
    font-size: 24px;
    font-weight: 400;
  }
  .subheader {
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0.015em;
  }
`;
