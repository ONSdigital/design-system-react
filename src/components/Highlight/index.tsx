/**
 * Properties for the `Highlight` component.
 */
export interface HighlightProps {
  children: any
}

/**
 * An inline component to highlight inline text.
 *
 * @param props Component properties.
 * @returns
 */
export default function Highlight(props: HighlightProps) : JSX.Element {
  return <>
    <em className="ons-highlight">{props.children}</em>
  </>
}
