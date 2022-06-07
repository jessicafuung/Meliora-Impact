import React from "react";
import ReactDOM from "react-dom";
import AnimationContainer from "../src/components/AnimationContainer/AnimationContainer";

describe("AnimationContainer test", () => {
  it("shows AniamtionContainer", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<AnimationContainer />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
