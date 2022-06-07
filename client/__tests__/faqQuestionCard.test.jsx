import React from "react";
import ReactDOM from "react-dom";
import { FaqQuestionCard } from "../src/components/FaqQuestionCard/FaqQuestionCard";
import { MemoryRouter } from "react-router-dom";

const testData = [
  {
    _id: "testData",
    question: "testQuestion",
    answer: "testAnswer",
  },
];

describe("FaqQuestionCard test", () => {
  it("shows FaqQuestionCard", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        {testData.map((test, index) => (
          <FaqQuestionCard key={test._id} faqs={test} index={index} />
        ))}
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
