import React from "react";
import { AuthorpageStyle } from "./style";

function AuthorPage({ isOpen, ismainOpen }) {
  return (
    <AuthorpageStyle isOpen={isOpen} ismainOpen={ismainOpen}>
      AuthorPage
    </AuthorpageStyle>
  );
}

export default AuthorPage;
