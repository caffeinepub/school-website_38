import { Calendar, Search } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetAllNews } from '@/hooks/useQueries';
import NewsCard from '@/components/NewsCard';

export default function News() {
  const { data: newsItems, isLoading, isError } = useGetAllNews();
  const [search, setSearch] = useState('');

  const filtered = (newsItems ?? []).filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Page Header */}
      <section className="bg-school-indigo py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-school-amber translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-school-amber" />
            <span className="text-school-amber text-sm font-medium tracking-widest uppercase">News</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            News & Announcements
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Stay up to date with the latest happenings, achievements, and announcements from
            the Bright Academy community.
          </p>
        </div>
      </section>

      {/* Search & Content */}
      <section className="py-16 bg-school-cream">
        <div className="container mx-auto px-6">
          {/* Search */}
          <div className="max-w-md mb-10 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-white border-border rounded-sm focus-visible:ring-school-indigo"
            />
          </div>

          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-sm shadow-card overflow-hidden">
                  <Skeleton className="h-48 w-full rounded-none" />
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {isError && (
            <div className="text-center py-16">
              <p className="text-destructive font-medium">Failed to load news. Please try again later.</p>
            </div>
          )}

          {!isLoading && !isError && filtered.length === 0 && (
            <div className="text-center py-16">
              <Calendar className="w-12 h-12 mx-auto mb-3 text-muted-foreground opacity-40" />
              <p className="text-muted-foreground text-lg font-medium">
                {search ? 'No news matching your search.' : 'No news items yet. Check back soon!'}
              </p>
            </div>
          )}

          {!isLoading && !isError && filtered.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, index) => (
                <NewsCard key={item.id.toString()} item={item} imageIndex={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
