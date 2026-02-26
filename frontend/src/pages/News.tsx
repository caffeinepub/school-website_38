import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetAllNews } from '@/hooks/useQueries';
import NewsCard from '@/components/NewsCard';

export default function News() {
  const [search, setSearch] = useState('');
  const { data: newsItems, isLoading } = useGetAllNews();

  const filtered = newsItems?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Page Header */}
      <section className="bg-school-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-school-red translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-school-red" />
            <span className="text-school-red-light text-sm font-medium tracking-widest uppercase">Latest Updates</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            News & Announcements
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Stay informed about the latest events, achievements, and announcements from Doon's Public School.
          </p>
        </div>
      </section>

      {/* Search + Grid */}
      <section className="py-16 bg-school-cream min-h-[60vh]">
        <div className="container mx-auto px-6">
          {/* Search */}
          <div className="max-w-md mx-auto mb-12 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 rounded-sm border-school-blue/20 focus-visible:ring-school-blue"
            />
          </div>

          {/* Loading */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-sm shadow-card overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Results */}
          {!isLoading && filtered && filtered.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, index) => (
                <NewsCard key={String(item.id)} item={item} imageIndex={index} />
              ))}
            </div>
          )}

          {/* Empty state */}
          {!isLoading && (!filtered || filtered.length === 0) && (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-school-blue/10 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-school-blue/40" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-school-blue mb-2">No news found</h3>
              <p className="text-muted-foreground text-sm">
                {search ? 'Try a different search term.' : 'Check back soon for updates!'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
