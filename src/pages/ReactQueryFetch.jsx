import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { List, Typography, Spin, Alert } from "antd";
import { Link } from "react-router-dom";

function ReactQueryFetch() {
  const fetchPost = () => {
    return axios.get("http://localhost:3001/posts");
  };

  const { data, isLoading, error, isError, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
    // staleTime:5000,
    // refetchInterval: 1000,
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
            <Typography.Link>
              <Link to={`/react-query/${item.id}`}>{item.title}</Link>
            </Typography.Link>
          </List.Item>
        )}
      />
    </main>
  );
}

export default ReactQueryFetch;
