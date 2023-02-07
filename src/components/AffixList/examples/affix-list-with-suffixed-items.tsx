import { AffixList, AffixListType, AffixListItem } from "..";

export default () => <>
  <AffixList type={AffixListType.Suffixed}>
    <AffixListItem affix="A">First item</AffixListItem>
    <AffixListItem affix="B">Second item</AffixListItem>
    <AffixListItem affix="C">Third item</AffixListItem>
  </AffixList>
</>
