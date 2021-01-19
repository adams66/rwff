import React, { useState } from "react";
import Icon from "./icon";
import Links from "./links";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "./navbar.css";

function Navbar() {
  let [click, setClick] = useState(false);

  let handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="navbar">
      <div onClick={handleClick} className="hamburger">
        {click ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div className="box">
        <Links location="https://google.com" name="About" />
        <Links location="https://www.google.com/" name="MEMBERS" />
        <Icon location="https://www.google.com/" />
        <Links location="https://www.google.com/" name="STATS" />
        <Links location="https://www.google.com/" name="CHAMPIONS" />
      </div>
    </div>
  );
}

export default Navbar;
