import styled from "styled-components";

export const SettingsPageStyle = styled.div`
  width: ${(props) => (props.ismainOpen ? "77vw" : "100vw")};
  height: auto;
  margin-left: auto;
  padding-bottom: 50px;
  @media (max-width: 768px) {
    width: ${(props) => (props.ismainOpen ? "66vw" : "100vw")};
  }
  @media (max-width: 512px) {
    width: ${(props) => (props.ismainOpen ? "60vw" : "100vw")};
  }
  .container {
    width: 100%;
    height: auto;
    .main_title {
      // position:sticky;
      // top: 70px;
      border-bottom: 1px solid #000;
    }
    .title {
      width: 100%;
      padding: 17px 40px;
      color: #000;
      display: flex;
      align-items: center;
      svg {
        margin: auto 10px;
        transform: scale(0.8);
      }
      h1 {
        font-size: 26px;
        font-weight: 300;
        cursor: pointer;
        @media (max-width: 768px) {
          font-size: 25px;
          font-weight: 400;
        }
        @media (max-width: 512px) {
          font-size: 25px;
          font-weight: 400;
        }
      }
      span {
        text-transform: capitalize;
        font-size: 26px;
        cursor: pointer;

        @media (max-width: 768px) {
          font-size: 25px;
        }
        @media (max-width: 512px) {
          font-size: 24px;
        }
      }
    }
    .account_settings {
      width: 100%;
      padding: 10px 40px;
      display: flex;
      flex-wrap: wrap;
      font-family: "Ibarra Real Nova", sans-serif;
      @media (max-width: 768px) {
        padding: 10px 35px;
      }
      @media (max-width: 512px) {
        padding: 10px 30px;
      }
      .account_settings_menu {
        width: 30%;
        @media (max-width: 768px) {
          width: 360px;
          margin: auto;
        }
        @media (max-width: 512px) {
          width: 300px;
          margin: auto;
        }
        .account_settings_menu_title {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 0.15em;
          margin-bottom: 40px;
          @media (max-width: 768px) {
            
          }
          @media (max-width: 512px) {
          }
        }
        li {
          font-size: 28px;
          font-weight: 300;
          width: 100%;
          height: auto;
          padding: 10px 0 10px 20px;
          position: relative;
          transition: all ease 200ms;
          cursor: pointer;
          &::before {
            transition: all ease 300ms;
          }

          &:hover {
            background: #e3c7ff;
            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: -30px;
              width: 45px;
              height: 100%;
              background: #e276fd;
              clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
            }
          }
        }
      }
    }
    .routerpage {
      width: 65%;
      background: #f1ebff;
    }
  }
`;
