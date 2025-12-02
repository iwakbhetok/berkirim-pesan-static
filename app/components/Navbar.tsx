'use client';

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full py-5 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <Link href="/" className="font-semibold text-lg">
          Berkirim<span className="text-[#44C9C1]">Pesan</span>
        </Link>

        <div className="flex gap-6 text-sm text-gray-600">
          <Link href="#features">Features</Link>
          <Link href="/privacy">Privacy</Link>
        </div>

        <Link
          href="#"
          className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:bg-gray-100"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
