import React from "react";
import { HelppageStyle } from "./style";

function Helppage({ isOpen, ismainOpen,closemainSideBar }) {
  return (
    <HelppageStyle
      onClick={() => closemainSideBar()}
      isOpen={isOpen}
      ismainOpen={ismainOpen}
    >
      Helppage
    </HelppageStyle>
  );
}

export default Helppage;
