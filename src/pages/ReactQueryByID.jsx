import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spin, Alert } from "antd";
import { Card, Space } from "antd";

const fetchPostById = (postID) => {
  return axios.get(`http://localhost:3001/posts/${postID}`);
};

function ReactQueryByID() {
  const { postId } = useParams();
  const { data, isLoading, isError, error } = useQuery({
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
        <Spin tip="Loading..." size="large" fullscreen />
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

  const { title, body } = data?.data || {};

  return (
    <main>
      <Card title={title} style={{ width: 300 }}>
        <p>{body}</p>
      </Card>
    </main>
  );
}

export default ReactQueryByID;
