import React, { useContext } from "react";

import HeadingLevelContext from "../../contexts/HeadingLevelContext";

/**
 * Properties for the {@link Heading} component.
 */
export interface HeadingProps {
    /**
     * Level of heading relative to the current section.
   *
   * @defaultValue `1`
     */
    level?: number;
    /**
     * Custom classes for styling.
     *
     * @defaultValue `""`
     */
    className?: string;
    /**
     * Child content to show inside the heading.
     */
    children: any;
}

/**
 * Outputs a heading relative to the current section scope.
 *
 * @remarks
 * This will typically output `<h1...6>` elements; however, this will revert to showing
 * headings using `<div>` elements with the accompanying `role` and `aria-level`
 * attributes for headings deeper than `<h6>`. Applications should keep heading levels
 * as shallow as possible.
 *
 * Heading levels are automatically computed from the scope of the current section. If
 * necessary the `level` property can be used to define a deeper level that is relative
 * to the current section scope.
 *
 * @param props The component properties.
 * @returns
 *
 * @see {@link SectionScope}
 */
export function Heading(props: HeadingProps) : JSX.Element {
    const baseLevel = useContext(HeadingLevelContext);
    const relativeLevel = props.level ?? 1;
    const resolvedLevel = baseLevel + relativeLevel - 1;

    if (resolvedLevel < 7) {
      return React.createElement(`h${resolvedLevel}`, {
        className: props.className,
      }, props.children);
    }
    else {
      return React.createElement("div", {
        className: props.className,
        "role": "heading",
        "aria-level": resolvedLevel,
      }, props.children);
    }
}
