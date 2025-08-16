/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Button, Card, Form, Input, Typography, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { useLoginUserMutation } from "@/redux/service/auth/authApi";
import { setUser } from "@/redux/features/auth";
import { toast } from "sonner";

// RTK & Auth




const { Title, Text } = Typography;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [loginUser] = useLoginUserMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const loginData = { email, password };

      // Call real API
      const result = await loginUser(loginData).unwrap();


      if(result.success){
        toast.success(result?.message)
        
      // Extract user and tokens
      const { user, accessToken, refreshToken     } = result.data;

      // Save user to Redux (tokens are in HTTP-only cookies, so optional here)
      dispatch(
        setUser({
          user,
          accessToken,
          refreshToken
        })
      );

      // Save only safe user data in localStorage (for persistence)
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect to dashboard
      router.push("/");
      // router.refresh();
      }else{
        toast.error(result?.message)
      }


    } catch (error: any) {
      const errorMessage =
        error?.data?.message || "Login failed. Please check your credentials.";
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
            Welcome Back
          </Title>
          <Text type="secondary">Sign in to your expense tracker account</Text>
        </div>

        <Form layout="vertical" onSubmitCapture={handleLogin}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              loading={isLoading}
              icon={isLoading ? <LoadingOutlined /> : null}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Text>
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" style={{ color: "#1890ff", fontWeight: 500 }}>
              Sign up
            </Link>
          </Text>
        </div>
      </Card>
    </div>
  );
}