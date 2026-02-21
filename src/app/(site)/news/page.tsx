'use client';

import NewsList from '../components/sections/news/NewsList';
import NewsCategories from '../components/sections/news/NewsCategories';

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cricket News</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <NewsCategories />
        </div>
        <div className="lg:col-span-3">
          <NewsList />
        </div>
      </div>
    </div>
  );
}
