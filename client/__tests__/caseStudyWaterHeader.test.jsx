import React from "react";
import ReactDOM from "react-dom";
import { CaseStudyWaterHeader } from "../src/pages/CaseStudyWater/CaseStudyWaterHeader";

describe("CaseStudyWaterHeader", () => {
  it("shows casestudywaterheader", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<CaseStudyWaterHeader />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
