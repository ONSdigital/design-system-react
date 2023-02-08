import { render, screen } from "@testing-library/react";

import { IconList, IconListItem, IconListPlacement } from ".";
import { CheckIcon } from "../../icons";
import { ListItemCurrent } from "../../types/ListItemCurrent";

describe("<IconListItem/>", () => {
  describe("list item with icons placed before", () => {
    beforeEach(() => {
      render(
        <IconList placement={IconListPlacement.Before}>
          <IconListItem icon={<CheckIcon/>}>First list item.</IconListItem>
          <IconListItem icon={<CheckIcon/>}>Second list item.</IconListItem>
          <IconListItem icon={<CheckIcon/>}>Third list item.</IconListItem>
        </IconList>
      );
    });

    it("outputs an icon for each item", () => {
      const iconElements = screen.getByRole("list").querySelectorAll(".ds-icon-list__icon");
      expect(iconElements.length).toBe(3);
    });
  });

  describe("list item with icons placed after", () => {
    beforeEach(() => {
      render(
        <IconList placement={IconListPlacement.After}>
          <IconListItem icon={<CheckIcon/>}>First list item.</IconListItem>
          <IconListItem icon={<CheckIcon/>}>Second list item.</IconListItem>
          <IconListItem icon={<CheckIcon/>}>Third list item.</IconListItem>
        </IconList>
      );
    });

    it("outputs an icon for each item", () => {
      const iconElements = screen.getByRole("list").querySelectorAll(".ds-icon-list__icon");
      expect(iconElements.length).toBe(3);
    });
  });

  describe("prop: current", () => {
    it("does not mark current item when `current` is not specified", () => {
      render(
        <IconList>
          <IconListItem icon={<CheckIcon/>}>A non-current list item.</IconListItem>
        </IconList>
      );
      const listElement = screen.getByRole("listitem", { current: false });
      expect(listElement).not.toHaveClass("ds-icon-list__item--current")
    });

    it.each(
      [ false, undefined ] as Array<ListItemCurrent>
    )("does not mark the current item when `current` is `%s`", (currentValue) => {
      render(
        <IconList>
          <IconListItem icon={<CheckIcon/>} current={currentValue}>A non-current list item.</IconListItem>
        </IconList>
      );
      const listElement = screen.getByRole("listitem", { current: false });
      expect(listElement).not.toHaveClass("ds-icon-list__item--current")
    });

    it.each(
      [ true, "true" ] as Array<ListItemCurrent>
    )("marks the current item when `current` is `%s`", (currentValue) => {
      render(
        <IconList>
          <IconListItem icon={<CheckIcon/>} current={currentValue}>A current list item.</IconListItem>
        </IconList>
      );
      const listElement = screen.getByRole("listitem", { current: true });
      expect(listElement).toHaveClass("ds-icon-list__item--current")
    });

    it.each(
      [ "page", "step", "location", "date", "time" ] as Array<ListItemCurrent>
    )("marks the current item when `current` is `%s`", (currentValue) => {
      render(
        <IconList>
          <IconListItem icon={<CheckIcon/>} current={currentValue}>A current list item.</IconListItem>
        </IconList>
      );
      const listElement = screen.getByRole("listitem", { current: currentValue });
      expect(listElement).toHaveClass("ds-icon-list__item--current")
    });
  });
});
