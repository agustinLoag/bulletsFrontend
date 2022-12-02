import React from "react";
import { Space, Spin, Row } from "antd";
import styles from './styles.module.css'; 

const Spiner = () => {
  return (
    <Row>
      <Space direction="vertical" className={styles.content}  style={{ width: "100%" }}>
        <Space>
          <Spin tip="Loading" size="large">
            <div className="content" />
          </Spin>
        </Space>
      </Space>
    </Row>
  );
};

export default Spiner;
