import React from "react";
import ReactDOM from "react-dom";
import PrivacyPage from "../src/pages/PrivacyPage/PrivacyPage";

describe("Privacy page", () => {
  it("shows privacy page", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<PrivacyPage />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
