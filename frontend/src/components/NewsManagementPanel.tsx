import { useState } from 'react';
import { PlusCircle, Loader2, CheckCircle, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetAllNews, useAddNewsItem } from '@/hooks/useQueries';

function formatDate(timestamp: bigint): string {
  const ms = Number(timestamp) / 1_000_000;
  return new Date(ms).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function NewsManagementPanel() {
  const { data: newsItems, isLoading } = useGetAllNews();
  const { mutate: addNews, isPending, isSuccess, reset } = useAddNewsItem();

  const [form, setForm] = useState({ title: '', summary: '', content: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.title.trim()) e.title = 'Title is required.';
    if (!form.summary.trim()) e.summary = 'Summary is required.';
    if (!form.content.trim()) e.content = 'Content is required.';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    addNews(
      { title: form.title.trim(), summary: form.summary.trim(), content: form.content.trim() },
      {
        onSuccess: () => {
          setForm({ title: '', summary: '', content: '' });
          setErrors({});
          setTimeout(() => reset(), 3000);
        },
      }
    );
  };

  return (
    <div className="space-y-8">
      {/* Add News Form */}
      <Card className="border border-school-indigo/20 shadow-card">
        <CardHeader className="pb-4">
          <CardTitle className="font-serif text-xl text-school-indigo flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-school-amber" />
            Add New Article
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="news-title" className="text-school-indigo font-medium text-sm">
                Title <span className="text-destructive">*</span>
              </Label>
              <Input
                id="news-title"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Article title"
                className={errors.title ? 'border-destructive' : ''}
              />
              {errors.title && <p className="text-destructive text-xs">{errors.title}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="news-summary" className="text-school-indigo font-medium text-sm">
                Summary <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="news-summary"
                name="summary"
                value={form.summary}
                onChange={handleChange}
                placeholder="Brief summary shown in news cards..."
                rows={2}
                className={`resize-none ${errors.summary ? 'border-destructive' : ''}`}
              />
              {errors.summary && <p className="text-destructive text-xs">{errors.summary}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="news-content" className="text-school-indigo font-medium text-sm">
                Full Content <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="news-content"
                name="content"
                value={form.content}
                onChange={handleChange}
                placeholder="Full article content..."
                rows={5}
                className={`resize-none ${errors.content ? 'border-destructive' : ''}`}
              />
              {errors.content && <p className="text-destructive text-xs">{errors.content}</p>}
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="bg-school-indigo text-white hover:bg-school-indigo-light font-semibold px-6"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Publishing...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Published!
                </>
              ) : (
                <>
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Publish Article
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Existing News List */}
      <div>
        <h3 className="font-serif text-lg font-semibold text-school-indigo mb-4 flex items-center gap-2">
          <Newspaper className="w-5 h-5 text-school-amber" />
          Published Articles ({newsItems?.length ?? 0})
        </h3>

        {isLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg border border-border p-4 space-y-2">
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-3 w-1/4" />
                <Skeleton className="h-3 w-full" />
              </div>
            ))}
          </div>
        ) : newsItems && newsItems.length > 0 ? (
          <div className="space-y-3">
            {newsItems.map((item) => (
              <div
                key={item.id.toString()}
                className="bg-white rounded-lg border border-school-indigo/10 p-4 hover:border-school-indigo/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-semibold text-school-indigo text-sm leading-snug truncate">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{formatDate(item.date)}</p>
                    <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">{item.summary}</p>
                  </div>
                  <span className="flex-shrink-0 text-xs bg-school-indigo/10 text-school-indigo px-2 py-0.5 rounded-full font-medium">
                    #{item.id.toString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-muted-foreground bg-white rounded-lg border border-dashed border-border">
            <Newspaper className="w-10 h-10 mx-auto mb-2 opacity-30" />
            <p className="text-sm">No articles published yet. Add your first one above!</p>
          </div>
        )}
      </div>
    </div>
  );
}
