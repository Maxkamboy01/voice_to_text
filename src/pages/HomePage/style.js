import styled from "styled-components";

export const HomePageStyle = styled.div`
  width: ${(props) => (props.ismainOpen ? "77vw" : "100vw")};
  height: auto;
  margin-left: auto;
  .container {
    width: 100%;
    height: auto;
    .title {
      width: 100%;
      padding: 17px 40px;
      border-bottom: 1px solid #000;
      color: #000;
      font-size: 26px;
    }
    .opened_parts {
      width: auto;
      height: auto;
      padding: 40px;
      padding-bottom: 0;
      .opened_text {
        font-size: 22px;
        font-weight: 100;
        color: #636161;
      }
      .opened_courses {
        width: auto;
        box-shadow: 0 0 10px grey;
        margin-top: 24px;
        border-radius: 15px;
        .courses {
          margin-top: 30px;
          background: #fde2ff;
          border-radius: 15px;
          &:last-child{
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
            .course_title {
              font-family: "Hubballi", sans-serif;
              font-size: 45px;
              font-weight: 200;
            }
            .titleOpenIcon {
              width: 40px;
              height: 40px;
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
    }
  }
`;

export const CourseLessons = styled.ul`
  width: auto;
  overflow: hidden;
  padding: 20px 50px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
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
    a {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #000;
      .lesson_theme {
        font-size: 22px;
        font-weight: 200;
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
