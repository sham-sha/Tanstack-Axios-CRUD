import React from "react";
import axios from "axios";
import  { useEffect, useState } from 'react';
import { Avatar, Divider, List, Skeleton } from 'antd';
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "@tanstack/react-query";

// const fetchItems = (pageParam) => {
//   return axios.get(`http://localhost:3001/items?_limit=10&_page=${pageParam}`)
//     .then((response) => response.data);
// };

const InfiniteQueries = () => {
//   const { data, isLoading, isError } = useInfiniteQuery({
//     queryKey: ["items"],
//     queryFn: fetchItems,
//     initialPageParam: 1,
//     getNextPageParam:(  lastPage, allPages) => {
//         if (allPages.length < 10) {
//             return allPages.length + 1; // Increment page number for next fetch
//         }
//         return undefined; // No more pages to fetch
//     }
//   });

const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(`http://localhost:3001/items?page=${page}&limit=10`)
      .then(res => res.json())
      .then(res => {
        const results = Array.isArray(res) ? res : [];
        setData([...data, ...results]);
        setLoading(false);
        setPage(page + 1);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div
      id="scrollableDiv"
      style={{
        height: 700,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.email}>
              <List.Item.Meta
                // avatar={<Avatar src={item.avatar} />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.colour}
                
              />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteQueries;
