import styled from "styled-components";

export const HelppageStyle = styled.div`
  width: ${(props) => (props.ismainOpen ? "77vw" : "100vw")};
  height: auto;
  margin-left: auto;
  @media (max-width: 768px) {
    width: 100vw;
  }
  @media (max-width: 512px) {
    width: 100vw;
  }
`;
