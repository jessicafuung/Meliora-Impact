import React from "react";
import "./BtnWithHeadline.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export function BtnWithHeadline(headlineText, btnText) {
  return (
    <div>
      <h1 className="headlineText">{headlineText}</h1>
      <Button
        as={Link}
        to="/booking"
        style={{ textAlign: "center" }}
        variant="contained"
        className="buttonUnderHeadline"
      >
        {btnText}
      </Button>
    </div>
  );

  // <div>
  //     <h1 className="headlineText">{headlineText}</h1>
  //     <Button as={Link} to="/booking" className="buttonUnderHeadline">
  //         {btnText}
  //     </Button>
  // </div>
}
