import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import React from "react";
import { Menu } from "antd";

export default function NavigationBar() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      theme="dark"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <Menu.Item key={1}>
        <span>Home</span>
      </Menu.Item>
      <Menu.Item key={2}>Orders</Menu.Item>
    </Menu>
  );
}
