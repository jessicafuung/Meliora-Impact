import React from "react";
import { CaseStudyKnowledgeHeader } from "../src/pages/CaseStudyKnowledge/CaseStudyKnowledgeHeader";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

describe("CaseStudyKnowledgeHeader test", () => {
  it("Shows CaseStudyKnowledgeHeader", () => {
    const domElement = document.createElement("p");
    ReactDOM.render(
      <MemoryRouter>
        <CaseStudyKnowledgeHeader />
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
