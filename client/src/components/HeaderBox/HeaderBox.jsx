import React from "react";
import "./HeaderBox.css";

export function HeaderBox(
  backgroundImageUrl,
  headline,
  headlineColor,
  text,
  textColor
) {
  return (
    <div
      className="TopHeader"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
      }}
    >
      <div className="HeaderBox">
        <div
          className="BoxHeadline"
          style={{
            color: headlineColor,
          }}
        >
          {headline}
        </div>
        <div
          className="BoxText"
          style={{
            color: textColor,
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
