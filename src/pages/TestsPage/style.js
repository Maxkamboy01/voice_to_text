import styled from "styled-components";

export const TestStyle = styled.div`
  width: ${(props) => (props.ismainOpen ? "77vw" : "100vw")};
  width: ${(props) => (props.isOpen ? "77vw" : "100vw")};
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
      <VideoTestStyle className="container">
      <div className="test_info">
        <h1 className="theme">Grammatika vaqti!</h1>
        <p className="task">
          Quyidagi videoni yaxshilab tushunib, daftaringizga ham yozib
          oling!
        </p>
      </div>
      <div className="main_test_box">
        <iframe
          width="885"
          height="498"
          src="https://www.youtube.com/embed/W-sZo6Gtx_E"
          title="Register and Login Page Tutorial | ReactJs, NodeJS, MySQL (Beginner)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="main_subtitle">
          Ushbu videoni yaxshi tushinmagunizcha qayta-qayta ko’ring, chunki
          keyingi mashqlarda bu bilimlar kerak bo’ladi!
        </p>
        <div className="line"></div>
      </div>
    </VideoTestStyle>
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

export const VoiceSection = styled.div`
  min-width: 150px;
  margin-top: 26px;
  @media (max-width: 768px) {
  }
  @media (max-width: 512px) {
  }
`;

export const NextTestBtnStyle = styled.button`
  width: 170px;
  height: 60px;
  border-radius: 6px;
  float: right;
  margin-left: auto;
  margin-right: 100px;
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: 700;
  background: linear-gradient(104.82deg, #c242ff 19.77%, #df1cff 81.27%);
  box-shadow: 2px 0px 8px rgba(128, 0, 255, 0.23);
  color: white;
  border-color: transparent;
  &:hover {
    background: #e3d6ff;
    border: 2px solid #df1cff;
    color: #df1cff;
    margin-right: 90px;
  }
`;
