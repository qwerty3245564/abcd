"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-2xl font-bold">My Next.js App</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu Items */}
        <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <Link href="/" className="text-white px-4 py-2">Home</Link>
          <Link href="/about" className="text-white px-4 py-2">About</Link>
          <Link href="/contact" className="text-white px-4 py-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
