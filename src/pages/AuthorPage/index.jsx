import React from "react";
import { AuthorpageStyle } from "./style";

function AuthorPage({ isOpen, ismainOpen,closemainSideBar }) {
  return (
    <AuthorpageStyle
      onClick={() => closemainSideBar()}
      isOpen={isOpen}
      ismainOpen={ismainOpen}
    >
      AuthorPage
    </AuthorpageStyle>
  );
}

export default AuthorPage;
