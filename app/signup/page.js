"use client";

import { useState } from "react";

export default function SignupPage() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // user data ko object me store karenge
    const userData = {
      mobile,
      password,
    };

    // localStorage me save
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Signup successful! Data saved in localStorage ✅");

    // input clear karne ke liye
    setMobile("");
    setPassword("");
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-90">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-6">
          <img
            src="doc.jpg" // apna logo yaha daal dena
            alt="Logo"
            className="mx-auto w-16"
          
          />
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">Create your account</p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
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
            Sign Up
          </button>
        </form>

        {/* Already have account */}
        <p className="text-gray-400 text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
    
  );
}
