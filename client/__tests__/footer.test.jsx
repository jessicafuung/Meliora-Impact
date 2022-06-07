import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "../src/components/Footer/Footer";
import { MemoryRouter } from "react-router-dom";

describe("footer test", () => {
  it("shows footer", () => {
    const domElement = document.createElement("footer");
    ReactDOM.render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
