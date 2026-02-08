'use client';

import NewsItem from '../../components/NewsItem/NewsItem';

export default function NewsList() {
  const news = [];

  return (
    <div className="space-y-4">
      {news.length === 0 ? (
        <p className="text-gray-600">No news available</p>
      ) : (
        news.map((item: any) => <NewsItem key={item.id} news={item} />)
      )}
    </div>
  );
}
