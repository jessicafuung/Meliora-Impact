import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const CustomButton = ({ children, variant, w, h, to, p, onClick, href}) => {
  if (to === undefined) {
    console.log(
      `%cCorrect usage: <CustomButton variant=\"contained | outlined | text\" to=\"/\">${children}</CustomButton>`,
      "color: #00ff00"
    );
  }

  return (
    //anchor tag for href
    <Button
      onClick={onClick}
      variant={variant}
      to={to}
      as={Link}
      color="primary"
      style={{
        padding: p,
        textDecoration: "none",
        fontWeight: 500,
        borderRadius: 0,
        textTransform: "none",
      }}
        sx={{
        ":hover": {
          backgroundColor: "#034F7A",
          color: "white",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
