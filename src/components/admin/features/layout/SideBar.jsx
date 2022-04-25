import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { ToolOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

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
        defaultSelectedKeys={["2"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        theme="dark"
      >
        <SubMenu key="sub1" icon={<ToolOutlined />} title="Configuration">
          <Menu.Item key="1">
            <Link to="/admin/dashboard/actualites"> Actualités</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admin/dashboard/pizzas"> Pizzas</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/admin/dashboard/contact"> Contact</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<UserOutlined />} title="Profil">
          <Menu.Item key="4">
            <Link to="/admin/dashboard/profile"> Modifier le profil</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideBar;
