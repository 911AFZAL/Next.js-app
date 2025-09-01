"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import {
  FileText,
  CheckCircle,
  Clock,
  MapPin,
  Users,
} from "lucide-react";

export default function DashboardPage() {
  const [filter, setFilter] = useState("30d");

  // === Sample Data ===
  const docsData = [
    { date: "01 Aug", value: 65 },
    { date: "02 Aug", value: 75 },
    { date: "03 Aug", value: 72 },
    { date: "04 Aug", value: 91 },
    { date: "05 Aug", value: 80 },
    { date: "06 Aug", value: 69 },
    { date: "07 Aug", value: 55 },
    { date: "08 Aug", value: 72 },
    { date: "09 Aug", value: 60 },
    { date: "10 Aug", value: 75 },
    { date: "11 Aug", value: 70 },
    { date: "12 Aug", value: 85 },
  ];

  const usersData = [
    { name: "1M", value: 40 },
    { name: "2M", value: 50 },
    { name: "3M", value: 86 },
    { name: "4M", value: 60 },
    { name: "5M", value: 45 },
  ];

  const cards = [
    {
      title: "Total Docs",
      value: "60,000",
      icon: <FileText className="h-7 w-7 text-pink-600" />,
      border: "border-pink-500",
    },
    {
      title: "Verified Docs",
      value: "25,000",
      icon: <CheckCircle className="h-7 w-7 text-blue-600" />,
      border: "border-blue-500",
    },
    {
      title: "Pending Docs",
      value: "35,000",
      icon: <Clock className="h-7 w-7 text-green-600" />,
      border: "border-green-500",
    },
    {
      title: "Total Locations",
      value: "75",
      icon: <MapPin className="h-7 w-7 text-purple-600" />,
      border: "border-purple-500",
    },
    {
      title: "Total Users",
      value: "18",
      icon: <Users className="h-7 w-7 text-orange-600" />,
      border: "border-orange-500",
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1 min-h-screen bg-gray-100">
        <Header />

        <main className="p-6">
          {/* === Top Header with Filter === */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <select
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
  className="rounded-lg border px-4 py-2 text-sm font-medium shadow-sm focus:ring focus:ring-blue-300 bg-white text-gray-700 appearance-none"
>
  <option value="30d">Last 30 days</option>
  <option value="7d">Last 7 days</option>
  <option value="90d">Last 90 days</option>
</select>

          </div>

          {/* === Cards === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {cards.map((c, i) => (
              <div
                key={i}
                className={`p-5 bg-white rounded-xl shadow-md border-t-4 ${c.border} flex items-center justify-between`}
              >
                <div>
                  <p className="text-sm text-gray-600 font-medium">{c.title}</p>
                  <p className="text-2xl font-bold mt-2 text-gray-900">
                    {c.value}
                  </p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg shadow-inner">
                  {c.icon}
                </div>
              </div>
            ))}
          </div>

          {/* === Graphs === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            {/* Total Docs Line Chart */}
            <div className="bg-white rounded-xl p-5 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-gray-800">Total Docs</h2>
                <div className="flex gap-4 text-sm font-medium text-gray-500">
                  <span className="cursor-pointer text-blue-600">Daily</span>
                  <span className="cursor-pointer">Weekly</span>
                  <span className="cursor-pointer">Monthly</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={docsData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#e5e7eb"
                    vertical={false}
                  />
                  <XAxis dataKey="date" stroke="#6b7280" />
                  <YAxis hide />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ r: 5, fill: "#2563eb" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Total Users Bar Chart */}
            <div className="bg-white rounded-xl p-5 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-gray-800">Total Users</h2>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={usersData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#e5e7eb"
                    vertical={false}
                  />
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis hide />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2563eb" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm mt-10">
            © 2025 EvolveONAI Ventures
          </div>
        </main>
      </div>
    </div>
  );
}
