import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { List, Typography, Spin, Alert, Button } from "antd";

import "../css/Button.css";

function ReactQueryFetchByClick() {
  const fetchPost = () => {
    return axios.get("http://localhost:3001/posts");
  };

  const { data, isLoading, error, isError, isFetching, refetch } = useQuery({
    queryKey: ["posts-1"],
    queryFn: fetchPost,
    staleTime: 1000,
    // refetchInterval: 1000,
    enabled: false,
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

  console.log("isLoading: ", isFetching);

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
      <p>This is fetch page</p>
      <List
        bordered
        dataSource={data?.data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>{item.title}</Typography.Text>
          </List.Item>
        )}
      />
      <Button type="primary" className="btn" onClick={refetch}>
        Click
      </Button>
    </main>
  );
}

export default ReactQueryFetchByClick;
