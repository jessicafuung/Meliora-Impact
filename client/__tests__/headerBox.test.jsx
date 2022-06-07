import React from "react";
import ReactDOM from "react-dom";
import { HeaderBox } from "../src/components/HeaderBox/HeaderBox";

describe("headerBox test", () => {
  it("shows headerBox", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<div>{HeaderBox}</div>, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
