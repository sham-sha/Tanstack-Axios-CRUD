import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "antd";
import "../css/Navbar.css";

const items = [
  {
    label: <NavLink to="/">Home</NavLink>,
    key: "/", // Match exact pathname
    // icon: <HomeOutlined />,
  },
  {
    label: <NavLink to="/fetch">Regular Fetch</NavLink>,
    key: "/fetch",
    // icon: <FolderOutlined />,
  },
  {
    label: <NavLink to="/react-query">React Query Fetch</NavLink>,
    key: "/react-query",
    // icon: <ProfileOutlined />,
  },
  {
    label: (
      <NavLink to="/react-query-fetch-byClick">Query Fetch By Click</NavLink>
    ),
    key: "/react-query-fetch-byClick",
    // icon: <ProfileOutlined />,
  },
  {
    label: <NavLink to="/react-pagination-query">Query Fetch By Click</NavLink>,
    key: "/react-pagination-query",
    // icon: <ProfileOutlined />,
  },

  {
    label: <NavLink to="/infinite-scroll">Infinite Scroll</NavLink>,
    key: "/infinite-scroll",
    // icon: <ProfileOutlined />,
  },
  {
    label: <NavLink to="/use-queries">Use Queries</NavLink>,
    key: "/use-queries",
    // icon: <ProfileOutlined />,
  },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <div className="Navbar">
      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={items}
        
      />
    </div>
  );
}
