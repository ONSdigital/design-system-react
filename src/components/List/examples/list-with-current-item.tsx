import { List, ListItem } from "..";

export default () => <>
  <List>
    <ListItem>First item</ListItem>
    <ListItem current={true}>Second item</ListItem>
    <ListItem>Third item</ListItem>
  </List>
</>
