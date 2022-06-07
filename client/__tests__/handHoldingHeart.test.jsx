import { HandHoldingHeartIcon } from "../src/components/assets/handHoldingHeartIcon";
import ReactDOM from "react-dom";
import React from "react";

describe("HandHoldingHeartIcon test", () => {
  it("shows HandHoldingHeartIcon", () => {
    const domElement = document.createElement("svg");
    ReactDOM.render(<HandHoldingHeartIcon />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
