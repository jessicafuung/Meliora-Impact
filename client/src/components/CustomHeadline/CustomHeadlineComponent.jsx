import React from "react";
import "./CustomHeadlineStyle.css";
import { Typography } from "@mui/material";

const CustomHeadline = ({ size, children, ...otherProps }) => {
  //CustomHeadline takes in a size prop and a children prop.
  //The size prop is used to determine the size of the headline.
  //The children prop is used to display the text.

  return (
    <div className="headline-container">
      <Typography variant={size} className="title" {...otherProps}>
        {children}
      </Typography>
      <div className="line" />
    </div>
  );
};

export default CustomHeadline;
