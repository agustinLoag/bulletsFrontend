import { ConfigProvider, Layout } from "antd";
import React from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Posts";
const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <ConfigProvider
      // theme={{
      //   token: {
      //     colorPrimary: "#122e3e",
      //     colorBgBase: "#122e3e",
      //     colorBgLayout: "#122e3e",
      //     colorTextBase: "#c1c1c1e0",
      //   },
      // }}
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
          <div className="site-layout-content">
            <Post/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
