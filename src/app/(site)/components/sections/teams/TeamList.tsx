'use client';

import Card from '../../Card/Card';

export default function TeamList() {
  const teams: any[] = [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teams.length === 0 ? (
        <Card>
          <p className="text-gray-600">No teams available</p>
        </Card>
      ) : (
        teams.map((team) => (
          <Card key={team.id}>
            <h3 className="font-bold text-lg">{team.name}</h3>
            <p className="text-gray-600">{team.description}</p>
          </Card>
        ))
      )}
    </div>
  );
}
