import { render, screen } from "@testing-library/react";

import { List, ListItem } from ".";

describe("<List/>", () => {
  it("outputs an empty list", () => {
    render(
      <List>
      </List>
    );

    const listElements = screen.queryAllByRole("listitem");
    expect(listElements.length).toBe(0);
  });

  it("outputs single list item", () => {
    render(
      <List>
        <ListItem>The only list item.</ListItem>
      </List>
    );

    const listElements = screen.queryAllByRole("listitem");
    expect(listElements.length).toBe(1);
  });

  it("outputs multiple list items", () => {
    render(
      <List>
        <ListItem>First item.</ListItem>
        <ListItem>Second item.</ListItem>
        <ListItem>Third item.</ListItem>
      </List>
    );

    const listElements = screen.queryAllByRole("listitem");
    expect(listElements.length).toBe(3);
  });
});
