import React from "react";
import ReactDOM from "react-dom";
import { NonProfit } from "../src/pages/Non-profitMember/nonProfitMember";
import { MemoryRouter } from "react-router-dom";

describe("Nonprofit page", () => {
  it("shows nonprofit page", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <NonProfit />
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
