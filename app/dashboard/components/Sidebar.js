"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User, Home, FileText, MapPin, Users, Settings, LogOut, X, ChevronRight, Menu
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  const isActive = (p) => pathname === p;

  const menu = [
    { name: "Profile",    icon: <User size={20} />, path: "/profile" },
    { name: "Dashboard",  icon: <Home size={20} />, path: "/dashboard" },
    { name: "Documents",  icon: <FileText size={20} />, path: "/documents", chevron: true },
    { name: "Locations",  icon: <MapPin size={20} />, path: "/locations" },
    { name: "Users",      icon: <Users size={20} />, path: "/users" },
    { name: "Settings",   icon: <Settings size={20} />, path: "/settings" },
    { name: "Signout",    icon: <LogOut size={20} />, path: "/signout" },
  ];

  return (
    <>

    {/* Orange overlay shown only when sidebar is closed */}
      {!open && (
        <div className="fixed left-0 top-0 h-full w-[255px] bg-[#0a0f3c] transition-colors duration-300 z-30" />
      )}
      {/* === Sidebar === */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 text-white z-50 transition-all duration-300
                    bg-gradient-to-b from-[#0a0f3c] to-[#002060] ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* === Top Brand (Logo + EVOLVEONAI + tagline) === */}
        <div className="px-6 pt-6">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <img src="cat.jpg" alt="EvolveONAI" className="h-10 w-10 rounded-full object-cover" />
            <div className="leading-tight">
              <div className="text-base font-extrabold tracking-wider text-[#7ec0ff]">
                EVOLVEONAI
              </div>
              <div className="text-[11px] text-blue-200/80">Future Evolves Now</div>
            </div>
          </div>

          {/* Close (X) button */}
          <button
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-md p-1.5 hover:bg-white/10"
            aria-label="Close sidebar"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* === Menu === */}
        <nav className="mt-6 px-4 space-y-2">
          {menu.map((item) => (
            <Link key={item.name} href={item.path} className="block">
              <div
                className={`flex items-center justify-between rounded-xl px-3 py-2 transition
                  ${isActive(item.path)
                    ? "bg-[#232ccf] shadow-sm"
                    : "hover:bg-white/10"
                  }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-[15px]">{item.name}</span>
                </div>
                {item.chevron && <ChevronRight size={18} className="opacity-80" />}
              </div>
            </Link>
          ))}
        </nav>

        {/* === Bottom DocSense === */}
        <div className="absolute bottom-6 left-0 w-full px-6">
          <div className="flex flex-col items-center">
            <img src="doc.jpg" alt="DocSense" className="h-20 mb-2 object-contain" />
            <div className="text-[30px] font-semibold leading-none">DocSense</div>
            <div className="mt-1 text-[11px] tracking-[0.18em] text-gray-100/90">
              DOCUMENT PROCESSING
            </div>
          </div>
        </div>
      </aside>

      {/* === Open Button (always visible when closed) === */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-6 left-4 z-50 rounded-md bg-[#0a0f3c] p-2 text-white shadow-lg hover:bg-[#232ccf]"
          aria-label="Open sidebar"
        >
          <Menu className="h-6 w-6" />
        </button>
      )}
    </>
  );
}
