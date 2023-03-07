import classNames from "classnames";
import React from "react";

import { ListItem } from "./ListItem";

export enum ListType {
  /**
   * Show a bullet point to the side of each list item.
   */
  Bulleted = "bulleted",
  /**
   * Show a dash to the side of each list item.
   */
  Dashed = "dashed",
  /**
   * Show a number to the side of each list item.
   */
  Numbered = "numbered",
  /**
   * Do not show anything to the side of each list item.
   */
  Bare = "bare",
};

export type ListItemElement = React.ReactElement<typeof ListItem>;
export type ListItemElements = Array<ListItemElement> | ListItemElement;

/**
 * Properties for the {@link List} component.
 */
export interface ListProps {
  /**
   * Indicates the type of list.
   *
   * @defaultValue {@link ListType.Bulleted}
   */
  type?: ListType;
  /**
   * Custom classes for styling.
   *
   * @defaultValue `""`
   */
  className?: string;
  /**
   * The list items.
   */
  children: ListItemElements;
}

/**
 * Presents a list of items.
 *
 * @param props The component properties.
 * @returns
 *
 * @see {@link ListItem}
 *
 * @experimental
 */
export function List(props: ListProps) : JSX.Element {
  const type = props.type ?? ListType.Bulleted;
  const elementTag = type === ListType.Numbered ? "ol" : "ul";

  const classes = classNames("ds-list", {
    [`ds-list--${type}`]: true,
  }, props.className);

  return React.createElement(elementTag, {
    className: classes,
  }, props.children);
}
