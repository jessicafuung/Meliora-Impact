import React from "react";
import ReactDOM from "react-dom";
import { CorporateMember } from "../src/pages/CorporateMember/corporateMember";
import { MemoryRouter } from "react-router-dom";

describe("CorporateMember page", () => {
  it("snapshot corporateMember page", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <CorporateMember />
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
