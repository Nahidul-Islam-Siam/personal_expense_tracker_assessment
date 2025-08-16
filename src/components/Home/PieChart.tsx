/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { PieChartIcon } from "lucide-react"

interface Expense {
  id: string
  title: string
  amount: number
  category: string
  date: string
}

interface ExpenseChartProps {
  expenses: Expense[]
}

const COLORS = {
  Food: "#f97316",
  Transport: "#3b82f6",
  Shopping: "#8b5cf6",
  Entertainment: "#ec4899",
  Bills: "#ef4444",
  Healthcare: "#10b981",
  Others: "#6b7280",
}

export default function ExpenseChart({ expenses }: ExpenseChartProps) {
  // Calculate category totals
  const categoryTotals = expenses.reduce(
    (acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount
      return acc
    },
    {} as Record<string, number>,
  )

  // Convert to chart data format
  const chartData = Object.entries(categoryTotals).map(([category, amount]) => ({
    name: category,
    value: amount,
    color: COLORS[category as keyof typeof COLORS] || COLORS.Others,
  }))

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0]
      return (
        <div className="bg-white p-2 border rounded-lg shadow-lg text-xs">
          <p className="font-semibold">{data.name}</p>
          <p className="text-gray-600">
            ${data.value.toFixed(2)} (
            {((data.value / expenses.reduce((sum, exp) => sum + exp.amount, 0)) * 100).toFixed(1)}%)
          </p>
        </div>
      )
    }
    return null
  }

  if (expenses.length === 0) {
    return (
      <div className="text-center py-6">
        <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
          <PieChartIcon className="h-6 w-6 text-gray-400" />
        </div>
        <p className="text-gray-500 text-sm">No data</p>
        <p className="text-xs text-gray-400">Add expenses first</p>
      </div>
    )
  }

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={chartData} cx="50%" cy="50%" innerRadius={30} outerRadius={80} paddingAngle={2} dataKey="value">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-2 flex flex-wrap gap-2 justify-center">
        {chartData.map((entry, index) => (
          <div key={index} className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-xs text-gray-600">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
  