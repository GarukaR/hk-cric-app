export interface Fixture {
  id: string;
  team1: string;
  team2: string;
  date: string;
  time: string;
  venue: string;
  type: string; // T20, ODI, Test, etc.
  team1Score?: number;
  team2Score?: number;
  status: 'upcoming' | 'live' | 'completed';
}
