import styled from "styled-components";

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
      @media (max-width: 768px) {
        margin: 22px 0;
      }
      @media (max-width: 512px) {
        margin: 20px 0;
      }
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
          @media (max-width: 768px) {
            width: 90px;
            height: 90px;
          }
          @media (max-width: 512px) {
            width: 85px;
            height: 85px;
          }
          .avatar_img {
            width: 100%;
          }
        }
        .message_author {
          color: #d67eff;
          font-size: 20px;
          font-weight: 700;
          @media (max-width: 768px) {
            font-size: 19px;
          }
          @media (max-width: 512px) {
            font-size: 18px;
          }
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
        @media (max-width: 768px) {
          height: 90px;
          padding: 22px 35px;
          font-size: 22px;
          font-weight: 500;
        }
        @media (max-width: 512px) {
          height: 85px;
          padding: 20px 32px;
          font-size: 18px;
          font-weight: 600;
        }
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

export const VoiceSection = styled.div`
  min-width: 150px;
  margin-top: 26px;
  @media (max-width: 768px) {
  }
  @media (max-width: 512px) {
  }
`;
