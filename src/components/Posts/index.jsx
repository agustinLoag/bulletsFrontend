import React, { useState } from "react";
import usePost from "./hooks";
import { Pagination } from "antd";
import { Table, List, Divider, Typography } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const Post = () => {
  const { post, showPost, onChangePage, currentTableData } = usePost();
  return (
    <>
      {post && (
        <>
          {showPost && (
            <>
              <Divider orientation="left">List Post</Divider>
              <List
                footer={
                  <Pagination
                    defaultCurrent={1}
                    total={post.length}
                    showSizeChanger
                    onChange={onChangePage}
                  />
                }
                bordered
                dataSource={showPost}
                renderItem={(item) => (
                  // console.log(item, "item")
                  <List.Item>
                    <List.Item.Meta
                      title={<>{item?.title || "Titulo"}</>}
                      description={item?.body || "Cuerpo del mensaje"}
                    />
                  </List.Item>
                )}
              />
            </>
          )}
          {/* {currentTableData.map((item) => {
            return <div>{item?.title}</div>;
          })} */}
        </>
      )}
    </>
  );
};

export default Post;
