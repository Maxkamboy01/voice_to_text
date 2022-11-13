import React from "react";
import { ContentsPageStyle } from "./style";

function ContentsPage({ isOpen, ismainOpen,closemainSideBar }) {
  return (
    <ContentsPageStyle
      onClick={() => closemainSideBar()}
      isOpen={isOpen}
      ismainOpen={ismainOpen}
    >
      ContentsPage
    </ContentsPageStyle>
  );
}

export default ContentsPage;
