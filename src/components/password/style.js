import styled from "styled-components";

export const PasswordStyle = styled.div`
  width: !00%;
  height: auto;
  .title {
    font-size: 35px;
    font-weight: 300;
    color: #000;
    text-align-center;
    }
  .inputs {
    display: flex;
    flex-direction: column;
    margin-top:50px;
    margin-left:35px;
    label {
      font-family: "Hind Vadodara", sans-serif;
      margin-left: 10px;
      font-size: 24px;
      font-weight: 400;
      margin-top: 10px;
      color: #5b5b5b;
    }
    input {
      width: 95%;
      text-indent: 10px;
      font-size: 20px;
      padding: 12px 0 12px 0;
      border-radius: 6px;
      color: #868686;
      border: 1px solid #868686;
      letter-spacing: 0.1em;
    }
  }
  .buttons {
    margin-top: 50px;
    margin-bottom: 30px;
    float: right;
    display: flex;
    padding-right: 70px;
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
