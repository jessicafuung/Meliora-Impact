import React from "react";
import ReactDOM from "react-dom";
import { FaqPage } from "../src/pages/Faq/Faq";

describe("Faq page", () => {
  it("shows faq page", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<FaqPage />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
