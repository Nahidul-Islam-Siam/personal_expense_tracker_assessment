/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import {
  Layout,
  Card,
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Table,
  Tag,
  Space,

  Row,
  Col,
  Statistic,
  Popconfirm,
  message,
} from "antd"
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  DollarOutlined,
WarningOutlined,
  CreditCardOutlined,
} from "@ant-design/icons"
import type { ColumnsType } from "antd/es/table"
import dayjs from "dayjs"
import ExpenseChart from "./PieChart"
import Header from "../shared/Navbar/Navbar"


const {  Content } = Layout

const { Option } = Select

interface Expense {
  id: string
  title: string
  amount: number
  category: string
  date: string
  userId: string
}

const categories = [
  { value: "Food", color: "orange", icon: "🍕" },
  { value: "Transport", color: "blue", icon: "🚗" },
  { value: "Shopping", color: "green", icon: "🛍️" },
  { value: "Entertainment", color: "purple", icon: "🎬" },
  { value: "Bills", color: "red", icon: "📄" },
  { value: "Healthcare", color: "cyan", icon: "🏥" },
  { value: "Others", color: "default", icon: "📦" },
]

export default function ExpenseTrackerContainer() {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [form] = Form.useForm()
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null)
  const [filterCategory, setFilterCategory] = useState<string>("all")

  useEffect(() => {
    const demoExpenses: Expense[] = [
      {
        id: "demo1",
        title: "Demo: Grocery Shopping",
        amount: 85.5,
        category: "Food",
        date: "2024-01-15",
        userId: "demo",
      },
      {
        id: "demo2",
        title: "Demo: Gas Station",
        amount: 45.0,
        category: "Transport",
        date: "2024-01-14",
        userId: "demo",
      },
      {
        id: "demo3",
        title: "Demo: Netflix Subscription",
        amount: 15.99,
        category: "Entertainment",
        date: "2024-01-13",
        userId: "demo",
      },
    ]
    setExpenses(demoExpenses)
  }, [])

  const handleSubmit = (values: any) => {
    const expense: Expense = {
      id: editingExpense ? editingExpense.id : Date.now().toString(),
      title: values.title,
      amount: Number.parseFloat(values.amount),
      category: values.category,
      date: values.date.format("YYYY-MM-DD"),
      userId: "demo",
    }

    if (editingExpense) {
      setExpenses(expenses.map((exp) => (exp.id === editingExpense.id ? expense : exp)))
      message.success("Expense updated successfully!")
      setEditingExpense(null)
    } else {
      setExpenses([...expenses, expense])
      message.success("Expense added successfully!")
    }

    form.resetFields()
  }

  const handleEdit = (expense: Expense) => {
    setEditingExpense(expense)
    form.setFieldsValue({
      title: expense.title,
      amount: expense.amount,
      category: expense.category,
      date: dayjs(expense.date),
    })
  }

  const handleDelete = (id: string) => {
    setExpenses(expenses.filter((exp) => exp.id !== id))
    message.success("Expense deleted successfully!")
  }

  const filteredExpenses =
    filterCategory === "all" ? expenses : expenses.filter((exp) => exp.category === filterCategory)
  const totalExpenses = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0)
  const averageExpense = filteredExpenses.length > 0 ? totalExpenses / filteredExpenses.length : 0
  const topCategory =
    filteredExpenses.length > 0
      ? categories.find(
          (cat) =>
            cat.value ===
            Object.entries(
              filteredExpenses.reduce(
                (acc, exp) => {
                  acc[exp.category] = (acc[exp.category] || 0) + exp.amount
                  return acc
                },
                {} as Record<string, number>,
              ),
            ).sort(([, a], [, b]) => b - a)[0]?.[0],
        )?.value || "None"
      : "None"

  const columns: ColumnsType<Expense> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => `$${amount.toFixed(2)}`,
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category: string) => {
        const cat = categories.find((c) => c.value === category)
        return (
          <Tag color={cat?.color}>
            {cat?.icon} {category}
          </Tag>
        )
      },
      filters: categories.map((cat) => ({ text: cat.value, value: cat.value })),
      onFilter: (value, record) => record.category === value,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date: string) => dayjs(date).format("MMM DD, YYYY"),
      sorter: (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix(),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this expense?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <Layout className="min-h-screen">
           <Header />
      <Content className="p-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Statistics Cards */}
          <Row gutter={[16, 16]} className="mb-6">
            <Col xs={24} sm={8}>
              <Card>
                <Statistic
                  title="Total Spent"
                  value={totalExpenses}
                  precision={2}
                  prefix={<DollarOutlined />}
                  valueStyle={{ color: "#cf1322" }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card>
                <Statistic
                  title="Average Expense"
                  value={averageExpense}
                  precision={2}
                  prefix={<WarningOutlined />}
                  valueStyle={{ color: "#1890ff" }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card>
                <Statistic
                  title="Top Category"
                  value={topCategory}
                  prefix={<CreditCardOutlined />}
                  valueStyle={{ color: "#52c41a" }}
                />
              </Card>
            </Col>
          </Row>

          <Row gutter={[24, 24]}>
            {/* Expense Chart */}
            <Col xs={24} lg={8}>
              <Card title="Expense Breakdown" className="h-fit mb-6">
                <div className="h-64">
                  <ExpenseChart expenses={filteredExpenses} />
                </div>
              </Card>

              {/* Add Expense Form */}
              <Card title={editingExpense ? "Edit Expense" : "Add New Expense"} className="h-fit">
                <Form form={form} layout="vertical" onFinish={handleSubmit} requiredMark={false}>
                  <Form.Item
                    name="title"
                    label="Title"
                    rules={[{ required: true, message: "Please enter expense title" }]}
                  >
                    <Input placeholder="Enter expense title" />
                  </Form.Item>

                  <Form.Item
                    name="amount"
                    label="Amount"
                    rules={[
                      { required: true, message: "Please enter amount" },
                      { pattern: /^\d+(\.\d{1,2})?$/, message: "Please enter valid amount" },
                    ]}
                  >
                    <Input prefix="$" placeholder="0.00" />
                  </Form.Item>

                  <Form.Item
                    name="category"
                    label="Category"
                    rules={[{ required: true, message: "Please select category" }]}
                  >
                    <Select placeholder="Select category">
                      {categories.map((cat) => (
                        <Option key={cat.value} value={cat.value}>
                          {cat.icon} {cat.value}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item name="date" label="Date" rules={[{ required: true, message: "Please select date" }]}>
                    <DatePicker className="w-full" />
                  </Form.Item>

                  <Form.Item>
                    <Space>
                      <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                        {editingExpense ? "Update" : "Add"} Expense
                      </Button>
                      {editingExpense && (
                        <Button
                          onClick={() => {
                            setEditingExpense(null)
                            form.resetFields()
                          }}
                        >
                          Cancel
                        </Button>
                      )}
                    </Space>
                  </Form.Item>
                </Form>
              </Card>
            </Col>

            {/* Expenses List */}
            <Col xs={24} lg={16}>
              <Card
                title="Expense List"
                extra={
                  <Select value={filterCategory} onChange={setFilterCategory} style={{ width: 120 }}>
                    <Option value="all">All</Option>
                    {categories.map((cat) => (
                      <Option key={cat.value} value={cat.value}>
                        {cat.value}
                      </Option>
                    ))}
                  </Select>
                }
                className="h-fit"
              >
                <Table
                  columns={columns}
                  dataSource={filteredExpenses}
                  rowKey="id"
                  pagination={{ pageSize: 10 }}
                  scroll={{ x: 800 }}
                  locale={{ emptyText: "No expenses added yet" }}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  )
}
