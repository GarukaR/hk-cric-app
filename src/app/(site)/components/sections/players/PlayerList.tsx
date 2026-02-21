'use client';

import Card from '../../Card/Card';

export default function PlayerList() {
  const players: any[] = [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {players.length === 0 ? (
        <Card>
          <p className="text-gray-600">No players available</p>
        </Card>
      ) : (
        players.map((player) => (
          <Card key={player.id}>
            <h3 className="font-bold">{player.name}</h3>
            <p className="text-gray-600 text-sm">{player.role}</p>
          </Card>
        ))
      )}
    </div>
  );
}
