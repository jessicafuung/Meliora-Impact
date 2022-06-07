import React from "react";
import ReactDOM from "react-dom";
import { SectorCard } from "../src/components/SectorCard/sectorCard";
import { MemoryRouter } from "react-router-dom";

const testData = [
  {
    title: "testTitle",
    content: "test content",
    image: "imageURL",
    linkTo: "testData",
  },
];

describe("sectorCard test", () => {
  it("shows sector cards", () => {
    const domElement = document.createElement("Box");
    ReactDOM.render(
      <MemoryRouter>
        {testData.map((test) => (
          <SectorCard
            key={test.title}
            title={test.title}
            content={test.content}
            image={test.image}
            linkTo={test.linkTo}
          />
        ))}
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
