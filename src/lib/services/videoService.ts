import { Video } from '@/types/video';

export class VideoService {
  private baseUrl = '/api/videos';

  async getAllVideos(): Promise<Video[]> {
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) throw new Error('Failed to fetch videos');
      return response.json();
    } catch (error) {
      console.error('Error fetching videos:', error);
      throw error;
    }
  }

  async getVideoById(id: string): Promise<Video | null> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) throw new Error('Failed to fetch video');
      return response.json();
    } catch (error) {
      console.error('Error fetching video:', error);
      throw error;
    }
  }

  async createVideo(video: Omit<Video, 'id'>): Promise<Video> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(video),
      });
      if (!response.ok) throw new Error('Failed to create video');
      return response.json();
    } catch (error) {
      console.error('Error creating video:', error);
      throw error;
    }
  }
}

export const videoService = new VideoService();
