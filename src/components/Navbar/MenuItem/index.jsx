import React from "react";
import { Menu } from "antd";

const MenuItem = ({ icon, texto, keyUnique }) => {
  console.log(keyUnique)
  return (
    <Menu.Item key={keyUnique} icon={icon}>
      {texto}
    </Menu.Item>
  );
};

export default MenuItem;
