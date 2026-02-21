"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-1">
          🏏 HKU <span className="text-sm font-normal text-blue-600">Cricket</span>
        </Link>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/live">Live</Link>
          <Link href="/news">News</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/fixtures">Fixtures</Link>
          <Link href="/teams">Teams</Link>
          <Link href="/players">Players</Link>
        </div>
      </div>
    </div>
  );
}
