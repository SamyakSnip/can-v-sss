"use client";

import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  workspaceId?: string;
}

export default function Navbar({ workspaceId }: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const navLinks = [
    { href: "/login", label: "Login" },
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  const profileLinks = [
    { href: "/settings", label: "Profile" },
    { href: "/billing", label: "Billing" },
    { href: "/notifications", label: "Notifications" },
    { href: "/analytics", label: "Analytics" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */ }

          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            Can-V-SSS
          </div>

          {/* Right side: Nav links + Profile */}
          <div className="flex items-center space-x-6">
            {/* Navigation Links */}
            <div className="flex items-center space-x-4 text-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-gray-800 dark:text-gray-100 font-medium px-3 py-2 rounded-md transition-all duration-200 hover:text-black dark:hover:text-white hover:scale-105"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-yellow-400 dark:bg-yellow-300 scale-x-0 origin-left transition-transform duration-200 hover:scale-x-100"></span>
                </Link>
              ))}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 origin-top-right transition-all duration-200 ease-in-out transform ${
                  isDropdownOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {profileLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
