import { useContext } from "react";

import HeadingLevelContext from "../../contexts/HeadingLevelContext";

/**
 * Properties for the `SectionScope` component.
 */
export interface SectionScopeProps {
  children: any
}

/**
 * Defines the scope of a section.
 *
 * This component is designed to be used alongside other sectioning elements; for instance,
 * the following would be a suitable usage:
 *
 * ```tsx
 * <section>
 *   <SectionScope>
 *     <Heading>Heading for this section</Heading>
 *     <Heading level={2}>Sub heading within this section</Heading>
 *   </SectionScope>
 * </section>
 * ```
 *
 * @param props The component properties.
 * @returns
 *
 * @see {@link Heading}
 */
export default function SectionScope(props: SectionScopeProps) : JSX.Element {
  const currentLevel = useContext(HeadingLevelContext);
  return <>
    <HeadingLevelContext.Provider value={currentLevel + 1}>
      {props.children}
    </HeadingLevelContext.Provider>
  </>
}
