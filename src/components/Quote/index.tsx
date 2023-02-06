import classNames from "classnames";

import QuoteIcon from "../../icons/IconQuote";

/**
 * Properties for the `Quote` component.
 */
export interface QuoteProps {
  /**
   * The source of the quote.
   *
   * @defaultValue `null`
   */
  source?: string,
  /**
   * Indicates if the content size of the quoted content should be preserved.
   *
   * @defaultValue `false`
   */
  preserveContentSize?: boolean;

  children: any
}

/**
 * Use when quoting content.
 *
 * @param props The component properties.
 * @returns
 */
export default function Quote(props: QuoteProps) : JSX.Element {
  const classes = classNames("ds-quote", {
    "ds-quote--preserve-content-size": !!props.preserveContentSize,
  });

  return <>
    <figure className={classes}>
      <QuoteIcon className="ds-quote__icon"/>
      <blockquote className="ds-quote__content">
          {props.children}
      </blockquote>
      {props.source &&
        <figcaption className="ds-quote__source">
          {props.source}
        </figcaption>
      }
    </figure>
  </>
}
