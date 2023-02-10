import classNames from "classnames";
import React from "react";

import { AffixListItem } from "./AffixListItem";
import AffixListContext from "../../contexts/AffixListContext";

export enum AffixListType {
  /**
   * Show prefixes before each list item.
   */
  Prefixed = "prefixed",
  /**
   * Show suffixes after each list item.
   */
  Suffixed = "suffixed",
};

export type AffixListItemElement = React.ReactElement<typeof AffixListItem>;
export type AffixListItemElements = Array<AffixListItemElement> | AffixListItemElement;

/**
 * Properties for the {@link AffixList} component.
 */
export interface AffixListProps {
  /**
   * Indicates the type of affixes to show in the list.
   */
  type: AffixListType;
  /**
   * Custom classes for styling.
   *
   * @defaultValue `""`
   */
  className?: string;
  /**
   * The list items.
   */
  children: AffixListItemElements;
}

/**
 * Presents a list of affixed (prefixed or suffixed) items.
 *
 * @param props The component properties.
 * @returns
 */
export function AffixList(props: AffixListProps) : JSX.Element {
  const classes = classNames("ds-affix-list", {
    [`ds-affix-list--${props.type}`]: true,
  }, props.className);

  return <>
    <ul className={classes}>
      <AffixListContext.Provider value={props.type}>
        { props.children }
      </AffixListContext.Provider>
    </ul>
  </>
}
