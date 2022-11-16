import styled from "styled-components";

export const VideoTestStyle = styled.div`
  .test_info {
    .theme {
      font-size: 33px;
      font-weight: 700;
      letter-spacing: 0.1em;
      @media (max-width: 768px) {
        font-size: 29px;
        letter-spacing: 0.08em;
      }
      @media (max-width: 512px) {
        font-size: 27px;
        letter-spacing: 0.06em;
      }
    }
    .task {
      font-size: 28px;
      font-weight: 400;
      letter-spacing: 0.1em;
      @media (max-width: 768px) {
        font-size: 25px;
        letter-spacing: 0.07em;
      }
      @media (max-width: 512px) {
        font-size: 23px;
        letter-spacing: 0.04em;
      }
    }
  }
  .main_test_box {
    margin-top: 60px;
    width: auto;
    @media (max-width: 768px) {
      margin-top: 55px;
    }
    @media (max-width: 512px) {
      margin-top: 50px;
    }
    iframe {
      width: 945px;
      height: 506px;
      @media (max-width: 768px) {
        width: 95vw;
        height: 70vh;
      }
      @media (max-width: 512px) {
        width: 95vw;
        height: 70vh;
      }
    }
    .main_subtitle {
      font-family: "Ibarra Real Nova";
      font-weight: 400;
      font-size: 32px;
      line-height: 101.5%;
      letter-spacing: 0.055em;
      margin-top: 30px;
      @media (max-width: 768px) {
        font-size: 30px;
      }
      @media (max-width: 512px) {
        font-size: 27px;
      }
    }
    .line {
      margin-top: 50px;
      @media (max-width: 768px) {
        margin-top: 45px;
      }
      @media (max-width: 512px) {
        margin-top: 40px;
      }
    }
  }
`;
