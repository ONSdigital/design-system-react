/**
 * Properties for the `TextIndent` component.
 */
export interface TextIndentProps {
  children: any
}

/**
 * Make information stand out from the rest of the content on a page.
 *
 * @param props The component properties.
 * @returns
 */
export default function TextIndent(props: TextIndentProps) : JSX.Element {
  return <>
    <div className="ons-text-indent">
        {props.children}
    </div>
  </>
}
