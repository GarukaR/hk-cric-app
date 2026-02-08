'use client';

export default function FixturesTable() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left font-semibold">Date</th>
            <th className="px-6 py-3 text-left font-semibold">Match</th>
            <th className="px-6 py-3 text-left font-semibold">Venue</th>
            <th className="px-6 py-3 text-left font-semibold">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
              No fixtures available
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
