import styled from "styled-components";

export const SettinglangStyle = styled.div`
    width:100%;
    height:auto;
    font-family: "Ibarra Real Nova" sans-serif;
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
    .inputs{
        display: flex;
        flex-direction: column;
        margin-left: 30px;
        label {
          margin-left: 10px;
          font-family: "Hind Vadodara", sans-serif;
            font-size: 24px;
            font-weight: 400;
            margin-top: 40px;
            margin-bottom: 10px;
            color: #5b5b5b;
        }
        select {
            appearance: none;
            border: 1px solid #868686;
            outline: 0;
            font-size: 18px;
            font-family: "Hind Vadodara" sans-serif;
            width: 96%;
            height: 3em;
            padding: 0 4em 0 1em;
            border-radius: 0.25em;
            box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
            color: #868686;
            cursor: pointer;
            option {
                color: #868686;
                background-color: rgba(255,255,255, 0.7);
            }
            &:focus {
                line: none;
            }
            &::-ms-expand {
                display: none;
            }
        }
    }
    .buttons {
        margin-left:auto;
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
