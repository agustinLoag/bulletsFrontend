import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const MenuItem = ({ icon, texto, keyUnique, handleClick, linkTo }) => {
  console.log(keyUnique);
  return (
    <Menu.Item onClick={handleClick} key={keyUnique} icon={icon}>
      <Link to={linkTo}>{texto}</Link>
    </Menu.Item>
  );
};

export default MenuItem;
