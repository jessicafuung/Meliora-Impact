import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import CustomButton from "../src/components/CustomButton/CustomButton";

describe("customButton test", () => {
  it("shows customButton", () => {
    const domElement = document.createElement("Button");
    ReactDOM.render(<div>{CustomButton}</div>, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
