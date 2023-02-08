import { render, screen } from "@testing-library/react";

import { TextIndent } from ".";

describe("<TextIndent/>", () => {
  it("outputs the expected text", () => {
    render(
      <TextIndent>
        <p>An example of some indented text.</p>
      </TextIndent>
    );

    const element = screen.getByText("An example of some indented text.");
    expect(element).toBeDefined();
  });
});
