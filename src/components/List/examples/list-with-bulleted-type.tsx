import { List, ListType, ListItem } from "..";

export default () => <>
  <List type={ListType.Bulleted}>
    <ListItem>First item</ListItem>
    <ListItem>Second item</ListItem>
    <ListItem>Third item</ListItem>
  </List>
</>
