import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spin, Alert, Button } from "antd";
import { Card } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";


const fetchPostById = (postID) => {
  return axios.get(`http://localhost:3001/posts/${postID}/`);
};

function ReactQueryByID() {
   let navigate = useNavigate();
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
        <Spin tip="Loading..." size="large"  />
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
      <Button
        type="primary"
        ghost="true"
        icon={<LeftOutlined />}
        className="mb-2"
        onClick={() => {
        navigate('/react-query');
      }}
        
      >
        Back
      </Button>
      <Card title={title} style={{ width: 300 }}>
        <p>{body}</p>
      </Card>
    </main>
  );
}

export default ReactQueryByID;
