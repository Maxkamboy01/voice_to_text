import styled from "styled-components";

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
        @media(max-width: 768px){
          font-size: 58px;
          margin:right: 17px;
        }
        
        @media(max-width: 512px){
          font-size: 55px;
          margin:right: 15px;
        }
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

export const Scoresection = styled.div`
  font-family: "Ibarra Real Nova", sans-serif;
  div {
    font-size: 24px;
    font-weight: 100;
    margin-bottom: 10px;
    @media (max-width: 768px) {
      font-size: 22px;
      margin-bottom: 8px;
    }
    @media (max-width: 512px) {
      font-size: 20px;
      margin-bottom: 7px;
    }
  }
  .button {
    width: auto;
    height: 42px;
    font-size: 20px;
    padding: 10px 13px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: 2px solid #df1cff;
    border-radius: 4px;
    color: #555;
    transition: all ease 300ms;
    @media (max-width: 768px) {
      font-size: 18px;
      padding: 8px 11px;
    }
    @media (max-width: 512px) {
      font-size: 17px;
      padding: 7px 10px;
    }
    &:hover {
      background: #df1cff;
      color: white;
      svg {
        fill: white;
      }
    }
    svg {
      transition: all ease 00ms;
      margin: auto;
      margin-left: 5px;
    }
  }
`;
