import React from "react";
import ReactDOM from "react-dom";
import CustomHeadlineComponent from "../src/components/CustomHeadline/CustomHeadlineComponent";

describe("customHeadlineComponent", () => {
  it("shows customHeadlineComponent", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<CustomHeadlineComponent />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
