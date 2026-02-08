export interface Video {
  id: string;
  title: string;
  description?: string;
  url: string;
  videoId: string; // YouTube video ID
  thumbnail?: string;
  duration: number; // in seconds
  publishedAt: string;
  category?: string;
}
