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
  }
  label {
    font-family: "Hind Vadodara", sans-serif;
    margin-left: 10px;
    font-size: 24px;
    font-weight: 400;
    margin-top: 10px;
    color: #5b5b5b;
  }
  input {
    text-indent: 10px;
    font-size: 20px;
    padding: 12px 0 12px 0;
    border-radius: 6px;
    color: #868686;
    border: 1px solid #868686;
    letter-spacing: 0.1em;
  }
  .details_box {
    width: 100%;
    .foto_name_box {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
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
        }
      }
    }
    .contactdetails_box {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      width: 85%;
      margin: auto;
      .email {
        width: 100%;
      }
      .phonenumber {
        display: flex;
        width: 100%;
        .phone_input {
          width: 100%;

          display: flex;
          justify-content: space-between;
          flex-direction: column;
          input {
            width: 77%;
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
