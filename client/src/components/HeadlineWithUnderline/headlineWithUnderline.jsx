import React from "react";

export function HeadlineWithUnderline(
  headlineText,
  lineWidth,
  hexColor,
  marginBottom,
  textColor,
  fontSize
) {
  return (
    <>
      <div>
        <h1
          style={{
            fontSize: fontSize,
            fontWeight: "bold",
            textAlign: "center",
            color: textColor,
          }}
        >
          {headlineText}
        </h1>
      </div>
      <div
        style={{
          width: lineWidth,
          height: 2,
          backgroundColor: hexColor,
          margin: "auto",
          marginTop: 5,
          marginBottom: marginBottom,
        }}
      />
    </>
  );
}
