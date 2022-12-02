import {
    MenuOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";

const MenuContent = ({ children }) => {
  return (
    <Menu
      style={{
        backgroundColor: "#122e3e",
        borderBottom: "none",
      }}
      mode="horizontal"
    >
      <Menu.SubMenu key="sub menu" icon={<MenuOutlined />}>
        {children}
      </Menu.SubMenu>
    </Menu>
  );
};

export default MenuContent;
