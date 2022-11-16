import styled from "styled-components";

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
