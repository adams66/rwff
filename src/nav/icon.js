import React from "react";
import "./icon.css";
import { AiFillPropertySafety, AiOutlineHome } from "react-icons/ai";

function Icon(props) {
  return (
    <div className="icon">
      <a href={props.location}>
        <AiOutlineHome />
      </a>
    </div>
  );
}

export default Icon;
