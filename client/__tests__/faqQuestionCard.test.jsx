import React from "react";
import ReactDOM from "react-dom";
import { FaqQuestionCard } from "../src/components/FaqQuestionCard/FaqQuestionCard";

describe("FaqQuestionCard test", () => {
  it("shows FaqQuestionCard", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<div>{FaqQuestionCard}</div>, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
