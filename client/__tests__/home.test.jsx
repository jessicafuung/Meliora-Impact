import React from "react";
import ReactDOM from "react-dom";
import { Home } from "@mui/icons-material";

describe("Home page", () => {
  it("shows home page", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<Home />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
