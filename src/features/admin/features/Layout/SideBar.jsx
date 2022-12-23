import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { ToolOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const { Sider } = Layout;
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { contact } = useAuth();
  const { logo } = contact;
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const items = [
    {
      label: "Configuration",
      key: "sub1",
      icon: <ToolOutlined />,
      children: [
        {
          key: "1",
          label: <Link to="/admin/dashboard/actualites"> Actualités</Link>,
        },
        {
          key: "2",
          label: <Link to="/admin/dashboard/contact"> Contact</Link>,
        },
        {
          key: "3",
          label: <Link to="/admin/dashboard/pizzas"> Pizzas</Link>,
        },
      ],
    },
    {
      label: "Profil",
      key: "sub2",
      icon: <UserOutlined />,
      children: [
        {
          key: "4",
          label: <Link to="/admin/dashboard/profile"> Modifier le profil</Link>,
        },
      ],
    },
  ];

  return (
    <Sider
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={250}
      className="site-layout-background"
      theme="dark"
    >
      <img
        src={logo}
        alt="Pizza Kika"
        id="logo"
        className={collapsed ? "logo collapsed" : "logo"}
      />
      <Menu
        mode="inline"
        defaultSelectedKeys={["3"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        theme="dark"
        items={items}
      />
    </Sider>
  );
};

export default SideBar;
