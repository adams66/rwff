import React from "react";
import "./grid.css";
import Chief from "./Assets/chief4k.jpg";

function Grid() {
  const divStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + Chief + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  return <div style={divStyle}></div>;
}

export default Grid;
