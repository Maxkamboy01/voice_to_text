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
  .sidebar_btn {
    font-size: 32px;
    cursor: pointer;
  }

  .logo {
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.1em;
    font-family: 'Hubballi', cursive;
    .english {
      color: blue;
      font-weight: 400;
    }
  }
  .profile {
    margin-right: 35px;
    position: relative;
    .avatar_img {
      width: 45px;
      transition: all ease 300ms;
      cursor: pointer;
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
  font-family: 'Hubballi', cursive;
  .menu_header {
    font-size: 20px;
    font-weight: 400;
    line-height: 8px;
    margin-bottom: 20px;
  }
  ul {
    li {
      margin-top: 9px;
      font-size: 20px;
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
    left: ${(props) => (props.isOpen ? "0" : "-40vw")};
  }
  .lesson_info {
    line-height: 26px;
    h2 {
      font-size: 20px;
      font-weight: 100;
      text-transform: uppercase;
      @media (max-width: 512px) {
        font-size: 17px;
      }
    }
    h3 {
      font-size: 20px;
      font-weight: 100;
      @media (max-width: 512px) {
        font-size: 17px;
      }
    }
  }
  li {
    font-size: 20px;
    padding: 17px 140px 17px 20px;
    border-bottom: 1.8px solid #e5bef3;
    cursor:pointer;
    @media (max-width: 512px) {
      font-size: 16px;
      padding: 14px 44px 14px 14px;
    }
  }
`;
