import { render, screen } from "@testing-library/react";

import Highlight from ".";

describe("<Highlight/>", () => {
  it("outputs the expected text", () => {
    render(
      <Highlight>highlighted text</Highlight>
    );

    const element = screen.getByText("highlighted text");
    expect(element).toBeDefined();
  });
});
