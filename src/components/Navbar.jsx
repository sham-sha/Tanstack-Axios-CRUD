import React from "react";
import { NavLink } from "react-router-dom";
import { FolderOutlined, HomeOutlined , ProfileOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import "../css/Navbar.css";
import { DatabaseBackup } from 'lucide-react';


const items = [
  {
    label: <NavLink to="/">Home</NavLink>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <NavLink to="/fetch">Regular Fetch</NavLink>,
    key: "fetch",
    icon: <FolderOutlined />,
  },
  {
    label: <NavLink to="/react-query-fetch">React Query Fetch</NavLink>,
    key: "react-query-fetch",
    icon: <ProfileOutlined />,
  },
  {
    label: <NavLink to="/react-query-fetch-by-click">Query Fetch By Click</NavLink>,
    key: "react-query-fetch-by-click",
    icon: <ProfileOutlined /> ,
  },
];

function Navbar() {
  
  return (
    <div className="Navbar">
      <Menu mode="horizontal" items={items}  />
    </div>
  );
}

export default Navbar;

