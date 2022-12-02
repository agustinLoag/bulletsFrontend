import React from "react";
import { Menu } from "antd";

const MenuItem = ({ icon, texto }) => {
  return (
    <Menu.Item key="two" icon={icon}>
      {texto}
    </Menu.Item>
  );
};

export default MenuItem;
