import { IconList, IconListItem } from "..";
import { CheckIcon } from "../../../icons";

export default () => <>
  <IconList>
    <IconListItem icon={<CheckIcon/>}>First item</IconListItem>
    <IconListItem icon={<CheckIcon/>}>Second item</IconListItem>
    <IconListItem icon={<CheckIcon/>}>Third item</IconListItem>
  </IconList>
</>
