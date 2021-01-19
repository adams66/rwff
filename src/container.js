import React from "react";
import Navbar from "./nav/navbar";

import Chief from "./nav/grid/Assets/4kchief.png";
import "./container.css";

function Container() {
  const divStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Chief})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  const title = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    fontSize: "3.8rem",
    color: "#fff"
  };

  return (
    <div style={divStyle}>
      <Navbar />
      <div style={title}>
        <div>Royal Wildcat Fantasy</div>
      </div>
    </div>
  );
}

export default Container;
