import { Live } from '@/types/live';

export class LiveService {
  private baseUrl = '/api/live';

  async getLiveMatches(): Promise<Live[]> {
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) throw new Error('Failed to fetch live data');
      return response.json();
    } catch (error) {
      console.error('Error fetching live data:', error);
      throw error;
    }
  }

  async getLiveMatchById(id: string): Promise<Live | null> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) throw new Error('Failed to fetch live match');
      return response.json();
    } catch (error) {
      console.error('Error fetching live match:', error);
      throw error;
    }
  }

  async updateLiveScore(id: string, score: any): Promise<Live> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(score),
      });
      if (!response.ok) throw new Error('Failed to update live score');
      return response.json();
    } catch (error) {
      console.error('Error updating live score:', error);
      throw error;
    }
  }
}

export const liveService = new LiveService();
