import { ReactNode } from "react";
import { ListItemStyle } from "./styles";

interface IListItem {
  children: ReactNode;
}

const ListItem = ({ children }: IListItem) => {
  return <ListItemStyle>{children}</ListItemStyle>;
};

export default ListItem;
