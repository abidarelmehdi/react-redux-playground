import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-700">
          <div className="flex items-center h-16 px-4 sm:px-0">
            <NavLink exact to="/" className="flex-shrink-0 text-blue-400">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-10 h-10"
              >
                <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
              </svg>
            </NavLink>
            <div className="ml-10 flex items-baseline">
              <NavLink
                exact
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-white focus:outline-none focus:text-white focus:bg-gray-700"
                activeClassName="bg-cool-gray-600"
              >
                Home
              </NavLink>
              <NavLink
                to="/courses"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                activeClassName="bg-cool-gray-600"
              >
                Courses
              </NavLink>
              <NavLink
                to="/authors"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                activeClassName="bg-cool-gray-600"
              >
                Authors
              </NavLink>
              <NavLink
                to="/about"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                activeClassName="bg-cool-gray-600"
              >
                About
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
