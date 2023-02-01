import { render, screen } from "@testing-library/react";

import Heading from ".";
import SectionScope from "../SectionScope";

describe("<Heading/>", () => {
  describe("prop: className", () => {
    it.each([ 1, 8 ])("outputs the provided classes when a relative heading of %d is provided", (headingLevel) => {
      render(
        <Heading className="an-example-class" level={headingLevel}>Example heading</Heading>
      );

      const heading = screen.getByRole("heading");
      expect(heading.classList).toContain("an-example-class");
    });
  });

  describe("when heading is at the root section scope", () => {
    it("outputs the expected heading level", () => {
      render(
        <Heading>Example heading</Heading>
      );

      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading.textContent).toBe("Example heading");
    });

    it.each([ 1, 2, 3, 4, 5, 6, 7, 8 ])("outputs the expected heading level when a relative heading of %d is provided", (headingLevel) => {
      render(
        <Heading level={headingLevel}>Example heading</Heading>
      );

      const heading = screen.getByRole("heading", { level: headingLevel });
      expect(heading.textContent).toBe("Example heading");
    });
  });

  describe("when heading is inside a section scope", () => {
    it("outputs the expected heading level", () => {
      render(
        <SectionScope>
          <Heading>Example heading</Heading>
        </SectionScope>
      );

      const heading = screen.getByRole("heading", { level: 2 });
      expect(heading.textContent).toBe("Example heading");
    });

    it.each([ 1, 2, 3, 4, 5, 6, 7, 8 ])("outputs the expected heading level when a relative heading of %d is provided", (headingLevel) => {
      render(
        <SectionScope>
          <Heading level={headingLevel}>Example heading</Heading>
        </SectionScope>
      );

      const heading = screen.getByRole("heading", { level: headingLevel + 1 });
      expect(heading.textContent).toBe("Example heading");
    });
  });

  describe("when heading is inside a nested section scope", () => {
    it("outputs the expected heading level", () => {
      render(
        <SectionScope>
          <Heading>Root heading</Heading>
          <SectionScope>
            <Heading>Example heading</Heading>
          </SectionScope>
        </SectionScope>
      );

      const heading = screen.getByRole("heading", { level: 3 });
      expect(heading.textContent).toBe("Example heading");
    });

    it.each([ 1, 2, 3, 4, 5, 6, 7, 8 ])("outputs the expected heading level when a relative heading of %d is provided", (headingLevel) => {
      render(
        <SectionScope>
          <Heading>Root heading</Heading>
          <SectionScope>
            <Heading level={headingLevel}>Example heading</Heading>
          </SectionScope>
        </SectionScope>
      );

      const heading = screen.getByRole("heading", { level: headingLevel + 2 });
      expect(heading.textContent).toBe("Example heading");
    });
  });
});
