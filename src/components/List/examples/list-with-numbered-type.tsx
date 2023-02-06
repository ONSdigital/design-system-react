import { List, ListType, ListItem } from "..";

export default () => <>
  <List type={ListType.Numbered}>
    <ListItem>First item</ListItem>
    <ListItem>Second item</ListItem>
    <ListItem>Third item</ListItem>
  </List>
</>
