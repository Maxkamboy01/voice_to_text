import styled from "styled-components";

export const LinkedaccStyle = styled.div`
  width: 100%;
  height: auto;
  font-family: "Ibarra Real Nova", sans-serif;
  .title {
    font-size: 35px;
    font-weight: 300;
    color: #000;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 32px;
      text-align: center;
    }
    @media (max-width: 512px) {
      font-size: 30px;
      text-align: center;
    }
  }

  .acc_list {
    width: 80%;
    margin: 50px auto 30px auto;
    font-family: "Hind Vadodara", sans-serif;
    @media (max-width: 768px) {
      width: 90%;
    }
    @media (max-width: 512px) {
      width: 95%;
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items:center;
      padding-bottom: 0px;
      border-bottom: 1px solid #868686;
      margin-bottom: 14px;
      cursor: pointer;
      @media (max-width: 768px) {
      }
      @media (max-width: 512px) {
      }
      .acc_icon {
        img {
          width: 40px;
          height: 40px;
          @media (max-width: 768px) {
            width: 35px;
            height: 35px;
          }
          @media (max-width: 512px) {
            width: 32px;
            height: 32px;
          }
        }
      }
      .acc_text {
        text-transform: capitalize;
        font-size: 24px;
        font-weight: 400;
        @media (max-width: 768px) {
          margin-left: 5px;
          font-size: 22px;
        }
        @media (max-width: 512px) {
          margin-left: 5px;
          font-size: 20px;
        }
        .acc_name {
        }
        .acc_connection {
        }
      }
      .acc_con_discon_icon {
        svg {
          fill: #4bae4f;
          
        }
      }
    }
  }

  .buttons {
    margin-left: auto;
    margin-top: 100px;
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
