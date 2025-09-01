


"use client";
import React, { useState } from "react";

function page() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { mobile, password };
    localStorage.setItem("user", JSON.stringify(userData));
    setIsRegistered(true);
    alert("Signup successful! Data saved in localStorage ✅");
    setMobile("");
    setPassword("");
  };

  if (isRegistered || (typeof window !== "undefined" && localStorage.getItem("user"))) {
    // If already registered, show login link
    return (
      <div style={{textAlign: 'center', marginTop: '50px'}}>
        <h1>Signup complete!</h1>
        <a href="/login" style={{color: '#2563eb', fontWeight: 'bold', fontSize: '18px'}}>Go to Login</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-90">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">Create your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm mb-1">Mobile Number</label>
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
            <label className="block text-gray-300 text-sm mb-1">Password</label>
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
      </div>
    </div>
  );
}

export default page;
