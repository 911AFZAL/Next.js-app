import Sidebar from "../dashboard/components/Sidebar";
import Header from "../dashboard/components/Header";
import User from "../dashboard/components/User";

export default function Layout({ children }) {
  return (
    <div className="flex relative">
      {/* Sidebar fixed */}
      <Sidebar />

      {/* Main area */}
      <div className="ml-64 flex-1 min-h-screen bg-gray-50">
        <Header />
        <main className="p-6 mt-16">{children}</main>
      </div>
    </div>
  );
}
