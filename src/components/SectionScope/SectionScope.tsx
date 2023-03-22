import { useContext } from "react";

import HeadingLevelContext from "../../contexts/HeadingLevelContext";

/**
 * Properties for the {@link SectionScope} component.
 */
export interface SectionScopeProps {
  /**
   * Content of the section scope.
   */
  children: any;
}

/**
 * Defines the scope of a section.
 *
 * @remarks
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
 *
 * @experimental
 */
export function SectionScope(props: SectionScopeProps) : JSX.Element {
  const currentLevel = useContext(HeadingLevelContext);
  return <>
    <HeadingLevelContext.Provider value={currentLevel + 1}>
      {props.children}
    </HeadingLevelContext.Provider>
  </>
}
