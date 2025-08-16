/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Button, Card, Form, Input, Typography, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useRegisterUserMutation } from "@/redux/service/auth/authApi";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { setUser } from "@/redux/features/auth";
import { toast } from "sonner";


const { Title, Text } = Typography;

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [registerUser] = useRegisterUserMutation();

  const onFinish = async () => {
    if (password !== confirmPassword) {
      message.error("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    try {
      const userData = { name, email, password };

      const result = await registerUser(userData).unwrap();

      if(result.success){
        toast.success(result?.message)
      }else{
        toast.error(result?.message)
      }

    

      const { user, accessToken, refreshToken } = result.data;

      // Save to Redux
      dispatch(
        setUser({
          user,
          accessToken,
          refreshToken,
        })
      );

      // Save to localStorage for persistence
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect to dashboard or home
      router.push("/");
      // router.refresh();
    } catch (error: any) {
      const errorMessage =
        error?.data?.message || "Registration failed. Please try again.";
      message.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <Card
        className="shadow-lg"
        style={{
          maxWidth: 420,
          width: "100%",
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Title level={2} style={{ margin: 0, color: "#181818" }}>
            Create Account
          </Title>
          <Text type="secondary">Sign up to manage your expenses</Text>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          {/* Full Name */}
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="large"
            />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input
              placeholder="johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="large"
            />
          </Form.Item>

          {/* Password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter a password" }]}
          >
            <Input.Password
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="large"
            />
          </Form.Item>

          {/* Confirm Password */}
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              size="large"
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              loading={isLoading}
              icon={isLoading ? <LoadingOutlined /> : null}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </Form.Item>
        </Form>

        {/* Sign In Link */}
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Text>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "#1890ff", fontWeight: 500 }}>
              Sign In
            </Link>
          </Text>
        </div>
      </Card>
    </div>
  );
}