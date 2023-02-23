import { IconProps } from "./IconProps";

/**
 * Outputs a forward arrow icon.
 *
 * @see [Icons](/design-system/foundations/icons) for information on using icons.
 *
 * @param props The component properties.
 * @returns
 */
export function ArrowForwardIcon(props: IconProps) : JSX.Element {
  return <>
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M4.2,12c0-0.6,0.4-1,1-1h11.2l-4.9-4.9c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l6.6,6.6c0.4,0.4,0.4,1,0,1.4l-6.6,6.6c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l4.9-4.9H5.2C4.7,13,4.2,12.6,4.2,12z" fill="currentColor"></path>
    </svg>
  </>
}
