import React from "react";
import NavBar from "./NavBar";

export default function Header({ title }) {
  return (
    <div className="bg-gray-800 pb-32">
      <NavBar />
      <header className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl leading-9 font-bold text-white">{title}</h1>
        </div>
      </header>
    </div>
  );
}
