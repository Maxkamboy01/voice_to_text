import styled from "styled-components";

export const TestStyle = styled.div`
  width: ${(props) => (props.ismainOpen ? "77vw" : "100vw")};
  margin-left: auto;
  min-height: 100vh;
  background-color: #e3d6ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px;
  @media (max-width: 768px) {
    width: 100vw;
  }
  @media (max-width: 512px) {
    width: 100vw;
  }
  .container {
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 64px;
    font-family: "Ibarra Real Nova", sans-serif;
    margin: auto;
    margin-bottom: 50px;
    // border: 1px solid red;
    @media (max-width: 768px) {
      width: 58vw;
      padding-top: 52px;
    }
    @media (max-width: 512px) {
      width: 66vw;
      padding-top: 40px;
    }
    .test_info {
      line-height: 35px;
      @media (max-width: 768px) {
        line-height: 34px;
        margin-bottom: 60px;
      }
      @media (max-width: 512px) {
        line-height: 32px;
        margin-bottom: 30px;
      }

      .theme {
        font-size: 33px;
        font-weight: 700;
        letter-spacing: 0.1em;
        @media (max-width: 768px) {
          font-size: 31px;
          letter-spacing: 0.08em;
        }
        @media (max-width: 512px) {
          font-size: 29px;
          letter-spacing: 0.06em;
        }
      }
      .task {
        font-size: 28px;
        font-weight: 400;
        letter-spacing: 0.1em;
        @media (max-width: 768px) {
          font-size: 26px;
          letter-spacing: 0.07em;
        }
        @media (max-width: 512px) {
          font-size: 24px;
          letter-spacing: 0.04em;
        }
      }
    }
    .images {
      margin-top: 70px;
      display: flex;
      @media (max-width: 768px) {
        margin-top: 100px;
      }
      @media (max-width: 512px) {
        margin-top: 150px;
      }
      .dialogue_text {
        width: 200px;
        height: 146px;
        background: #fff4e3;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 10%;
        line-height: 30px;
        border-radius: 50%;
        word-wrap: wrap;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        box-shadow: 0 0 10px grey;
        margin-top: -40px;
        font-family: "Ibarra Real Nova", serif;
        @media (max-width: 768px) {
          margin-top: -150px;
          width: 170px;
          height: 115px;
          font-size: 21px;
        }
        @media (max-width: 512px) {
          margin-top: -150px;
          width: 150px;
          height: 100px;
          font-size: 18px;
        }
      }
      .first_person {
        border-bottom-right-radius: 0;
        margin-right: 39px;
        @media (max-width: 768px) {
          margin-right: -55px;
        }
        @media (max-width: 512px) {
          margin-right: -86px;
        }
      }
      .dialogue_people {
        width: 396px;
        @media (max-width: 768px) {
          width: 345px;
        }
        @media (max-width: 512px) {
          width: 300px;
        }
      }
      .second_person {
        border-bottom-left-radius: 0;
        margin-left: 30px;
        @media (max-width: 768px) {
          margin-left: -95px;
        }
        @media (max-width: 512px) {
          margin-left: -145px;
        }
      }
    }
  }
`;

export const Greeting =styled.div`
  
`

export const VoiceSection = styled.div`
  min-width: 150px;
  margin-top: 26px;
  @media (max-width: 768px) {
  }
  @media (max-width: 512px) {
  }
`;

export const VideoTestStyle = styled.div`
  .test_info {
    .theme {
    }
    .tast {
    }
  }
  .main_test_box {
    margin-top: 60px;
    width: auto;

    iframe {
      width: 945px;
      height: 506px;
    }
    .main_subtitle {
      font-family: "Ibarra Real Nova";
      font-weight: 400;
      font-size: 32px;
      line-height: 101.5%;
      letter-spacing: 0.055em;
      margin-top: 30px;
    }
    .line {
      margin-top: 50px;
    }
  }
`;

