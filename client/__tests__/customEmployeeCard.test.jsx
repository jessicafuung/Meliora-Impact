import React from "react";
import ReactDOM from "react-dom";
import { CustomEmployeeCard } from "../src/components/CustomEmployeeCard/CustomEmployeeCard";
import { MemoryRouter } from "react-router-dom";
import { useLoading } from "../lib/useLoader";

const testData = [
  {
    name: "test",
    image: "imageUrl",
    position: "test",
    about: "test",
    linkedin: "test",
  },
];

describe("customEmployeeCard test", () => {
  it("shows CustomEmployeeCard", () => {
    const domElement = document.createElement("Box");
    ReactDOM.render(
      <MemoryRouter>
        {testData.map((m) => (
          <CustomEmployeeCard key={m.name} employee={testData} />
        ))}
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
