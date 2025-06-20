import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Spin, Alert, List, Card } from "antd";

const API_URL = "http://localhost:3001/crud";

// Fetch all posts
const fetchPosts = async () => {
  const { data } = await axios(API_URL);
  return data;
};

const Home = () => {
  // Fetch Posts
  const {
    data: posts,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
console.log(posts);


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
      <div className=" justify-center flex gap-4">
        <p className="mb-6 font-medium ">CRUD By Using React Query</p>
      </div>
    </main>
  );
};

export default Home;
