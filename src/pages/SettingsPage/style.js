import styled from "styled-components";

export const SettingsPageStyle = styled.div`
  width: ${(props) => (props.ismainOpen ? "77vw" : "100vw")};
  height: auto;
  margin-left: auto;
  padding-bottom: 50px;
  .container {
    width: 100%;
    height: auto;
    .main_title{
        // position:sticky;
        // top: 70px;  
        border-bottom: 1px solid #000;
    }
    .title {
      width: 100%;
      padding: 17px 40px;
      color: #000;
      display:flex;
      align-items:center;
      svg{
        margin: auto 10px;
        transform:scale(0.8);
      }
      h1{
        font-size: 26px;
        font-weight: 300;
        cursor:pointer;
    }
    span{
        text-transform:capitalize;
        font-size: 26px;
        cursor:pointer;
      }
    }
    .account_settings{
        width:100%;
        padding: 10px 40px;
        display: flex;
        font-family: "Ibarra Real Nova", sans-serif;
        .account_settings_menu{
            width: 30%;
            .account_settings_menu_title{
                font-size: 28px;
                font-weight: 700;
                letter-spacing: 0.15em;
                margin-bottom: 40px;
            }
            li{
                font-size: 28px;
                font-weight:300;
                width: 100%;
                height: auto;
                padding: 10px 0 10px 20px;
                position: relative;
                transition:all ease 200ms;
                cursor:pointer; 
                &::before{
                    transition:all ease 300ms; 
                }
                
                &:hover{
                    background: #E3C7FF;
                    &::before{
                        content: "";
                        position:absolute;
                        top:0;
                        left: -30px;
                        width: 45px;
                        height:100%;
                        background:#E276FD;
                        clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
                    }
                }
            }

        }
        .routerpage{
            width:65%;
            background: #F1EBFF;

        }
    }
`;
