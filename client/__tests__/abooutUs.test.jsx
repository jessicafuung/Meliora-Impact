import React from "react";
import ReactDOM from "react-dom";
import { AboutUsPage } from "../src/pages/AboutUsPage";

describe("AboutUs page", () => {
  it("shows aboutUs page", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<AboutUsPage />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
