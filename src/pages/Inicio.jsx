import React from "react";
import { Col, Row } from "antd";
import styles from "./styles/inicio.module.css";
const Inicio = () => {
  return (
    <Row>
      <Col className={styles.container} span={24}>
        <div>
          <div className={styles.imgDiv}></div>
          <div className={styles.containerText}>
            <strong>Te damos la más cálida bienvenida!!!</strong>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Inicio;
