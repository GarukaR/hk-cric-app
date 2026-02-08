'use client';

import VideoGrid from '../sections/videos/VideoGrid';

export default function VideosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cricket Videos</h1>
      <VideoGrid />
    </div>
  );
}
