import { render, screen } from "@testing-library/react";

import { ListItem } from ".";
import { ListItemCurrent } from "../../types/ListItemCurrent";

describe("<ListItem/>", () => {
  describe("prop: current", () => {
    it("does not mark current item when `current` is not specified", () => {
      render(
        <ListItem>A non-current list item.</ListItem>
      );
      const listElement = screen.getByRole("listitem", { current: false });
      expect(listElement).not.toHaveClass("ds-list__item--current")
    });

    it.each(
      [ false, undefined ] as Array<ListItemCurrent>
    )("does not mark the current item when `current` is `%s`", (currentValue) => {
      render(
        <ListItem current={currentValue}>A non-current list item.</ListItem>
      );
      const listElement = screen.getByRole("listitem", { current: false });
      expect(listElement).not.toHaveClass("ds-list__item--current")
    });

    it.each(
      [ true, "true" ] as Array<ListItemCurrent>
    )("marks the current item when `current` is `%s`", (currentValue) => {
      render(
        <ListItem current={currentValue}>A current list item.</ListItem>
      );
      const listElement = screen.getByRole("listitem", { current: true });
      expect(listElement).toHaveClass("ds-list__item--current")
    });

    it.each(
      [ "page", "step", "location", "date", "time" ] as Array<ListItemCurrent>
    )("marks the current item when `current` is `%s`", (currentValue) => {
      render(
        <ListItem current={currentValue}>A current list item.</ListItem>
      );
      const listElement = screen.getByRole("listitem", { current: currentValue });
      expect(listElement).toHaveClass("ds-list__item--current")
    });
  });
});
