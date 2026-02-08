import { Fixture } from '@/types/fixture';
import Card from '../Card/Card';

interface MatchCardProps {
  fixture: Fixture;
}

export default function MatchCard({ fixture }: MatchCardProps) {
  return (
    <Card>
      <div className="text-center">
        <p className="text-gray-500 text-sm mb-2">{fixture.type}</p>
        <p className="font-bold mb-4">{fixture.date}</p>
        <div className="flex justify-around items-center mb-4">
          <div className="text-center">
            <p className="text-lg font-bold">{fixture.team1}</p>
            <p className="text-2xl font-bold text-blue-600">
              {fixture.team1Score || '-'}
            </p>
          </div>
          <div className="text-gray-400">VS</div>
          <div className="text-center">
            <p className="text-lg font-bold">{fixture.team2}</p>
            <p className="text-2xl font-bold text-blue-600">
              {fixture.team2Score || '-'}
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-600">{fixture.venue}</p>
      </div>
    </Card>
  );
}
