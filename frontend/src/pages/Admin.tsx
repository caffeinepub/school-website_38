import { useState } from 'react';
import { Shield, Plus, Loader2, Trash2, RefreshCw, Mail, User, BookOpen, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useAddNewsItem, useGetAllNews, useGetAdminMessages } from '@/hooks/useQueries';

export default function Admin() {
  const { identity } = useInternetIdentity();
  const isAuthenticated = !!identity;

  const [newsForm, setNewsForm] = useState({ title: '', summary: '', content: '' });
  const [newsErrors, setNewsErrors] = useState<Record<string, string>>({});

  const { data: newsItems, isLoading: newsLoading, refetch: refetchNews } = useGetAllNews();
  const { data: messages, isLoading: messagesLoading, refetch: refetchMessages } = useGetAdminMessages();
  const { mutate: addNews, isPending: addingNews } = useAddNewsItem();

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-school-cream">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-school-blue/10 flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-school-blue/40" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-school-blue mb-2">Admin Access Required</h2>
          <p className="text-muted-foreground">Please log in to access the admin panel.</p>
        </div>
      </div>
    );
  }

  const validateNews = () => {
    const errors: Record<string, string> = {};
    if (!newsForm.title.trim()) errors.title = 'Title is required.';
    if (!newsForm.summary.trim()) errors.summary = 'Summary is required.';
    if (!newsForm.content.trim()) errors.content = 'Content is required.';
    return errors;
  };

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateNews();
    if (Object.keys(errors).length > 0) {
      setNewsErrors(errors);
      return;
    }
    addNews(newsForm, {
      onSuccess: () => {
        setNewsForm({ title: '', summary: '', content: '' });
        setNewsErrors({});
      },
      onError: () => {
        setNewsErrors({ content: 'Failed to add news item. Make sure you have admin permissions.' });
      },
    });
  };

  function formatDate(timestamp: bigint): string {
    const ms = Number(timestamp) / 1_000_000;
    return new Date(ms).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-school-blue py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-school-red translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-school-red" />
            <span className="text-school-red-light text-sm font-medium tracking-widest uppercase">Administration</span>
          </div>
          <h1 className="font-serif text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-white/70">Manage news, announcements, and contact messages.</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-school-cream min-h-[60vh]">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="news">
            <TabsList className="mb-8 bg-white border border-school-blue/10 rounded-sm p-1">
              <TabsTrigger
                value="news"
                className="rounded-sm data-[state=active]:bg-school-blue data-[state=active]:text-white"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                News
              </TabsTrigger>
              <TabsTrigger
                value="messages"
                className="rounded-sm data-[state=active]:bg-school-blue data-[state=active]:text-white"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Messages
              </TabsTrigger>
            </TabsList>

            {/* News Tab */}
            <TabsContent value="news">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Add News Form */}
                <Card className="border-0 shadow-card overflow-hidden">
                  <div className="h-1.5 bg-school-red" />
                  <CardHeader className="pb-4">
                    <CardTitle className="font-serif text-xl text-school-blue flex items-center gap-2">
                      <Plus className="w-5 h-5 text-school-red" />
                      Add News Item
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddNews} className="space-y-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="title" className="text-school-blue font-medium text-sm">
                          Title <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="title"
                          value={newsForm.title}
                          onChange={(e) => setNewsForm((p) => ({ ...p, title: e.target.value }))}
                          placeholder="News headline"
                          className={`rounded-sm ${newsErrors.title ? 'border-destructive' : ''}`}
                        />
                        {newsErrors.title && <p className="text-destructive text-xs">{newsErrors.title}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="summary" className="text-school-blue font-medium text-sm">
                          Summary <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="summary"
                          value={newsForm.summary}
                          onChange={(e) => setNewsForm((p) => ({ ...p, summary: e.target.value }))}
                          placeholder="Brief summary"
                          className={`rounded-sm ${newsErrors.summary ? 'border-destructive' : ''}`}
                        />
                        {newsErrors.summary && <p className="text-destructive text-xs">{newsErrors.summary}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="content" className="text-school-blue font-medium text-sm">
                          Content <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="content"
                          value={newsForm.content}
                          onChange={(e) => setNewsForm((p) => ({ ...p, content: e.target.value }))}
                          placeholder="Full news content..."
                          rows={5}
                          className={`rounded-sm resize-none ${newsErrors.content ? 'border-destructive' : ''}`}
                        />
                        {newsErrors.content && <p className="text-destructive text-xs">{newsErrors.content}</p>}
                      </div>
                      <Button
                        type="submit"
                        disabled={addingNews}
                        className="w-full bg-school-red text-white hover:bg-school-red-light rounded-sm font-semibold"
                      >
                        {addingNews ? (
                          <>
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                            Publishing...
                          </>
                        ) : (
                          <>
                            <Plus className="mr-2 w-4 h-4" />
                            Publish News
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* News List */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-lg font-semibold text-school-blue">
                      Published News ({newsItems?.length ?? 0})
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => refetchNews()}
                      className="text-school-blue hover:text-school-red"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                  </div>
                  {newsLoading ? (
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-sm shadow-card h-20 animate-pulse" />
                      ))}
                    </div>
                  ) : newsItems && newsItems.length > 0 ? (
                    <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                      {newsItems.map((item) => (
                        <Card key={String(item.id)} className="border-0 shadow-card">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-school-blue text-sm leading-snug truncate">
                                  {item.title}
                                </h4>
                                <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{item.summary}</p>
                                <p className="text-school-red text-xs mt-1.5 font-medium">{formatDate(item.date)}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10 bg-white rounded-sm shadow-card">
                      <p className="text-muted-foreground text-sm">No news items yet. Add your first one!</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl font-semibold text-school-blue">
                  Contact Messages ({messages?.length ?? 0})
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => refetchMessages()}
                  className="text-school-blue hover:text-school-red"
                >
                  <RefreshCw className="w-4 h-4 mr-1.5" />
                  Refresh
                </Button>
              </div>
              {messagesLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-sm shadow-card h-28 animate-pulse" />
                  ))}
                </div>
              ) : messages && messages.length > 0 ? (
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <Card key={index} className="border-0 shadow-card overflow-hidden">
                      <div className="h-1 bg-school-blue" />
                      <CardContent className="p-5">
                        <div className="flex flex-wrap items-start gap-4 mb-3">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-school-red" />
                            <span className="font-semibold text-school-blue text-sm">{msg.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-school-red" />
                            <span className="text-muted-foreground text-sm">{msg.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-school-red" />
                            <span className="text-muted-foreground text-sm">{msg.subject}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed bg-school-cream rounded-sm p-3">
                          {msg.message}
                        </p>
                        <p className="text-school-blue/50 text-xs mt-2">
                          {formatDate(msg.timestamp)}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-sm shadow-card">
                  <div className="w-14 h-14 rounded-full bg-school-blue/10 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-7 h-7 text-school-blue/40" />
                  </div>
                  <p className="text-muted-foreground">No messages yet.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
