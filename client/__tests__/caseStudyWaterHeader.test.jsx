import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { CaseStudyWaterHeader } from "../src/pages/CaseStudyWater/CaseStudyWaterHeader";

describe("CaseStudyWaterHeader test", () => {
  it("Shows CaseStudyWaterHeader", () => {
    const domElement = document.createElement("p");
    ReactDOM.render(
      <MemoryRouter>
        <CaseStudyWaterHeader />
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
