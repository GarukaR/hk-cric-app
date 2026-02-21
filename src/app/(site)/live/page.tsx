'use client';

import LiveStream from '../components/sections/live/LiveStream';
import LiveScore from '../components/sections/live/LiveScore';

export default function LivePage() {
  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Live page</h1>
        <LiveStream />
        <LiveScore />
    </div>
  );
}
