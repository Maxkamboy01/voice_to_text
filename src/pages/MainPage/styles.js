import styled from "styled-components";

export const MainPagestyle = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
`;

export const SidebarStyle = styled.ul`
  width: 356px;
  height: auto;
  float: left;
  background: #fff;
  position: fixed;
  top: 70px;
  left: ${(props) => (props.isOpen ? "0" : "-50vw")};
  font-weight: 100;
  border-radius: 4px;
  box-shadow: 0 0 10px grey;
  transition: all ease 500ms;
  z-index: 123;
  padding-bottom: 40px;
  font-family: "Ibarra Real Nova", sans-serif;

  @media (max-width: 768px) {
    width: 288px;
    top: 66px;
    padding-bottom: 35px;
    left: ${(props) => (props.isOpen ? "0" : "-70vw")};
  }
  @media (max-width: 512px) {
    width: 220px;
    top: 66px;
    padding-bottom: 30px;
    left: ${(props) => (props.isOpen ? "0" : "-70vw")};
  }
  .lesson_info {
    font-size: 20px;
    font-weight: 100;
    text-transform: uppercase;
    line-height: 26px;
    @media (max-width: 768px) {
      line-height: 24px;
      font-size: 18px;
    }
    @media (max-width: 512px) {
      line-height: 22px;
      font-size: 16px;
    }

    h3 {
      text-transform: capitalize;
    }
  }
  li {
    font-size: 20px;
    padding: 17px 140px 17px 30px;
    border-bottom: 1.8px solid #e5bef3;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 18px;
      padding: 15px 84px 15px 25px;
    }

    @media (max-width: 512px) {
      font-size: 16px;
      padding: 14px 44px 14px 20px;
    }
    &:hover {
      background-color: #e5bef3;
      a {
        svg {
          color: white;
        }
      }
    }
    a {
      width: 100%;
      height: 100%;
      svg {
        transition-duration: 0s;
      }
    }
  }
`;

export const Mainsidebarstyle = styled.ul`
  width: 356px;
  height: 100vh;
  float: left;
  background: #e0baee;
  position: fixed;
  top: 70px;
  left: ${(props) => (props.ismainOpen ? "0" : "-356px")};
  border-radius: 4px;
  box-shadow: 0 0 10px grey;
  transition: all ease 500ms;
  z-index: 122;
  padding-bottom: 20px;
  font-family: "Ibarra Real Nova", sans-serif;
  @media (max-width: 768px) {
    width: 288px;
    height: 96vh;
    top: 66px;
    padding-bottom: 18px;
    left: ${(props) => (props.ismainOpen ? "0" : "-70vw")};
    z-index: 111;
  }
  @media (max-width: 512px) {
    width: 220px;
    height: 93vh;
    top: 60px;
    padding-bottom: 16px;
    left: ${(props) => (props.ismainOpen ? "0" : "-70vw")};
    z-index: 111;
  }
  li {
    transition: all ease 500ms;
    width: 100%;
    height: 74px;
    display: flex;
    align-items: center;
    &:hover {
      background: #e392ff;
      h2 {
        color: white;
      }
    }
    @media (max-width: 768px) {
      height: 70px;
    }
    @media (max-width: 512px) {
      height: 66px;
    }

    &:nth-child(1) {
      margin-top: 30px;
    }

    &:nth-child(4) {
      margin-bottom: 150px;
      @media (max-width: 768px) {
        margin-bottom: 166px;
      }
      @media (max-width: 512px) {
        margin-bottom: 188px;
      }
    }

    a {
      display: flex;
      align-items: center;
      color: black;
      font-weight: 100;
      svg {
        transform: scale(0.7);
        margin-left: 20px;
        margin-right: 10px;
        @media (max-width: 768px) {
          margin-left: 16px;
        }
        @media (max-width: 512px) {
          margin-right: 12px;
        }
      }
      h2 {
        font-size: 24px;
        transition: all ease 400ms;
        @media (max-width: 768px) {
          font-size: 21px;
        }
        @media (max-width: 512px) {
          font-size: 18px;
        }
      }
    }
  }
`;
