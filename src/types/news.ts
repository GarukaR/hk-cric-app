export interface News {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
}
