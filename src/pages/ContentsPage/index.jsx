import React from "react";
import { ContentsPageStyle } from "./style";

function ContentsPage({ isOpen, ismainOpen }) {
  return (
    <ContentsPageStyle isOpen={isOpen} ismainOpen={ismainOpen}>
      ContentsPage
    </ContentsPageStyle>
  );
}

export default ContentsPage;
