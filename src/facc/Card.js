import React, { Component } from "react";

function Card({ title, children, context }) {
  return (
    <div>
      <h3>{title}</h3>
      <div className="content">{children}</div>
    </div>
  );
}

export default Card;
