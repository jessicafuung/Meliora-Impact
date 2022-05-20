import React from "react";

export function Underline(LineWidth, hashtagColor) {
  return (
    <div
      style={{
        width: LineWidth,
        height: 2,
        backgroundColor: hashtagColor,
        margin: "auto",
        marginTop: 5,
        marginBottom: 100,
      }}
    />
  );
}
