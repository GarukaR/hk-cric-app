import { News } from '@/types/news';
import Card from '../Card/Card';

interface NewsItemProps {
  news: News;
}

export default function NewsItem({ news }: NewsItemProps) {
  return (
    <Card>
      <div className="flex gap-4">
        {news.image && (
          <img
            src={news.image}
            alt={news.title}
            className="w-24 h-24 object-cover rounded"
          />
        )}
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">{news.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{news.excerpt}</p>
          <p className="text-gray-400 text-xs">{news.publishedAt}</p>
        </div>
      </div>
    </Card>
  );
}
