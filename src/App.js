import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import Navbar from "./components/Navbar";
import { Col, Row, Layout } from "antd";
import { ConfigProvider, theme, Button } from "antd";
const { Header, Footer, Content } = Layout;
const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#122e3e",
          colorBgBase: "#122e3e",
          colorBgLayout: "#122e3e",
          colorTextBase: "#c1c1c1e0",
        },
      }}
    >
      <Layout>
        <Header
          style={{
            backgroundColor: "#122e3e",
          }}
        >
          <Navbar />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
