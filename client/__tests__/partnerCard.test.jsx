import React from "react";
import ReactDOM from "react-dom";
import { PartnerCard } from "../src/components/PartnerCard/partnerCard";

describe("PartnerCard test", () => {
  it("shows partnerCards", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<PartnerCard />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
