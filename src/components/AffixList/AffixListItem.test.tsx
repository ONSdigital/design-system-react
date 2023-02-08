import { render, screen } from "@testing-library/react";

import { AffixList, AffixListItem, AffixListType } from ".";
import { ListItemCurrent } from "../../types/ListItemCurrent";

describe("<AffixListItem/>", () => {
  describe("prefixed list items", () => {
    beforeEach(() => {
      render(
        <AffixList type={AffixListType.Prefixed}>
          <AffixListItem affix="A1">First list item.</AffixListItem>
          <AffixListItem affix="A2">Second list item.</AffixListItem>
          <AffixListItem affix="A3">Third list item.</AffixListItem>
        </AffixList>
      );
    });

    it("outputs prefix before list item text with the expected formatting", () => {
      const listItemContents = screen.getAllByRole("listitem").map(listItemElement => listItemElement.textContent);
      expect(listItemContents).toEqual([
        "A1. First list item.",
        "A2. Second list item.",
        "A3. Third list item.",
      ]);
    });
  });

  describe("suffixed list items", () => {
    beforeEach(() => {
      render(
        <AffixList type={AffixListType.Suffixed}>
          <AffixListItem affix="A">First list item.</AffixListItem>
          <AffixListItem affix="B">Second list item.</AffixListItem>
          <AffixListItem affix="C">Third list item.</AffixListItem>
        </AffixList>
      );
    });

    it("outputs suffix after list item text with the expected formatting", () => {
      const listItemContents = screen.getAllByRole("listitem").map(listItemElement => listItemElement.textContent);
      expect(listItemContents).toEqual([
        "First list item. A",
        "Second list item. B",
        "Third list item. C",
      ]);
    });
  });

  describe("prop: current", () => {
    it("does not mark current item when `current` is not specified", () => {
      render(
        <AffixList type={AffixListType.Prefixed}>
          <AffixListItem affix="A1">A non-current list item.</AffixListItem>
        </AffixList>
      );
      const listElement = screen.getByRole("listitem", { current: false });
      expect(listElement).not.toHaveClass("ds-affix-list__item--current")
    });

    it.each(
      [ false, undefined ] as Array<ListItemCurrent>
    )("does not mark the current item when `current` is `%s`", (currentValue) => {
      render(
        <AffixList type={AffixListType.Prefixed}>
          <AffixListItem affix="A1" current={currentValue}>A non-current list item.</AffixListItem>
        </AffixList>
      );
      const listElement = screen.getByRole("listitem", { current: false });
      expect(listElement).not.toHaveClass("ds-affix-list__item--current")
    });

    it.each(
      [ true, "true" ] as Array<ListItemCurrent>
    )("marks the current item when `current` is `%s`", (currentValue) => {
      render(
        <AffixList type={AffixListType.Prefixed}>
          <AffixListItem affix="A1" current={currentValue}>A current list item.</AffixListItem>
        </AffixList>
      );
      const listElement = screen.getByRole("listitem", { current: true });
      expect(listElement).toHaveClass("ds-affix-list__item--current")
    });

    it.each(
      [ "page", "step", "location", "date", "time" ] as Array<ListItemCurrent>
    )("marks the current item when `current` is `%s`", (currentValue) => {
      render(
        <AffixList type={AffixListType.Prefixed}>
          <AffixListItem affix="A1" current={currentValue}>A current list item.</AffixListItem>
        </AffixList>
      );
      const listElement = screen.getByRole("listitem", { current: currentValue });
      expect(listElement).toHaveClass("ds-affix-list__item--current")
    });
  });
});
