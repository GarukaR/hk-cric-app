'use client';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

export default function VideoGrid() {
  const videos = [
    {
      id: '1',
      title: 'Match Highlights',
      videoId: 'dQw4w9WgXcQ',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((video) => (
        <div key={video.id}>
          <VideoPlayer videoId={video.videoId} title={video.title} />
          <p className="mt-2 font-semibold">{video.title}</p>
        </div>
      ))}
    </div>
  );
}
