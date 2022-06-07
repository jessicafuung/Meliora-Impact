import React from "react";
import ReactDOM from "react-dom";
import { Progressbar } from "../src/components/progressbar";

describe("ProgressBar test", () => {
  it("shows progressBar", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<Progressbar />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
