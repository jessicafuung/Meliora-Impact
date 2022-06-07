import ReactDOM from "react-dom";
import React from "react";
import { BtnWithHeadline } from "../src/components/BtnWithHeadline/BtnWithHeadline";

describe("btnWithHeadline test", () => {
  it("shows btnWithHeadline component", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<div>{BtnWithHeadline}</div>, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
