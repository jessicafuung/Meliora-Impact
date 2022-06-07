import React from "react";
import ReactDOM from "react-dom";
import { Start } from "./../src/pages/booking";

describe("Booking page", () => {
  it("shows booking page", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<Start />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
