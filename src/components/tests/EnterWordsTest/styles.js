import styled from "styled-components";

export const EnterWordsStyle = styled.div`
  font-family: "Hind Siliguri" sans-serif;
  .test_info {
    margin-bottom: 20px;
    .theme {
    }
    .tast {
    }
  }
  .enter_word_box {
  }
`;

export const FormBoxStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  .message_box {
    width: 400px;
    height: 100px;
    background-color: #fff4e3;
    border-radius: 50px;
    padding: 25px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.1em;
    margin: 20px;
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
      b {
        font-size: 25px;
        text-shadow: 0 0 2px grey;
      }
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

export const MatchingImgInput = styled.input`
  margin: auto 5px;
  font-size: 24px;
  width: 126px;
  height: 26px;
  background-color: ${(props) => (props.correctValue ? "#fff" : "transparent")};
  border: 1px solid ${(props) => (props.correctValue ? "green" : "red")};
  border-radius: 10px;
  text-indent: 6px;
  text-align: center;
  text-transform: lowercase;
  &:focus {
    box-shadow: 0 0 4px lightgrey;
  }
`;
