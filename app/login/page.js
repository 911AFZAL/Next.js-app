"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // localStorage 
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const userData = JSON.parse(storedUser);

      // check user credentials
      if (userData.mobile === mobile && userData.password === password) {
        alert("Login successful ");

        // yaha aap user ko dashboard par le ja sakte ho
        router.push("/dashboard");
      } else {
        alert("Invalid mobile number or password ❌");
      }
    } else {
      alert("No user found! Please signup first.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-90">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-6">
          <img
            src="doc.jpg" // apna logo yaha daalna
            alt="Logo"
            className="mx-auto w-16"
          />
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">Login to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm mb-1">
              Mobile Number
            </label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter Mobile Number"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors p-3 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        {/* Signup redirect */}
        <p className="text-gray-400 text-sm text-center mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}
