import React from "react";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import { Spin, Alert, List, Card } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const fetchPostById = async (id) => {
  const response = await axios.get(`http://localhost:3001/posts/${id}`);
  return response.data;
};

const MultiplePosts = ({ postIds }) => {
  const postQueries = useQueries({
    queries: postIds.map((id) => ({
      queryKey: ["posts", id],
      queryFn: () => fetchPostById(id),
    })),
  });

  const isLoading = postQueries.some((query) => query.isLoading);

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

  return (
    <List
      grid={{ gutter: 10, column: 2 }}
      dataSource={postQueries}
      renderItem={(item) => {
        if (item.isError) {
          return (
            <List.Item>
              <Alert
                message="Error"
                description={item.error.message}
                type="error"
                showIcon
              />
            </List.Item>
          );
        }

        const post = item.data;

        return (
          <List.Item>
            <Card
              hoverable="true"
              extra={`${post.id}`}
              title={` ${post.title}`}
              // loading='true'
              
            >
              {post.body}{" "}
            </Card>
          </List.Item>
        );
      }}
    />
  );
};

const UseQueriesDemo = () => {
  const postIds = [10, 2, 5, 8, 7];
  return (
    <main>
      <p className="mb-6">Use Queries Demo</p>
      <MultiplePosts postIds={postIds} />
    </main>
  );
};

export default UseQueriesDemo;
