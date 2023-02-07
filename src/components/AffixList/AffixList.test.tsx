import { render, screen } from "@testing-library/react";

import { AffixList, AffixListItem, AffixListType } from ".";

describe("<AffixList/>", () => {
  describe.each(
    [ "prefixed", "suffixed" ] as Array<AffixListType>
  )("of type '%s'", affixListType => {
    it("outputs an empty list", () => {
      render(
        <AffixList type={affixListType}>
        </AffixList>
      );

      const listElements = screen.queryAllByRole("listitem");
      expect(listElements.length).toBe(0);
    });

    it("outputs single list item", () => {
      render(
        <AffixList type={affixListType}>
          <AffixListItem affix="A1">The only list item.</AffixListItem>
        </AffixList>
      );

      const listElements = screen.queryAllByRole("listitem");
      expect(listElements.length).toBe(1);
    });

    it("outputs multiple list items", () => {
      render(
        <AffixList type={affixListType}>
          <AffixListItem affix="A1">First item.</AffixListItem>
          <AffixListItem affix="A2">Second item.</AffixListItem>
          <AffixListItem affix="A3">Third item.</AffixListItem>
        </AffixList>
      );

      const listElements = screen.queryAllByRole("listitem");
      expect(listElements.length).toBe(3);
    });
  });
});
