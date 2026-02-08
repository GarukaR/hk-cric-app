'use client';

import MatchCard from '../../components/MatchCard/MatchCard';

export default function UpcomingMatches() {
  // Mock data - replace with actual API call
  const fixtures = [
    {
      id: '1',
      team1: 'HK Strikers',
      team2: 'China Dragons',
      date: '2026-02-15',
      time: '14:00',
      venue: 'Kowloon Cricket Club',
      type: 'T20',
      team1Score: undefined,
      team2Score: undefined,
      status: 'upcoming',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">Upcoming Matches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fixtures.map((fixture) => (
          <MatchCard key={fixture.id} fixture={fixture} />
        ))}
      </div>
    </section>
  );
}
