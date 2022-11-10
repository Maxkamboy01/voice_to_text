import styled from "styled-components";

export const NavbarStyle = styled.div`
  width: 100vw;
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
  position: sticky;
  top:0;
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
    position: relative;
    right: 30px;
    @media (max-width: 768px) {
      right: 23px;
    }
    @media (max-width: 512px) {
      right: 20px;
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
    padding-bottom: 42px;
  }
  @media (max-width: 512px) {
    padding-bottom: 45px;
  }

  .menu_header {
    font-size: 22px;
    font-weight: 400;
    line-height: 8px;
    margin-bottom: 20px;
    padding: 25px 22px;
    padding-bottom: 0;

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
      font-size: 22px;
      padding: 5px 22px;
      transition: all ease 300ms;
      @media (max-width: 768px) {
        margin-top: 11px;
        font-size: 23px;
        padding: 6px 24px;
      }
      @media (max-width: 512px) {
        margin-top: 13px;
        font-size: 25px;
        padding: 7px 26px;
      }
      &:hover {
        background-color: #e3d6ff;
        a {
          color: #333;
        }
      }
      a {
        color: black;
        transition: all ease 300ms;
      }
    }
  }
`;
