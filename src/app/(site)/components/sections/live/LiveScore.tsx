'use client';

import Card from '../../Card/Card';

export default function LiveScore() {
  return (
    <Card>
      <h3 className="font-bold text-lg mb-4">Live Scores</h3>
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">No matches in progress</p>
        </div>
      </div>
    </Card>
  );
}
