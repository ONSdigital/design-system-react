import classNames from "classnames";
import { useContext } from "react";

import AffixListContext from "../../contexts/AffixListContext";
import { ListItemCurrent } from "../../types/ListItemCurrent";
import { AffixListType } from "./AffixList";

/**
 * Properties for the {@link AffixListItem} component.
 */
export interface AffixListItemProps {
  /**
   * The affix (eg. "A1").
   *
   * This should not include any special characters for formatting; for example, use "A1"
   * not "A1." since the component handles list formatting.
   */
  affix: string;
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
 * Presents an affixed list item.
 *
 * @see {@link AffixList}
 *
 * @param props The component properties.
 * @returns
 */
export function AffixListItem(props: AffixListItemProps) : JSX.Element {
  const affixListType = useContext(AffixListContext);
  const isCurrentItem = !!props.current && props.current !== "false";

  const classes = classNames("ds-affix-list__item", {
    "ds-affix-list__item--current": isCurrentItem,
  }, props.className);

  const extraProps: React.LiHTMLAttributes<HTMLLIElement> = {};
  if (isCurrentItem) {
    extraProps["aria-current"] = props.current;
  }

  return <>
    <li className={classes} {...extraProps}>
      { affixListType === AffixListType.Prefixed &&
        <span className="ds-affix-list__prefix" aria-hidden={true}>{ props.affix }. </span>
      }

      { props.children }

      { affixListType === AffixListType.Suffixed &&
        <span className="ds-affix-list__suffix" aria-hidden={true}> { props.affix }</span>
      }
    </li>
  </>
}
