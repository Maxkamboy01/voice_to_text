import React from "react";
import { HelppageStyle } from "./style";

function Helppage({ isOpen, ismainOpen }) {
  return (
    <HelppageStyle isOpen={isOpen} ismainOpen={ismainOpen}>Helppage</HelppageStyle>
  );
}

export default Helppage;
