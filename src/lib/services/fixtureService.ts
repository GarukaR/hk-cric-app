import { Fixture } from '@/types/fixture';

export class FixtureService {
  private baseUrl = '/api/fixtures';

  async getAllFixtures(): Promise<Fixture[]> {
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) throw new Error('Failed to fetch fixtures');
      return response.json();
    } catch (error) {
      console.error('Error fetching fixtures:', error);
      throw error;
    }
  }

  async getUpcomingFixtures(): Promise<Fixture[]> {
    try {
      const response = await fetch(`${this.baseUrl}?status=upcoming`);
      if (!response.ok) throw new Error('Failed to fetch fixtures');
      return response.json();
    } catch (error) {
      console.error('Error fetching upcoming fixtures:', error);
      throw error;
    }
  }

  async getFixtureById(id: string): Promise<Fixture | null> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) throw new Error('Failed to fetch fixture');
      return response.json();
    } catch (error) {
      console.error('Error fetching fixture:', error);
      throw error;
    }
  }

  async createFixture(fixture: Omit<Fixture, 'id'>): Promise<Fixture> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fixture),
      });
      if (!response.ok) throw new Error('Failed to create fixture');
      return response.json();
    } catch (error) {
      console.error('Error creating fixture:', error);
      throw error;
    }
  }
}

export const fixtureService = new FixtureService();
