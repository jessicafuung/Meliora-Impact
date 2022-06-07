import React from "react";

export function HeadlineWithUnderline(
  headlineText,
  lineWidth,
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
            fontFamily: "Josefin Sans",
            fontWeight: '500',
          }}
        >
          {headlineText}
        </div>
      </div>
      <div
        style={{
          width: lineWidth,
          height: 2,
          backgroundColor: "#490374",
          margin: "auto",
          marginTop: 5,
          marginBottom: marginBottom,
        }}
      />
    </>
  );
}
