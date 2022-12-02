import { Layout } from "antd";
import React from "react";
import Navbar from "../components/Navbar";
const { Header, Footer, Content } = Layout;

const MainLayout = ({children}) => {
  return (
    <>
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
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default MainLayout;
