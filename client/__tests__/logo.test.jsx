import Logo from "../src/components/assets/Logo";
import React from "react";
import ReactDOM from "react-dom";

describe("Logo test", () => {
  it("shows logo", () => {
    const domElement = document.createElement("svg");
    ReactDOM.render(<Logo />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
