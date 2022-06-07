import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Header from "../src/components/navbar";

describe("Extra Navbar test", () => {
  it("shows extra navbar", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
