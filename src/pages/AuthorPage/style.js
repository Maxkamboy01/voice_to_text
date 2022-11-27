import styled from "styled-components";

export const AuthorpageStyle = styled.div`
  width: ${(props) => (props.ismainOpen ? "77vw" : "100vw")};
  height: auto;
  margin-left: auto;
  font-family: "Ibarra Real Nova";
  padding-bottom: 40px;
  @media (max-width: 768px) {
    width: 100vw;
  }
  @media (max-width: 512px) {
    width: 100vw;
  }
  .container {
    width: 100%;
    padding: 0 100px;
    height: auto;
    @media (max-width: 768px) {
      padding: 0 60px;
    }
    @media (max-width: 512px) {
      padding: 0 30px;
    }
  }
  .header_texts {
    margin-top: 30px;
    margin-bottom: 40px;
    text-align: center;
    line-height: 38px;
    font-family: "Hubballi";
    @media (max-width: 768px) {
      margin-top: 27px;
      margin-bottom: 35px;
      line-height: 35px;
    }
    @media (max-width: 512px) {
      margin-top: 25px;
      margin-bottom: 32px;
      line-height: 33px;
    }
    .page_title {
      font-size: 45px;
      letter-spacing: -1px;
      color: #df1cff;
      @media (max-width: 768px) {
        font-size: 42px;
      }
      @media (max-width: 512px) {
        font-size: 40px;
      }
    }
    .page_subtitle {
      font-size: 28px;
      color: #666;
      line-height: 28px;
      @media (max-width: 768px) {
        font-size: 25px;
        margin-top: 5px;
      }
      @media (max-width: 512px) {
        font-size: 22px;
        margin-top: 8px;
      }
    }
  }
  .members_box {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 32%);
    grid-gap: 1% 20px;
    grid-auto-rows: minmax(100px, auto);
    justify-content: start;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 49%);
    }
    @media (max-width: 512px) {
      grid-template-columns: repeat(1, 95%);
      justify-content: center;
    }
    .member_box {
      width: 100%;
      height: auto;
      margin: auto;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 10px 14px 22px 14px;
      border: 1px solid transparent;
      &:hover {
        border-color: rgb(223, 28, 255);
        box-shadow: 0 0 10px rgba(223, 28, 255, 0.2);
      }
      @media (max-width: 768px) {
        width: 48.5%;
      }
      @media (max-width: 512px) {
        width: 90%;
      }
      .image_box {
        width: 100%;
        height: auto;
        margin-bottom: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        overflow: hidden;
        padding: 5px;
        position:relative;
        @media (max-width: 768px) {
          margin-bottom: 13px;
        }
        @media (max-width: 512px) {
          margin-bottom: 12px;
        }
        .imagetag {
          width: 70%;
          height: auto;
          @media (max-width: 768px) {
          }
          @media (max-width: 512px) {
          }
        }
      }
      .member_name {
        font-size: 24px;
        letter-spacing: -0.5px;
        font-weight: 200;
        @media (max-width: 768px) {
          font-size: 22px;
        }
        @media (max-width: 512px) {
          font-size: 27px;
        }
      }
      .member_job {
        font-size: 22px;
        font-family: "Hubballi";
        color: #df1cff;
        font-weight: 900;
        margin-bottom: 14px;
        @media (max-width: 768px) {
          font-size: 23px;
        }
        @media (max-width: 512px) {
          font-size: 25px;
        }
      }
      .member_desc {
        font-size: 20px;
        line-height: 20px;
        color: #555;
        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 18px;
        }
        @media (max-width: 512px) {
          font-size: 22px;
          line-height: 22px;
        }
      }
      .member_sm_links {
        width: 60%;
        margin: auto;
        margin-top: 14px;
        display: flex;
        justify-content: space-evenly;
        @media (max-width: 768px) {
          width: 70%;
        }
        @media (max-width: 512px) {
          width: 77%;
        }
        .member_link_box {
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          &:hover {
            background-color: rgba(0, 0, 0, 0.4);
            svg {
              // fill: #df1cff;
              fill: white;
            }
          }
          @media (max-width: 768px) {
            padding: 12px;
          }
          @media (max-width: 512px) {
            padding: 14px;
          }
          svg {
            transform: scale(1.3);
            transition-duration: 0s;
            @media (max-width: 768px) {
              transform: scale(1.4);
            }
            @media (max-width: 512px) {
              transform: scale(1.5);
            }
          }
        }
      }
      .line {
        width: 111px;
        margin-top: 14px;
        @media (max-width: 768px) {
          width: 135px;
        }
        @media (max-width: 512px) {
          width: 144px;
        }
      }
    }
  }
`;
