import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../src/components/Navbar/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar test", () => {
  it("shows navbar", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
