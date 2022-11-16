import React from "react";
import { ContentsPageStyle } from "./style";

function ContentsPage({ isOpen, ismainOpen,closemainSideBar,closeSideBar }) {

  const closeLeftBars = () => {
    closemainSideBar(false);
    closeSideBar(false);
  };

  return (
    <ContentsPageStyle
      onClick={() => closeLeftBars()}
      isOpen={isOpen}
      ismainOpen={ismainOpen}
    >
      ContentsPage
    </ContentsPageStyle>
  );
}

export default ContentsPage;
