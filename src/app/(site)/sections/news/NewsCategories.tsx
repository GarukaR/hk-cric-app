'use client';

import Card from '../../components/Card/Card';

export default function NewsCategories() {
  const categories = ['All', 'Teams', 'Players', 'Tournaments', 'Analysis'];

  return (
    <Card>
      <h3 className="font-bold text-lg mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            {category}
          </button>
        ))}
      </div>
    </Card>
  );
}
