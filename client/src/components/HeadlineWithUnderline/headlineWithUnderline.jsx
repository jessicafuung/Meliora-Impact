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
        <div
          style={{
            fontSize: fontSize,
            fontWeight: "bold",
            textAlign: "center",
            color: textColor,
          }}
        >
          {headlineText}
        </div>
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
