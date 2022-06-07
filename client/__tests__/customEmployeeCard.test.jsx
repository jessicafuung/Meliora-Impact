import React from "react";
import ReactDOM from "react-dom";
import { CustomEmployeeCard } from "../src/components/CustomEmployeeCard/CustomEmployeeCard";

describe("customEmployeeCard test", () => {
  it("shows CustomEmployeeCard", () => {
    const domElement = document.createElement("Box");
    ReactDOM.render(<div>{CustomEmployeeCard}</div>, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
