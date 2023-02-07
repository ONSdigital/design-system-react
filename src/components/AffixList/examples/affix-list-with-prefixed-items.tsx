import { AffixList, AffixListType, AffixListItem } from "..";

export default () => <>
  <AffixList type={AffixListType.Prefixed}>
    <AffixListItem affix="A1">First item</AffixListItem>
    <AffixListItem affix="A2">Second item</AffixListItem>
    <AffixListItem affix="A3">Third item</AffixListItem>
  </AffixList>
</>
