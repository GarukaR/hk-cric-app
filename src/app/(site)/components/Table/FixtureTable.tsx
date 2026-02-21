import { Fixture } from '@/types/fixture';

interface FixtureTableProps {
    fixtures: Fixture[];
}

export default function FixtureTable({ fixtures }: FixtureTableProps) {
    return (
        <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Team 1</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Team 2</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Venue</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                </tr>
            </thead>
            <tbody>
                {fixtures?.map((fixture) => (
                    <tr key={fixture.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">
                            {new Date(fixture.date).toLocaleDateString()}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">{fixture.team1}</td>
                        <td className="border border-gray-300 px-4 py-2">{fixture.team2}</td>
                        <td className="border border-gray-300 px-4 py-2">{fixture.venue}</td>
                        <td className="border border-gray-300 px-4 py-2">{fixture.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}