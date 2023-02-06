import { Heading } from "..";
import { SectionScope } from "../../SectionScope";

export default () => <>
  <Heading>An example page heading</Heading>

  <section>
    <SectionScope>
      <Heading>A section heading</Heading>
      <p>A paragraph of text...</p>

      <Heading level={2}>A nested section heading</Heading>
      <p>A paragraph of text...</p>
    </SectionScope>
  </section>
</>
