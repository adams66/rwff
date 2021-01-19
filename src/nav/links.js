import React from "react";
import "./links.css";

function Links(props) {
  return (
    <div className="link-container">
      <a href={props.location}>{props.name}</a>
    </div>
  );
}

export default Links;
