import React from "react";
import ReactDOM from "react-dom";
import { KnowledgeCases } from "../src/knowledge";

describe("KnowledgeCase page", () => {
  it("shows knowledgeCase page", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<KnowledgeCases />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
