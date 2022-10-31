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
  }

  .acc_list {
    width: 80%;
    margin: 50px auto 30px auto;
    font-family: "Hind Vadodara", sans-serif;

    li {
      display: flex;
      justify-content: space-between;
      padding-bottom: 0px;
      border-bottom: 1px solid #868686;
      margin-bottom: 14px;
      cursor:pointer;
      .acc_icon {
        img {
          width: 40px;
          height: 40px;
        }
      }
      .acc_text {
        text-transform: capitalize;
        font-size: 24px;
        font-weight: 400;
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
