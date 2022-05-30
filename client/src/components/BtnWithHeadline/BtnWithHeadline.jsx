import React from "react";
import "./BtnWithHeadline.css";

export function BtnWithHeadline(headlineText, btnText) {
  return (
    <div>
      <h1 className="headlineText">{headlineText}</h1>
      <button className="buttonUnderHeadline">{btnText}</button>
    </div>
  );
}
