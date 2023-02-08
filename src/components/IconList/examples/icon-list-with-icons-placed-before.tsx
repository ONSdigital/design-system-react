import { IconList, IconListItem, IconListPlacement } from "..";
import { CheckIcon } from "../../../icons";

export default () => <>
  <IconList placement={IconListPlacement.Before}>
    <IconListItem icon={<CheckIcon/>}>First item</IconListItem>
    <IconListItem icon={<CheckIcon/>}>Second item</IconListItem>
    <IconListItem icon={<CheckIcon/>}>Third item</IconListItem>
  </IconList>
</>
