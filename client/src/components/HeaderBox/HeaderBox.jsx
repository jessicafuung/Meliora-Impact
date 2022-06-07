import React from "react";
import "./HeaderBox.css";
import Typography from "@mui/material/Typography";

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
        <Typography
          variant={"h1"}
          className="BoxHeadline"
          style={{
            color: headlineColor,
          }}
        >
          {headline}
        </Typography>
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
