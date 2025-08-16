"use client"

import React, { useState } from "react"
import { Button, Card, Form, Input, Typography } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import Link from "next/link"
import { useRouter } from "next/navigation"

const { Title, Text } = Typography

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        localStorage.setItem("user", JSON.stringify({ email, name: email.split("@")[0] }))
        router.push("/")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card className="shadow-xl border-0" style={{ maxWidth: 400, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <Title level={2} style={{ color: '#262626' }}>Welcome Back</Title>
        <Text type="secondary">Sign in to your expense tracker account</Text>
      </div>
      <Form layout="vertical" onSubmitCapture={handleLogin}>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </Form.Item>
        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            block 
            loading={isLoading}
            icon={isLoading ? <LoadingOutlined /> : null}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <Text>
          Don&apos;t have an account?{" "}
          <Link href="/register" style={{ color: '#1890ff' }}>
            Sign up
          </Link>
        </Text>
      </div>
    </Card>
  )
}