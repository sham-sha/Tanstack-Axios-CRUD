import React from "react";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import { Spin, Alert } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

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

  const isLoading = postQueries.some((query)=>query.isLoading);

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
        <Spin tip="Loading..." size="large" indicator={<LoadingOutlined spin />} />
      </div>
    );
  }

  else{
    
  }

  console.log("post", postQueries);
};

const UseQueriesDemo = () => {
  const postIds = [1, 2, 5, 4, 8];
  return (
    <main>
      <p>Use Queries Demo</p>
      <MultiplePosts postIds={postIds} />
    </main>
  );
};

export default UseQueriesDemo;
