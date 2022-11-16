import React from "react";
import { AuthorpageStyle } from "./style";

function AuthorPage({ isOpen, ismainOpen, closemainSideBar, closeSideBar }) {
  const closeLeftBars = () => {
    closemainSideBar(false);
    closeSideBar(false);
  };

  return (
    <AuthorpageStyle
      onClick={() => closeLeftBars()}
      isOpen={isOpen}
      ismainOpen={ismainOpen}
    >
      AuthorPage
    </AuthorpageStyle>
  );
}

export default AuthorPage;
