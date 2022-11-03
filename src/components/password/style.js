import styled from "styled-components";

export const PasswordStyle = styled.div`
  width: !00%;
  height: auto;
  .title {
    font-size: 35px;
    font-weight: 300;
    color: #000;
    text-align: center;
    @media (max-width: 768px) {
    }
  }
  .inputs {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 35px;
    label {
      font-family: "Hind Vadodara", sans-serif;
      margin-left: 10px;
      font-size: 24px;
      font-weight: 400;
      margin-top: 11px;
      color: #5b5b5b;
      @media (max-width: 768px) {
        margin: auto;
        font-size: 22px;
      }
      @media (max-width: 512px) {
        margin: auto;
        font-size: 20px;
      }
    }
    input {
      width: 95%;
      text-indent: 10px;
      font-size: 20px;
      padding: 12px 0;
      border-radius: 6px;
      color: #868686;
      border: 1px solid #868686;
      letter-spacing: 0.1em;
      @media (max-width: 768px) {
        width: 96%;
        text-indent: 8px;
        letter-spacing: 0.7px;
        padding: 11px 0;
      }
    }
  }
  .buttons {
    margin-top: 50px;
    margin-bottom: 30px;
    float: right;
    display: flex;
    padding-right: 70px;
    @media (max-width: 768px) {
      margin-top: 40px;
      margin-bottom: 27px;
      padding: auto;
      float: center;
    }

    @media (max-width: 512px) {
      margin-top: 35px;
      margin-bottom: 25px;
      padding: auto;
      float: center;
    }
    button {
      width: auto;
      padding: 15px 30px;
      color: white;
      border: 3px solid transparent;
      transition: all ease 300ms;
      border-radius: 11px;
      font-size: 20px;
    }
    .cancel_btn {
      background: transparent;
      border-color: #c242ff;
      color: #c242ff;
      margin-right: 20px;
      @media (max-width: 768px) {
        margin: auto;
        margin-right: 10px;
      }
      &:hover {
        background: linear-gradient(104.82deg, #c242ff 19.77%, #df1cff 81.27%);
        color: white;
        border-color: transparent;
      }
    }
    .save_btn {
      background: linear-gradient(104.82deg, #c242ff 19.77%, #df1cff 81.27%);
      &:hover {
        background: transparent;
        border-color: #c242ff;
        color: #c242ff;
      }
    }
  }
`;
