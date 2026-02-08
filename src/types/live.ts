export interface Live {
  id: string;
  fixtureId: string;
  team1: string;
  team2: string;
  status: 'live' | 'completed';
  team1Score: number;
  team2Score: number;
  wickets1: number;
  wickets2: number;
  overs1: number;
  overs2: number;
  requiredRunRate?: number;
  currentRunRate?: number;
  lastUpdate: string;
}
