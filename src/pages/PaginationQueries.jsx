import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card, Pagination, Row, Col, Spin, Alert } from "antd";

const fetchItems = (page) => {
  return axios
    .get(`http://localhost:3001/items?_page=${page}`)
    .then((response) => response.data);
};

const PaginationQueries = () => {
  const [current, setCurrent] = useState(1); 

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["items", current],
    queryFn: () => fetchItems(current),
    keepPreviousData: true,
  });

  const handleChange = (page) => {
    setCurrent(page);
  };

  if (isError) {
    return (
      <Alert
        message="Error"
        description={error.message}
        type="error"
        showIcon
        style={{ margin: 50 }}
      />
    );
  }

  const skeletonArray = Array.from({ length: 10 });

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={[16, 16]}>
        {(isLoading ? skeletonArray : data)?.map((item, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item?.id || index}>
            <Card
              loading={isLoading}
              title={!isLoading ? item.name : undefined}
              style={{ width: "100%" }}
              size="small"
            >
              {!isLoading && (
                <p>{item.colour || "No description available."}</p>
              )}
              {!isLoading && (
                <p>
                  {`vitamin ${item.vitamin}` || "No description available."}
                </p>
              )}
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        current={current}
        onChange={handleChange}
        total={100} // replace with actual total if available
        pageSize={10}
        showSizeChanger={false}
        style={{ marginTop: 24, textAlign: "center" }}
      />
    </div>
  );
};

export default PaginationQueries;
