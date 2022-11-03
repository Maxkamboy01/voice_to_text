import styled from "styled-components";

export const PersonalInfoStyle = styled.div`
  width: 100%;
  height: auto;
  font-family: "Ibarra Real Nova", sans-serif;
  .title {
    font-size: 35px;
    font-weight: 300;
    color: #000;
    margin-bottom: 10px;
    @media (max-width: 768px) {
      font-size: 32px;
      text-align: center;
    }
    @media (max-width: 512px) {
      font-size: 30px;
      text-align: center;
    }
  }
  label {
    font-family: "Hind Vadodara", sans-serif;
    margin-left: 10px;
    font-size: 24px;
    font-weight: 400;
    margin-top: 10px;
    color: #5b5b5b;
    @media (max-width: 768px) {
      font-size: 22px;
      margin: auto;
    }
    @media (max-width: 512px) {
      font-size: 20px;
      margin: auto;
    }
  }
  input {
    text-indent: 10px;
    font-size: 20px;
    padding: 12px 0;
    border-radius: 6px;
    color: #868686;
    border: 1px solid #868686;
    letter-spacing: 0.1em;
    @media (max-width: 768px) {
      font-size: 21px;
      padding: 11px 0;
      text-indent: 8px;
      letter-spacing: 0.7px;
    }
    @media (max-width: 512px) {
      font-size: 22px;
      padding: 19px 0;
      letter-spacing: 0.5px;
    }
  }
  .details_box {
    width: 100%;
    @media (max-width: 768px) {
    }
    @media (max-width: 512px) {
    }
    .foto_name_box {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      @media (max-width: 768px) {
        flex-wrap: wrap;
      }
      @media (max-width: 512px) {
        flex-wrap: wrap;
      }
      .image_upload_box {
        width: 200px;
        height: 200px;
        border: 5px solid #4b0bff;
        background: #d9d9d9;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
        @media (max-width: 768px) {
        }
        @media (max-width: 512px) {
          width: 220px;
          height: 220px;
        }
        svg {
          transform: scale(1.5);
        }
      }
      .name_surname {
        display: flex;
        flex-direction: column;
        .input {
          width: 333px;
          text-transform: capitalize;
          @media (max-width: 768px) {
            width: 456px;
          }
          @media (max-width: 512px) {
            width: 356px;
          }
        }
      }
    }
    .contactdetails_box {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      width: 85%;
      margin: auto;
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 512px) {
        width: 100%;
      }
      label {
        @media (max-width: 768px) {
          margin: auto;
        }
        @media (max-width: 512px) {
          margin: auto;
        }
      }
      .email {
        width: 96%;
        margin: auto;
        @media (max-width: 768px) {
          font-size: 21px;
          padding: 11px 0;
          text-indent: 8px;
          letter-spacing: 0.7px;
        }
        @media (max-width: 512px) {
          font-size: 22px;
          padding: 19px 0;
          letter-spacing: 0.5px;
        }
      }
      .phonenumber {
        display: flex;
        justify-content: space-between;
        width: 96%;
        margin: auto;
        @media (max-width: 768px) {
          margin: auto;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
        @media (max-width: 512px) {
          margin: auto;
          flex-wrap: wrap;
        }
        .phone_input {
          width: 76%;
          display: flex;
          flex-direction: column;
          @media (max-width: 768px) {
            width: 100%;
          }
          @media (max-width: 512px) {
            margin: auto;
            width: 100%;
          }
          input {
            width: 100%;
            margin-right: auto;
          }
        }
        .sendnumber {
          width: 23%;
          height: 48px;
          font-family: "Hind Vadodara";
          letter-spacing: 0.225em;
          margin-top: auto;
          padding: 16px 40px;
          color: white;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            104.82deg,
            #c242ff 19.77%,
            #df1cff 81.27%
          );
          border-radius: 11px;
          border: 3px solid transparent;
          transition: all ease 3ooms;
          @media (max-width: 768px) {
            margin: auto;
            margin-top: 12px;
          }
          @media (max-width: 512px) {
            margin: auto;
            margin-top: 12px;
          }
          &:hover {
            background: transparent;
            border-color: #c242ff;
            color: #c242ff;
          }
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
          background: linear-gradient(
            104.82deg,
            #c242ff 19.77%,
            #df1cff 81.27%
          );
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
  }
`;
