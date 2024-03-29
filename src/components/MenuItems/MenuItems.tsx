import React from "react";
import { ElementMenuInterface } from "../Header/Header.constant";
import MenuItem from "../MenuItem/MenuItem";

interface MenuItemsProps {
  items: Array<ElementMenuInterface>;
}

function MenuItems(props: MenuItemsProps) {
  return (
    <ul className="list-navigation" data-testid="menu-items">
      {props.items.map((item) => (
        <MenuItem title={item.title} path={item.path} />
      ))}
    </ul>
  );
}
export default MenuItems;
