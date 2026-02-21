'use client';

import FixtureTable from '../components/Table/FixtureTable';

export default function FixturesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Fixtures</h1>
      <FixtureTable fixtures={[]} />
    </div>
  );
}
