import axios from "axios";
import React, { useEffect, useState } from "react";
import '../css/Fetch.css'



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
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <p>wait till loading</p>;
  }

  if (isError) {
    return <p style={{color:"red"}}>error {error.message}</p>;
  }

  return (
    <main>
      <p> This is fetch page</p>
      <ul className="posts">
        {posts.map((post) => {
          return <li key={post.id} className="post">{post.title}</li>;
        })}
      </ul>
    </main>
  );
}

export default Fetch;
