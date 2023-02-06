/**
 * Properties for the `TextIndent` component.
 */
export interface TextIndentProps {
  /**
   * The indented content.
   */
  children: any;
}

/**
 * Make information stand out from the rest of the content on a page.
 *
 * @param props The component properties.
 * @returns
 */
export function TextIndent(props: TextIndentProps) : JSX.Element {
  return <>
    <div className="ons-text-indent">
        {props.children}
    </div>
  </>
}
