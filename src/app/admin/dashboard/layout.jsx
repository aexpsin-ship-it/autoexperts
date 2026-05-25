"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import {
  FilePlus2,
  Files,
  Mail,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menu = [
    {
      name: "Blog Add",
      href: "/admin/dashboard/blog-add",
      icon: FilePlus2,
    },
    {
      name: "Blog List",
      href: "/admin/dashboard/blog-list",
      icon: Files,
    },
    {
      name: "Contact Forms",
      href: "/admin/dashboard/contacts",
      icon: Mail,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex overflow-hidden">
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[280px] bg-black text-white flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* TOP */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6 flex-shrink-0">
          <div>
            <p className="text-yellow-400 text-xs uppercase tracking-[3px] font-semibold">
              Auto Experts
            </p>

            <h2 className="text-2xl font-black mt-1">
              Admin Panel
            </h2>
          </div>

          {/* MOBILE CLOSE */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X size={24} />
          </button>
        </div>

        {/* MENU */}
        <div className="flex-1 overflow-y-auto px-5 py-6">
          <p className="text-xs uppercase tracking-[3px] text-gray-500 mb-5">
            Navigation
          </p>

          <nav className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-4 font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white text-black shadow-lg"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={20} />

                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* LOGOUT */}
        <div className="border-t border-white/10 p-5 flex-shrink-0">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 rounded-2xl bg-red-500 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-600"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-[280px] flex flex-col min-h-screen">
        {/* TOPBAR */}
        <header className="sticky top-0 z-30 h-[72px] border-b border-gray-200 bg-white px-4 sm:px-6 lg:px-8 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* MOBILE MENU */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200"
            >
              <Menu size={22} />
            </button>

            <div>
              <h1 className="text-xl sm:text-2xl font-black text-black">
                Auto Experts Dashboard
              </h1>

              <p className="hidden sm:block text-sm text-gray-500">
                Manage website content and customer
                inquiries
              </p>
            </div>
          </div>

          {/* ADMIN */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black font-bold text-white">
              A
            </div>

            <div>
              <p className="font-semibold text-black">
                Admin
              </p>

              <p className="text-xs text-gray-500">
                Super Admin
              </p>
            </div>
          </div>
        </header>

        {/* PAGE */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-[1600px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}