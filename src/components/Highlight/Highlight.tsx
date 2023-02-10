/**
 * Properties for the {@link Highlight} component.
 */
export interface HighlightProps {
  /**
   * The highlighted content.
   */
  children: any;
}

/**
 * An inline component to highlight inline text.
 *
 * @param props The component properties.
 * @returns
 */
export function Highlight(props: HighlightProps) : JSX.Element {
  return <>
    <em className="ons-highlight">{props.children}</em>
  </>
}
