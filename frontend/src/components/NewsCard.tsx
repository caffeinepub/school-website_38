import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { NewsItem } from '../backend';

const newsImages = [
  '/assets/generated/news-placeholder-1.dim_600x400.png',
  '/assets/generated/news-placeholder-2.dim_600x400.png',
  '/assets/generated/news-placeholder-3.dim_600x400.png',
];

interface NewsCardProps {
  item: NewsItem;
  imageIndex?: number;
}

function formatDate(timestamp: bigint): string {
  const ms = Number(timestamp) / 1_000_000;
  const date = new Date(ms);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function NewsCard({ item, imageIndex = 0 }: NewsCardProps) {
  const imageUrl = newsImages[imageIndex % newsImages.length];

  return (
    <Card className="card-hover border-0 shadow-card overflow-hidden group bg-white flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-school-indigo-dark/20 group-hover:bg-school-indigo-dark/10 transition-colors duration-300" />
      </div>
      <CardContent className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
          <Calendar className="w-3.5 h-3.5 text-school-amber" />
          <span>{formatDate(item.date)}</span>
        </div>
        <h3 className="font-serif text-lg font-semibold text-school-indigo leading-snug mb-2 group-hover:text-school-indigo-light transition-colors">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
          {item.summary}
        </p>
        <button className="flex items-center gap-1.5 text-school-amber text-sm font-semibold hover:gap-2.5 transition-all duration-200 self-start">
          Read More
          <ArrowRight className="w-4 h-4" />
        </button>
      </CardContent>
    </Card>
  );
}
