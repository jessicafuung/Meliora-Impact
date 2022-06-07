import React from "react";
import ReactDOM from "react-dom";
import BreadcrumbComponent from "../src/components/Breadcrumbs/breadcrumbs";
import { MemoryRouter } from "react-router-dom";

describe("breadcrumb test", () => {
  it("shows breadcrumbs", () => {
    const domElement = document.createElement("Breadcrumbs");
    ReactDOM.render(
      <MemoryRouter>
        <BreadcrumbComponent />
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
