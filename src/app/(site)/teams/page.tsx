'use client';

import TeamList from '../sections/teams/TeamList';

export default function TeamsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Teams</h1>
      <TeamList />
    </div>
  );
}
