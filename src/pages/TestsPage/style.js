import styled from "styled-components";

export const TestStyle = styled.div`
  width: auto;
  min-height: 100vh;
  background-color: #e3d6ff;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  .container {
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 64px;
    font-family: "Ibarra Real Nova", sans-serif;
    .test_info {
      line-height: 35px;
      .theme {
        font-size: 33px;
        font-weight: 700;
        letter-spacing: 0.1em;
      }
      .task {
        font-size: 28px;
        font-weight: 400;
        letter-spacing: 0.1em;
      }
    }
    .images {
      margin-top: 70px;
      display: flex;
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
      }
      .first_person {
        border-bottom-right-radius: 0;
        margin-right: 39px;
      }
      .dialogue_people {
        width: 396px;
      }
      .second_person {
        border-bottom-left-radius: 0;
        margin-left: 39px;
      }
    }
  }
`;

export const VoiceSection = styled.div`
  min-width: 150px;
  margin-top: 26px;
`;
