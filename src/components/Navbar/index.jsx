import { Col, Row, Typography, Modal } from "antd";
import React from "react";

import {
  AreaChartOutlined,
  HomeOutlined,
  ImportOutlined,
} from "@ant-design/icons";
import MenuItem from "./MenuItem";
import MenuContent from "./MenuContent";
import useModal from "./hooks";
const { Title } = Typography;
const Navbar = () => {
  const { isModalOpen, handleOk, handleCancel, showModal } = useModal();
  return (
    <Row>
      <Col xs={12} md={8} style={{ display: "flex", alignItems: "center" }}>
        <MenuContent>
          <MenuItem keyUnique="inicio"  linkTo="/" icon={<HomeOutlined />} texto="Inicio" />
          <MenuItem
            keyUnique="ejemplo"
            icon={<AreaChartOutlined />}
            texto="Ejemplo"
            linkTo="/posts"
          />
          <MenuItem handleClick={showModal} icon={<ImportOutlined />} texto="Salir" />
        </MenuContent>
      </Col>
      <Col xs={12} md={8} style={{ display: "flex", alignItems: "center" }}>
        <Title style={{ margin: 0, padding: 0, color: "#c7c2c2" }} level={4}>
          h2. Ant Design
        </Title>
      </Col>
      <Modal title="Desea salir del Proyecto CodeGus?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}/>

    </Row>
  );
};

export default Navbar;
