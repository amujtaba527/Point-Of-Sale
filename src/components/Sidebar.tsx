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
  Bell,
  X,
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
    <div className="min-h-screen bg-gray-50 flex text-black">
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
          "bg-white w-64 shadow-md z-30 top-0 h-full transition-transform duration-300 fixed left-0 min-h-screen",
          "md:static md:translate-x-0 md:block",
          { "-translate-x-full": !sidebarOpen, "translate-x-0": sidebarOpen }
        )}
      >
        <div className="p-4 border-b">
          <Link href="/dashboard" className="flex items-center text-xl font-bold text-blue-600">
            POS Admin
          </Link>
        </div>

        <nav className="p-4 space-y-1">
          {sidebarLinks.map(({ href, icon: Icon, text }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
              key={href} href={href} className={clsx( 
                "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                {"bg-blue-100 text-blue-700": isActive,
                 "text-gray-600 hover:bg-gray-100": !isActive,})}
                 aria-current={isActive ? "page" : undefined}
                 onClick={handleSidebarLinkClick}
              >
                <Icon size={20} />
                <span>{text}</span>
              </Link>

            );
          })}
        </nav>

        <div className="absolute bottom-0 border-t w-full p-4">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
              {userDisplay.avatar}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{userDisplay.name}</p>
              <p className="text-xs text-gray-500">{userDisplay.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        {/* Topbar */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10 md:relative">
          <button
            className="md:hidden text-gray-600"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            aria-expanded={sidebarOpen}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold">POS Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="relative p-1 text-gray-600 hover:text-gray-900"
              aria-label="View notifications"
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Page content */}
        <div className="py-4 pt-20 md:pt-4 px-4">{children}</div>
      </main>
    </div>
  );
}
