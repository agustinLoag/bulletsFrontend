import { Col, Row, Typography } from "antd";
import React from "react";

import {
  AreaChartOutlined,
  HomeOutlined,
  ImportOutlined,
} from "@ant-design/icons";

import MenuItem from "./MenuItem";
import MenuContent from "./MenuContent";
const { Title } = Typography;
const Navbar = () => {
  return (
    <Row>
      <Col xs={12} md={8} style={{ display: "flex", alignItems: "center" }}>
        <MenuContent>
          <MenuItem keyUnique="inicio" icon={<HomeOutlined />} texto="Inicio" />
          <MenuItem
            keyUnique="ejemplo"
            icon={<AreaChartOutlined />}
            texto="Ejemplo"
          />
          <MenuItem keyUnique="salir" icon={<ImportOutlined />} texto="Salir" />
        </MenuContent>
      </Col>
      <Col xs={12} md={8} style={{ display: "flex", alignItems: "center" }}>
        <Title style={{ margin: 0, padding: 0 }} level={4}>
          h2. Ant Design
        </Title>
      </Col>
    </Row>
  );
};

export default Navbar;
