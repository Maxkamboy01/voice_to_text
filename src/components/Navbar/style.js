import styled from "styled-components";

export const NavbarStyle = styled.div`
  width: auto;
  height: 70px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(246, 208, 255);
  background: linear-gradient(
    90deg,
    rgba(246, 208, 255, 1) 0%,
    rgba(251, 220, 255, 1) 34%,
    rgba(248, 210, 255, 1) 66%,
    rgba(242, 190, 255, 1) 100%
  );
  box-shadow: 0 0 10px grey;
  z-index: 1111;
  position: relative;
  @media (max-width: 768px) {
    width: 100vw;
    height: 66px;
    padding-left: 18px;
  }
  @media (max-width: 512px) {
    width: 100vw;
    height: 60px;
    padding-left: 16px;
  }
  .sidebar_btn {
    font-size: 32px;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 512px) {
      font-size: 28px;
    }
  }

  .logo {
    width: 150px;
    @media (max-width: 768px) {
      width: 135px;
    }
    @media (max-width: 512px) {
      width: 120px;
    }
  }
  .profile {
    margin-right: 35px;
    position: relative;
    @media (max-width: 768px) {
      margin-right: 33px;
    }
    @media (max-width: 512px) {
      margin-right: 30px;
    }
    .avatar_img {
      width: 45px;
      transition: all ease 300ms;
      cursor: pointer;
      @media (max-width: 768px) {
        width: 42px;
      }
      @media (max-width: 512px) {
        width: 40px;
      }
      &:hover {
        transform: scale(1.08);
      }
    }
  }
`;

// PROFILE MENU STYLES
export const ProfileStyles = styled.div`
  width: auto;
  padding: 20px;
  padding-bottom: 40px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  top: 65px;
  right: 0px;
  transform: scale(${(props) => (props.profOpened ? 1 : 0)});
  transition: all ease 400ms;
  z-index: 123;
  font-family: "Hubballi", cursive;
  @media (max-width: 768px) {
    padding: 23px;
    padding-bottom: 42px;
  }
  @media (max-width: 512px) {
    padding: 25px;
    padding-bottom: 45px;
  }

  .menu_header {
    font-size: 20px;
    font-weight: 400;
    line-height: 8px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 24px;
    }
    @media (max-width: 512px) {
      font-size: 27px;
    }
  }
  ul {
    li {
      margin-top: 9px;
      font-size: 20px;
      @media (max-width: 768px) {
        margin-top: 11px;
        font-size: 23px;
      }
      @media (max-width: 512px) {
        margin-top: 13px;
        font-size: 25px;
      }
      a {
        color: black;
      }
    }
  }
`;

// SIDEBAR STYLES

export const SidebarStyle = styled.ul`
  width: 356px;
  height: auto;
  float: left;
  background: #fff;
  position: absolute;
  top: 70px;
  left: ${(props) => (props.isOpen ? "0" : "-30vw")};
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
    left: ${(props) => (props.isOpen ? "0" : "-60vw")};
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
  }
`;
