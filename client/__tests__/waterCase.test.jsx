import React from "react";
import ReactDOM from "react-dom";
import { WaterCases } from "../src/waterCases";

describe("WaterCase page", () => {
  it("shows waterCase page", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<WaterCases />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
