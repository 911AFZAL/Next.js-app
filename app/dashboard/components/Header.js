"use client";
import { Search, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#0a0f3c] to-[#002060] text-white px-6 py-3 flex items-center justify-between shadow-md">
      
    

      {/* Center - Search Bar */}
      <div className="flex-1 px-6">
        <div className="relative w-full max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-[#002060] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-white" size={18} />
        </div>
      </div>

      {/* Right - User Info & Settings */}
      <div className="flex items-center gap-6">
        {/* Settings Icon */}
        <button className="p-2  rounded-full bg-[#232ccf] text-white hover:bg-gray-200">
          <Settings size={18} />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3  px-3 py-2 rounded-lg">
          <img
            src="image.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="leading-tight">
            <p className="font-semibold">Md Azad</p>
            <p className="text-xs text-gray-300">mdazad@marc2web.com</p>
          </div>
        </div>

        
      </div>
    </header>
  );
}
