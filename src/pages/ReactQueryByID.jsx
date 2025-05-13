import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { List, Typography, Spin, Alert } from "antd";

const fetchPostById = (postID) => {
  return axios.get(`http://localhost:3001/posts/${postID}`);
};

function ReactQueryByID() {

  const { postId } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => fetchPostById(postId),
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
      <p>React Query By ID</p>
    </main>
  );
}

export default ReactQueryByID;
