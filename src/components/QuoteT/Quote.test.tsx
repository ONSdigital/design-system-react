import { render, screen } from "@testing-library/react";

import { Quotet } from ".";

describe("<Quote/>", () => {
  describe("without a source reference", () => {
    beforeEach(() => {
      render(
        <Quotet>
          Some example text.
        </Quotet>
      );
    });

    it("outputs the quoted content", () => {
      const element = screen.getByText("Some example text.");
      expect(element).toBeDefined();
    });
  });

  describe("with a source reference", () => {
    beforeEach(() => {
      render(
        <Quotet source="Some source reference">
          Some example text.
        </Quotet>
      );
    });

    it("outputs the quoted content", () => {
      const element = screen.getByText("Some example text.");
      expect(element).toBeDefined();
    });

    it("outputs the provided source", () => {
      const element = screen.getByText("Some source reference");
      expect(element).toBeDefined();
    });
  });

  describe("prop: preserveContentSize", () => {
    it("decorates output with the `preserve-content-size` modifier when `preserveContentSize` is `true`", () => {
      render(
        <div data-testid="test">
          <Quotet preserveContentSize={true}>
            Some example text.
          </Quotet>
        </div>
      );

      const quoteElement = screen.getByTestId("test").firstElementChild;
      expect(quoteElement).toHaveClass("ds-quote--preserve-content-size");
    });

    it("does not decorate output with the `preserve-content-size` modifier when `preserveContentSize` is `false`", () => {
      render(
        <div data-testid="test">
          <Quotet>
            Some example text.
          </Quotet>
        </div>
      );

      const quoteElement = screen.getByTestId("test").firstElementChild;
      expect(quoteElement).not.toHaveClass("ds-quote--preserve-content-size");
    });
  });
});
