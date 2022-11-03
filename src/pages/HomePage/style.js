import styled from "styled-components";

export const HomePageStyle = styled.div`
  width: ${(props) => (props.ismainOpen ? "77vw" : "100vw")};
  height: auto;
  margin-left: auto;
  @media (max-width: 768px) {
    width: ${(props) => (props.ismainOpen ? "68vw" : "100vw")};
  }
  @media (max-width: 512px) {
    width: ${(props) => (props.ismainOpen ? "60vw" : "100vw")};
  }
  .container {
    width: 100%;
    height: auto;
    .title {
      width: 100%;
      padding: 17px 40px;
      padding-left: 20px;
      border-bottom: 1px solid #000;
      color: #000;
      font-size: 26px;
      @media (max-width: 768px) {
        padding: 16px 36px;
        padding-left: 19px;
        font-size: 27px;
      }
      @media (max-width: 512px) {
        padding: 15px 33px;
        padding-left: 18px;
        font-size: 28px;
      }
    }
    .opened_parts {
      width: auto;
      height: auto;
      padding: 40px;
      padding-bottom: 0;
      @media (max-width: 768px) {
        height: 70px;
        padding: 36px;
        padding-left: 19px;
      }
      @media (max-width: 512px) {
        height: 66px;
        padding: 33px;
        padding-left: d18px;
      }
      .opened_text {
        font-size: 22px;
        font-weight: 100;
        color: #636161;
        @media (max-width: 768px) {
          font-size: 23px;
          font-weight: 200;
        }
        @media (max-width: 512px) {
          font-size: 24px;
          font-weight: 300;
        }
      }
      .opened_courses {
        width: auto;
        box-shadow: 0 0 10px lightgrey;
        margin-top: 24px;
        border-radius: 15px;
        @media (max-width: 768px) {
          margin-top: 22px;
        }
        @media (max-width: 512px) {
          margin-top: 20px;
        }
        .courses {
          margin-top: 30px;
          background: #fde2ff;
          border-radius: 15px;
          @media (max-width: 768px) {
            margin-top: 28px;
          }
          @media (max-width: 512px) {
            margin-top: 25px;
          }
          &:last-child {
            margin-bottom: 50px;
          }
          .courses_title {
            padding: 20px 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #feeaff;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            border-bottom-right-radius: ${(props) =>
              props.istitleOpen ? "0" : "15px"};
            border-bottom-left-radius: ${(props) =>
              props.istitleOpen ? "0" : "15px"};
            box-shadow: 0 0 10px grey;
            cursor: pointer;
            @media (max-width: 768px) {
              padding: 19px 40px;
            }
            @media (max-width: 512px) {
              padding: 18px 35px;
            }
            .course_title {
              font-family: "Hubballi", sans-serif;
              font-size: 45px;
              font-weight: 200;
              @media (max-width: 768px) {
                font-size: 42px;
              }
              @media (max-width: 512px) {
                font-size: 38px;
              }
            }
            .titleOpenIcon {
              width: 40px;
              height: 40px;
              @media (max-width: 768px) {
                width: 38px;
                height: 38px;
              }
              @media (max-width: 512px) {
                width: 36px;
                height: 36px;
              }
              svg {
                transform: scale(1.1);
                &:hover {
                  transform: scale(1.25);
                }
              }
            }
          }
        }
      }
    }
    .closed_parts {
      background: transparent;
      box-shadow: 0 0 0 transparent;
      .opened_courses {
        width: auto;
        box-shadow: 0 0 0 transparent;
        .courses {
          margin-top: 30px;
          background: #fde2ff;
          @media (max-width: 768px) {
            margin-top: 28px;
          }
          @media (max-width: 512px) {
            margin-top: 26px;
          }
        }
      }
    }
  }
`;

export const CourseLessons = styled.ul`
  width: auto;
  overflow: hidden;
  padding: 20px 50px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  @media (max-width: 768px) {
    padding: 17px 40px;
  }
  @media (max-width: 512px) {
    padding: 15px 30px;
  }
  li {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    background: #fff;
    margin: 14px auto;
    box-shadow: 0 0 10px grey;
    border-radius: 10px;
    padding: 15px 20px;
    cursor: pointer;
    font-weight: 100;
    @media (max-width: 768px) {
      height: 74px;
      padding: 15px 18px;
    }
    @media (max-width: 512px) {
      height: 77px;
      padding: 15px 17px;
    }
    a {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #000;

      .lesson_theme {
        font-size: 22px;
        font-weight: 200;
        @media (max-width: 768px) {
          font-size: 20px;
          font-weight: 300;
        }
        @media (max-width: 512px) {
          font-size: 19px;
          font-weight: 400;
        }
      }
      .continue_btn {
        width: auto;
        background: #df1cff;
        border-radius: 14px;
        font-weight: 700;
        font-size: 14px;
        border: none;
        padding: 7px 10px;
        color: white;
        cursor: pointer;
        border: 2px solid transparent;
        @media (max-width: 768px) {
          border-radius: 13px;
          font-size: 15px;
          border:none;
        }
        @media (max-width: 512px) {
          border-radius: 12px;
          font-size: 16px;
          border:none;
        }
        &:hover {
          border-color: #dc45f3;
          background: #fff;
          color: #dc45f3;
          svg {
            fill: #dc45f3;
          }
        }
        svg {
          transition-duration: 0ms;
          fill: #fff;
        }
      }
    }
  }
`;
