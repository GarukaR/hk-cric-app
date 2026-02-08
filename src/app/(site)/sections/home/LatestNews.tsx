'use client';

import NewsItem from '../../components/NewsItem/NewsItem';

export default function LatestNews() {
  // Mock data - replace with actual API call
  const news = [
    {
      id: '1',
      title: 'HK Cricket Team Wins Championship',
      excerpt: 'Hong Kong cricket team secured victory in the regional championship...',
      image: 'https://via.placeholder.com/300x200',
      publishedAt: '2 hours ago',
      category: 'news',
      content: '',
      author: '',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Latest News</h2>
      <div className="space-y-4">
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
      </div>
    </section>
  );
}
