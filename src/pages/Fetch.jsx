import axios from "axios";
import React, { useEffect, useState } from "react";
import { List, Typography, Spin, Alert } from "antd";

import "../css/Fetch.css";

function Fetch() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/posts");
      setPosts(response.data);
    } catch (error) {
      setIsError(true);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
        description={error}
        type="error"
        showIcon
        style={{ marginTop: 50 }}
      />
    );
  }

  return (
    <main style={{ padding: "20px" }}>
      <Typography.Title level={4}>This is fetch page</Typography.Title>
      <List
        bordered
        dataSource={posts}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>{item.title}</Typography.Text>
          </List.Item>
        )}
      />
    </main>
  );
}

export default Fetch;
