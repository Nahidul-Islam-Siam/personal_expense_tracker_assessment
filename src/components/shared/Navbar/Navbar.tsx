"use client"

import React from "react";
import { Avatar, Button, Dropdown, Typography, Space, Divider, Menu } from "antd";
import { LoginOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Text, Title } = Typography;

// Self-contained user type and mock data
type AuthUser = {
  id: string;
  name: string;
  email: string;
  avatarColor?: string;
};

const mockUser: AuthUser = {
  id: "user-123",
  name: "John Doe",
  email: "john@example.com",
  avatarColor: "#1890ff"
};

const useAuth = () => {
  const [user, setUser] = React.useState<AuthUser | null>(mockUser);
  
  const logout = () => {
    setUser(null);
    console.log("User logged out");
  };

  const login = () => {
    setUser(mockUser);
    console.log("User logged in");
  };

  return { user, logout, login };
};

const UserDropdown = ({ user, onLogout }: { user: AuthUser; onLogout: () => void }) => {
  const menu = (
    <Menu>
      <Menu.Item key="profile" disabled>
        <Space>
          <UserOutlined />
          <div className="flex flex-col">
            <Text strong>{user.name}</Text>
            <Text type="secondary" className="text-xs">
              {user.email}
            </Text>
          </div>
        </Space>
      </Menu.Item>
      <Divider style={{ margin: "8px 0" }} />
      <Menu.Item 
        key="logout" 
        onClick={onLogout} 
        icon={<LogoutOutlined />}
        danger
      >
        Sign Out
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Button type="text" className="flex items-center gap-2 hover:bg-white/50">
        <Avatar
          size="small"
          style={{ 
            backgroundColor: user.avatarColor || "#1890ff", 
            color: "white" 
          }}
        >
          {user.name.charAt(0).toUpperCase()}
        </Avatar>
        <span className="hidden sm:inline text-sm font-medium">
          {user.name}
        </span>
      </Button>
    </Dropdown>
  );
};

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center justify-between mb-6 container">
      <div>
        <Title level={3} className="!mb-0 !text-gray-900">
          Expense Tracker
        </Title>
        <Text type="secondary">
          {user ? `Welcome, ${user.name}!` : "Demo Mode - Sign in to save data"}
        </Text>
      </div>

      <div className="flex items-center gap-2">
        {user ? (
          <UserDropdown user={user} onLogout={logout} />
        ) : (
          <Link href="/auth/login">
            <Button size="small" icon={<LoginOutlined />}>
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;