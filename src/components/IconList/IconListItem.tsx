import classNames from "classnames";
import { useContext } from "react";

import IconListContext from "../../contexts/IconListContext";
import { ListItemCurrent } from "../../types/ListItemCurrent";
import { IconListPlacement } from "./IconList";

/**
 * Properties for the {@link IconListItem} component.
 */
export interface IconListItemProps {
  /**
   * The icon.
   */
  icon: JSX.Element,
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
 * Presents an icon list item.
 *
 * @see {@link IconList}
 *
 * @param props The component properties.
 * @returns
 */
export function IconListItem(props: IconListItemProps) : JSX.Element {
  const placement = useContext(IconListContext);
  const isCurrentItem = !!props.current && props.current !== "false";

  const classes = classNames("ds-icon-list__item", {
    "ds-icon-list__item--current": isCurrentItem,
  }, props.className);

  const extraProps: React.LiHTMLAttributes<HTMLLIElement> = {};
  if (isCurrentItem) {
    extraProps["aria-current"] = props.current;
  }

  return <>
    <li className={classes} {...extraProps}>
      { placement === IconListPlacement.Before &&
        <span className="ds-icon-list__icon" aria-hidden={true}>{ props.icon }</span>
      }

      { props.children }

      { placement === IconListPlacement.After &&
        <span className="ds-icon-list__icon" aria-hidden={true}>{ props.icon }</span>
      }
    </li>
  </>
}
