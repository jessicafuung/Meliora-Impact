import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { FaqPage } from "../src/pages/Faq/Faq";
import { act } from "react-dom/test-utils";
import { ApiContext } from "../src/assets/apiContext";
import { MemoryRouter } from "react-router-dom";

const listFaq = [
  {
    _id: 1234,
    question: "How can we help you?",
    answer: "Jest answer",
  },
];

async function renderFaqPage(listFaq) {
  const element = document.createElement("div");
  await act(async () =>
    ReactDOM.render(
      <MemoryRouter>
        <ApiContext.Provider value={{ listFaq }}>
          <FaqPage />
        </ApiContext.Provider>
      </MemoryRouter>,
      element
    )
  );
  return element;
}

describe("Faq page", () => {
  it("shows faq page", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<FaqPage />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
  it("shows loading screen", async () => {
    const element = await renderFaqPage(() => new Promise(() => {}));
    expect(element.querySelector(".loading-indicator")).not.toBeNull();
    expect(element.innerHTML).toMatchSnapshot();
  });
  it("shows faq list", async () => {
    const element = await renderFaqPage(async () => listFaq);
    expect(element.querySelector("p").innerHTML).toEqual(listFaq[0].question);
    expect(element.innerHTML).toMatchSnapshot();
  });
  it("shows error message", async () => {
    const element = await renderFaqPage(async () => {
      throw new Error("Failed to fetch");
    });
    expect(element.querySelector(".error-message").innerHTML).toContain(
      "Failed to fetch"
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
