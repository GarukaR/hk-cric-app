'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            🏏 HK Cricket
          </Link>
          <div className="flex gap-8">
            <Link href="/live">Live</Link>
            <Link href="/news">News</Link>
            <Link href="/videos">Videos</Link>
            <Link href="/fixtures">Fixtures</Link>
            <Link href="/teams">Teams</Link>
            <Link href="/players">Players</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