export const ReadingTestStyle = styled.div`
  .test_info {
    margin-bottom: 20px;
    .theme {
    }
    .tast {
    }
  }
  .chat_section {
    display: flex;
    flex-direction: column;

    .message {
      width: 100%;
      height: auto;
      display: flex;
      margin: 25px 0;
      .avatar_box {
        display: flex;
        flex-direction: column;
        .avatar_img_box {
          width: 100px;
          height: 100px;
          overflow: hidden;
          border-radius: 50%;
          background: #df1cff;
          margin: 0 20px;
          .avatar_img {
            width: 100%;
          }
        }
        .message_author {
          color: #d67eff;
          font-size: 20px;
          font-weight: 700;
        }
      }
      .message_text_box {
        width: auto;
        height: 100px;
        border-radius: 60px;
        background: #fff4e3;
        padding: 25px 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 24px;
        letter-spacing: 0.1em;
      }
    }
    .first_message {
      .avatar_box {
        .avatar_img_box {
          .avatar_img {
          }
        }
        .message_author {
        }
      }
      .message_text_box {
        border-bottom-left-radius: 0;
      }
    }
    .second_message {
      flex-direction: row-reverse;
      .avatar_box {
        .avatar_img_box {
          .avatar_img {
          }
        }
        .message_author {
        }
      }
      .message_text_box {
        border-bottom-right-radius: 0;
      }
    }
  }
`;

export const MatchingImageStyle = styled.div`
  font-family: "Ibarra Real Nova", sans-serif;
  .test_info {
    margin-bottom: 20px;
    .theme {
    }
    .tast {
    }
  }
  .images_section {
    display: flex;
    flex-direction: column;
    .img_box {
      width: 250px;
      height: 155px;
      margin: 20px auto;
      img {
        width: 100%;
      }
    }
    .test_options_box {
      width: 440px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 200px;
        height: 70px;
        background: #f2beff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 33px;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0.015em;
        cursor: pointer;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
    .test№ {
    }
  }
  .task_texts_box {
    margin-top: 40px;
    .task_title {
      font-weight: 400;
      font-size: 32px;
      letter-spacing: 0.055em;
    }
    .line {
      margin-top: 22px;
      margin-bottom: 18px;
    }
    .task_subtitle {
      font-weight: 400;
      font-size: 24px;
      letter-spacing: 0.015em;
      line-height: 130%;
    }
    .checking_btn {
      margin-top: 46px;
      background: linear-gradient(104.82deg, #c242ff 19.77%, #df1cff 81.27%);
      border: 2px solid transparent;
      border-radius: 11px;
      width: 150px;
      height: 60px;
      color: white;
      font-weight: 600;
      font-size: 24px;
      font-family: "Hind Vadodara";
      letter-spacing: -0.04em;
      &:hover {
        background: transparent;
        color: #c242ff;
        border-color: #c242ff;
      }
    }
  }
`;

export const NumberTestStyle = styled.div`
  font-family: "Hind Siliguri" sans-serif;
  .test_info {
    margin-bottom: 20px;
    .theme {
    }
    .tast {
    }
  }
  .test_content_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .test_content {
      display: flex;
      align-items: center;
      justify-content: center;
      .number_box {
        font-weight: 900;
        font-size: 64px;
        letter-spacing: 0.015em;
        line-height: 130%;
        margin-right: 20px;
      }
      img {
        width: 100px;
      }
    }
    .test№ {
    }
  }
  .test_working_btn {
    width: 254px;
    margin-top: 120px;
    display: flex;
    justify-content: space-between;
    button {
      width: 60px;
      height: 60px;
      border: 3px solid white;
      border-radius: 50%;

      &:hover {
        svg {
          transform: scale(0.8);
        }
      }
      svg {
        transform: scale(0.7);
      }
    }
    .convert {
      background: linear-gradient(
        180deg,
        rgba(0, 59, 218, 1) 0%,
        rgba(0, 108, 230, 1) 30%,
        rgba(0, 148, 239, 1) 50%,
        rgba(0, 176, 243, 1) 70%,
        rgba(0, 212, 254, 1) 100%
      );
    }
    .volume {
      background: #000;
      svg {
        fill: white;
      }
    }
  }
  .task_texts_box {
    margin-top: 20px;
    .task_title {
      font-weight: 400;
      font-size: 32px;
      letter-spacing: 0.055em;
    }
    .line {
      margin-top: 22px;
      margin-bottom: 18px;
    }
    .task_subtitle {
      font-weight: 400;
      font-size: 24px;
      letter-spacing: 0.015em;
      line-height: 130%;
    }
  }
`;
