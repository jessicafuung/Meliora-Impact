import React from "react";
import "./Headerbox.css";

export function HeaderBox(headline, text) {
  return (
    <div className="HeaderBox">
      <div className="Headline">{headline}</div>
      <div
        style={{
          marginTop: 50,
          fontSize: 24,
        }}
      >
        {text}
      </div>
    </div>
  );
}
