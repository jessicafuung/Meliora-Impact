import ReactDOM from "react-dom";
import React from "react";
import { Cases } from "../src/pages/Cases/Cases.jsx";
import { MemoryRouter } from "react-router-dom";

describe("btnWithHeadline test", () => {
  it("shows btnWithHeadline component", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Cases />
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
