interface VideoPlayerProps {
  videoId: string;
  title?: string;
}

export default function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  return (
    <div className="w-full">
      <div className="aspect-video bg-black rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || 'Video player'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
