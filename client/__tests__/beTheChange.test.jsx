import React from "react";
import ReactDOM from "react-dom";
import { BeTheChange } from "../src/components/BeTheChange/beTheChange";

describe("Be the change test", () => {
  it("shows be the change component", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<BeTheChange />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
