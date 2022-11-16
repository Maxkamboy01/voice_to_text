import React from "react";
import { HelppageStyle } from "./style";

function Helppage({ isOpen, ismainOpen, closemainSideBar, closeSideBar }) {
  const closeLeftBars = () => {
    closemainSideBar(false);
    closeSideBar(false);
  };
  return (
    <HelppageStyle
      onClick={() => closeLeftBars()}
      isOpen={isOpen}
      ismainOpen={ismainOpen}
    >
      Helppage
    </HelppageStyle>
  );
}

export default Helppage;
