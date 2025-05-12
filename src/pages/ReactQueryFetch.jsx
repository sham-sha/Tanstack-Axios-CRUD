import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { List, Typography, Spin, Alert } from "antd";

function ReactQueryFetch() {
  const fetchPost = () => {
    return axios.get("http://localhost:3001/posts");
  };

  const { data, isLoading, error, isError , isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPost(),
  });

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin tip="Loading..." size="large" />
      </div>
    );
  }

  console.log("isLoading: ",isFetching);
  
  if (isError) {
    return (
      <Alert
        message="Error"
        description={error.message}
        type="error"
        showIcon
        style={{ marginTop: 50 }}
      />
    );
  }

  return (
    <main>
      <Typography.Title level={4}>This is fetch page</Typography.Title>
      <List
        bordered
        dataSource={data?.data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>{item.title}</Typography.Text>
          </List.Item>
        )}
      />
    </main>
  );
}

export default ReactQueryFetch;
 