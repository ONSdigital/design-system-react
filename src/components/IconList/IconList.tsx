import classNames from "classnames";
import React from "react";

import { IconListItem } from "./IconListItem";
import IconListContext from "../../contexts/IconListContext";

export enum IconListPlacement {
  /**
   * Show icon before each list item.
   */
  Before = "before",
  /**
   * Show icon after each list item.
   */
  After = "after",
};

export type IconListItemElement = React.ReactElement<typeof IconListItem>;
export type IconListItemElements = Array<IconListItemElement> | IconListItemElement;

/**
 * Properties for the {@link IconList} component.
 */
export interface IconListProps {
  /**
   * Indicates how icons should be placed.
   *
   * @defaultValue {@link IconListPlacement.Before}
   */
  placement?: IconListPlacement;
  /**
   * Custom classes for styling.
   *
   * @defaultValue `""`
   */
  className?: string;
  /**
   * The list items.
   */
  children: IconListItemElements;
}

/**
 * Presents a list of items with icons.
 *
 * @see {@link IconListItem}
 *
 * @param props The component properties.
 * @returns
 */
export function IconList(props: IconListProps) : JSX.Element {
  const placement = props.placement ?? IconListPlacement.Before;

  const classes = classNames("ds-icon-list", {
    [`ds-icon-list--${placement}`]: true,
  }, props.className);

  return <>
    <ul className={classes}>
      <IconListContext.Provider value={placement}>
        { props.children }
      </IconListContext.Provider>
    </ul>
  </>
}
