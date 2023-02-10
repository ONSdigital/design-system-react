import classNames from "classnames";

import { ListItemCurrent } from "../../types/ListItemCurrent";

/**
 * Properties for the {@link ListItem} component.
 */
export interface ListItemProps {
  /**
   * Custom classes for styling.
   *
   * @defaultValue `""`
   */
  className?: string;
  /**
   * Indicates if this is the current item of the list.
   *
   * @defaultValue `false`
   */
  current?: ListItemCurrent;
  /**
   * Child content to show inside the list item.
   */
  children: any;
}

/**
 * Presents a list item.
 *
 * @param props The component properties.
 * @returns
 */
export function ListItem(props: ListItemProps) : JSX.Element {
  const isCurrentItem = !!props.current && props.current !== "false";

  const classes = classNames("ds-list__item", {
    "ds-list__item--current": isCurrentItem,
  }, props.className);

  const extraProps: React.LiHTMLAttributes<HTMLLIElement> = {};
  if (isCurrentItem) {
    extraProps["aria-current"] = props.current;
  }

  return <>
    <li className={classes} {...extraProps}>
      { props.children }
    </li>
  </>
}
