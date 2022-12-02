import React, { useState } from "react";
import usePost from "./hooks";
import { Pagination } from "antd";
import { Table, List, Divider, Typography } from "antd";
import Spiner from "../Spiner";

const Post = () => {
  const { post, showPost, onChangePage, isLoading } = usePost();
  return (
    <>
      {isLoading && <Spiner />}
      {post && (
        <>
          {showPost && (
            <>
              <Divider orientation="left">
                <Typography.Title level={3} style={{ margin: 0 }}>
                  List Posts
                </Typography.Title>
              </Divider>
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
                  <List.Item>
                    <List.Item.Meta
                      title={<>{`${item?.id} - ${item?.title}` || "Titulo"}</>}
                      description={item?.body || "Cuerpo del mensaje"}
                    />
                  </List.Item>
                )}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Post;
