import React from "react";
import ReactDOM from "react-dom";
import { CorporateMember } from "../src/pages/CorporateMember/corporateMember";

describe("CorporateMember page", () => {
  it("snapshot corporateMember page", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<CorporateMember />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
