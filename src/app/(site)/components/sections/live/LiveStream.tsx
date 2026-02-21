'use client';

export default function LiveStream() {
  return (
    <div className="bg-black rounded-lg aspect-video flex items-center justify-center">
      <div className="text-white text-center">
        <p className="text-2xl font-bold mb-4">Live Stream</p>
        <p className="text-gray-400">No active live stream at the moment</p>
      </div>
    </div>
  );
}
