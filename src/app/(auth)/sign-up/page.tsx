"use client"

import React, { useState } from "react"
import { Button, Card, Form, Input, Typography, message } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import Link from "next/link"
import { useRouter } from "next/navigation"

const { Title, Text } = Typography

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      message.error("Passwords do not match")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (name && email && password) {
        localStorage.setItem("user", JSON.stringify({ email, name }))
        router.push("/")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card className="shadow-xl border-0" style={{ maxWidth: 400, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <Title level={2} style={{ color: '#262626' }}>Create Account</Title>
        <Text type="secondary">Sign up for your expense tracker account</Text>
      </div>
      <Form layout="vertical" onSubmitCapture={handleRegister}>
        <Form.Item 
          label="Full Name" 
          name="name" 
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <Input 
            placeholder="Enter your full name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </Form.Item>
        <Form.Item 
          label="Email" 
          name="email" 
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]}
        >
          <Input 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Item>
        <Form.Item 
          label="Password" 
          name="password" 
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password 
            placeholder="Create a password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </Form.Item>
        <Form.Item 
          label="Confirm Password" 
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('The two passwords do not match!'))
              },
            }),
          ]}
        >
          <Input.Password 
            placeholder="Confirm your password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
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
            {isLoading ? "Creating account..." : "Create Account"}
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <Text>
          Already have an account?{" "}
          <Link href="/login" style={{ color: '#1890ff' }}>
            Sign in
          </Link>
        </Text>
      </div>
    </Card>
  )
}