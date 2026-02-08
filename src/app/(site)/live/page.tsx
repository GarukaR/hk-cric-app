'use client';

import LiveStream from '../sections/live/LiveStream';
import LiveScore from '../sections/live/LiveScore';

export default function LivePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Live Cricket</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <LiveStream />
        </div>
        <div>
          <LiveScore />
        </div>
      </div>
    </div>
  );
}
