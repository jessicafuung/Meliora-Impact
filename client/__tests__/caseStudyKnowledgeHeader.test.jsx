import React from "react";
import ReactDOM from "react-dom";
import { CaseStudyKnowledgeHeader } from "../src/pages/CaseStudyKnowledge/CaseStudyKnowledgeHeader";

describe("CaseStudyKnowledgeHeader", () => {
  it("shows casestudyknowledgeheader", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<CaseStudyKnowledgeHeader />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
