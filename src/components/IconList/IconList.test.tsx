import { render, screen } from "@testing-library/react";

import { IconList, IconListItem } from ".";
import { CheckIcon } from "../../icons";

describe("<IconList/>", () => {
  it("outputs an empty list", () => {
    render(
      <IconList>
      </IconList>
    );

    const listElements = screen.queryAllByRole("listitem");
    expect(listElements.length).toBe(0);
  });

  it("outputs single list item", () => {
    render(
      <IconList>
        <IconListItem icon={<CheckIcon/>}>The only list item.</IconListItem>
      </IconList>
    );

    const listElements = screen.queryAllByRole("listitem");
    expect(listElements.length).toBe(1);
  });

  it("outputs multiple list items", () => {
    render(
      <IconList>
        <IconListItem icon={<CheckIcon/>}>First item.</IconListItem>
        <IconListItem icon={<CheckIcon/>}>Second item.</IconListItem>
        <IconListItem icon={<CheckIcon/>}>Third item.</IconListItem>
      </IconList>
    );

    const listElements = screen.queryAllByRole("listitem");
    expect(listElements.length).toBe(3);
  });
});
