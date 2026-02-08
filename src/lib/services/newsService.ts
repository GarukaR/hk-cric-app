import { News } from '@/types/news';

export class NewsService {
  private baseUrl = '/api/news';

  async getAllNews(): Promise<News[]> {
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) throw new Error('Failed to fetch news');
      return response.json();
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }

  async getNewsByCategory(category: string): Promise<News[]> {
    try {
      const response = await fetch(`${this.baseUrl}?category=${category}`);
      if (!response.ok) throw new Error('Failed to fetch news');
      return response.json();
    } catch (error) {
      console.error('Error fetching news by category:', error);
      throw error;
    }
  }

  async getNewsById(id: string): Promise<News | null> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) throw new Error('Failed to fetch news');
      return response.json();
    } catch (error) {
      console.error('Error fetching news by id:', error);
      throw error;
    }
  }

  async createNews(news: Omit<News, 'id'>): Promise<News> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(news),
      });
      if (!response.ok) throw new Error('Failed to create news');
      return response.json();
    } catch (error) {
      console.error('Error creating news:', error);
      throw error;
    }
  }
}

export const newsService = new NewsService();
