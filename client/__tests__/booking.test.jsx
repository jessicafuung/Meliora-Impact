import React from "react";
import ReactDOM from "react-dom";
import { Start } from "@mui/icons-material";

describe("Booking page", () => {
  it("shows booking page", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<Start />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
