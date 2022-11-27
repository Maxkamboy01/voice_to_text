import styled from "styled-components";

export const GalleryStyles = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: ${(props) => (props.setgalleryOpened ? 0 : "-100vh")};
  left: 0;
  z-index: 22222;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Hubballi", sans-serif;
  font-weight: 100;
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .main_box {
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    img {
      width: 17px;
      height: 440px;
      object-fit: cover;
      border-radius: 5px;
      margin: 14px 0 17px 0;
      z-index: 44444;
      @media (max-width: 768px) {
        width: 440px;
        height: 12px;
        &:hover {
          height: 440px;
          width: 440px !important;
        }
      }
      &:hover {
        width: 222px;
      }
    }
    form {
      width: 100%;
      height: auto;
      padding: 14px 20px;
      background-color: white;
      z-index: 33333;
      position: relative;
      margin: auto;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 35px;
        color: #df1cff;
        letter-spacing: -1px;
        margin-bottom: 20px;
      }
      label {
        font-size: 24px;
        text-align: left;
      }
      input {
        width: 100%;
        height: 44px;
        font-size: 24px;
        text-indent: 10px;
        margin: 14px auto;
        margin-top: 0;
        border: 1px solid #df1cff;
        background: transparent;
        text-transform: lowercase;
      }
      button {
        width: 30%;
        padding: 13px 20px;
        background: transparent;
        border: 1px solid #df1cff;
        font-size: 24px;
        margin: auto;
        &:hover {
          background: #df1cff;
          border-color: transparent;
          color: white;
          transform: translateX(-10px);
        }
      }
    }
  }
`;
