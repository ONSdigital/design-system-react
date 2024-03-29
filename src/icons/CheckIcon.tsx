import { IconProps } from "./IconProps";

/**
 * Outputs a check icon.
 *
 * @see [Icons](/design-system/foundations/icons) for information on using icons.
 *
 * @param props The component properties.
 * @returns
 */
export function CheckIcon(props: IconProps) : JSX.Element {
  return <>
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 10" focusable="false" fill="currentColor">
        <path d="M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z" transform="translate(-1.51 -3.04)"/>
    </svg>
  </>
}
