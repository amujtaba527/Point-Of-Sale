"use client";

import React, { ReactNode, useState, useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  Package,
  ShoppingCart,
  FileText,
  Users,
  Settings,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import clsx from "clsx";

interface SidebarProps {
  children: ReactNode;
  user?: {
    name: string;
    email: string;
    avatarInitial?: string;
  };
}

export default function Sidebar({ children, user }: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const handleSidebarLinkClick = useCallback(() => closeSidebar(), [closeSidebar]);

  const sidebarLinks = useMemo(() => [
    { href: "/dashboard", icon: Home, text: "Dashboard" },
    { href: "/sale", icon: ShoppingCart, text: "Sales" },
    { href: "/purchase", icon: Package, text: "Purchases" },
    { href: "/product", icon: Package, text: "Products" },
    { href: "/inventory", icon: Package, text: "Inventory" },
    { href: "/vendor", icon: Users, text: "Vendors"},
    { href: "/customers", icon: Users, text: "Customers" },
    { href: "/reports", icon: FileText, text: "Reports" },
    { href: "/settings", icon: Settings, text: "Settings" },
  ], []);

  const userDisplay = {
    avatar: user?.avatarInitial || user?.name?.[0] || "A",
    name: user?.name || "Admin User",
    email: user?.email || "admin@example.com",
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-gray-900">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          role="button"
          tabIndex={0}
          aria-hidden={!sidebarOpen}
          onClick={closeSidebar}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              closeSidebar();
            }
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        role="navigation"
        aria-label="Sidebar"
        className={clsx(
          "bg-white border-r border-gray-200 flex flex-col py-8 px-4 w-64",
          "sticky top-0 h-screen z-20", // ensure sticky on desktop
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "fixed md:static inset-y-0 left-0 transition-transform duration-200"
        )}
      >
        <div className="p-6 border-b flex flex-col items-center">
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-full p-2 shadow-lg mb-2">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 2c-2.67 0-8 1.337-8 4v2a1 1 0 001 1h14a1 1 0 001-1v-2c0-2.663-5.33-4-8-4z" />
            </svg>
          </div>
          <Link href="/dashboard" className="text-2xl font-extrabold text-gray-800 tracking-tight text-center">
            POS Admin
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          {sidebarLinks.map(({ href, icon: Icon, text }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
              key={href} href={href} className={clsx( 
                "flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-base transition-all duration-150 group",
                {
                  "bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg": isActive,
                  "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700": !isActive,
                }
              )}
              aria-current={isActive ? "page" : undefined}
              onClick={handleSidebarLinkClick}
            >
              <span className={clsx("flex items-center justify-center", isActive ? "" : "text-indigo-400 group-hover:text-indigo-600")}> <Icon size={20} /> </span>
              <span>{text}</span>
            </Link>

            );
          })}
        </nav>

        <div className="absolute bottom-0 border-t w-full p-6 bg-white/80 rounded-br-3xl">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-md">
              {userDisplay.avatar}
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-gray-800">{userDisplay.name}</p>
              <p className="text-xs text-gray-500">{userDisplay.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Topbar */}
        <header className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex justify-between items-center sticky top-0 z-30">
          <button
            className="md:hidden text-gray-600 hover:text-indigo-700 transition"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            aria-expanded={sidebarOpen}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden md:block">
            <h1 className="text-2xl font-extrabold text-indigo-700 tracking-tight">POS Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-indigo-700 font-semibold transition"
                aria-label="Logout"
              >
                <LogOut size={20} />
              <span className="hidden md:inline">Logout</span>
            </button>
            </Link>
          </div>
        </header>

        {/* Page content */}
        <div className="py-4 pt-20 md:pt-4 px-4">{children}</div>
      </main>
    </div>
  );
}
