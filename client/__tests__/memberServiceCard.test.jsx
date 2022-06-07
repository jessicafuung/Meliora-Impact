import React from "react";
import ReactDOM from "react-dom";
import { MemberServiceCard } from "../src/components/MemberServiceCard/memberServiceCard";
import { MemoryRouter } from "react-router-dom";

describe("Member service Cards test", () => {
  it("shows member service card", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <MemberServiceCard
          content={"test"}
          icon={"test"}
          linkTo={"/test"}
          title={"test"}
        />
      </MemoryRouter>,
      domElement
    );
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
