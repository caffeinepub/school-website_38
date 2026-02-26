import { Mail, User, Clock, MessageSquare, Inbox } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetAdminMessages } from '@/hooks/useQueries';

function formatTimestamp(timestamp: bigint): string {
  const ms = Number(timestamp) / 1_000_000;
  return new Date(ms).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function ContactMessagesPanel() {
  const { data: messages, isLoading, isError } = useGetAdminMessages();

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border border-border shadow-card">
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div className="space-y-1.5 flex-1">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-4/5" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-12 text-destructive bg-destructive/5 rounded-lg border border-destructive/20">
        <MessageSquare className="w-10 h-10 mx-auto mb-2 opacity-50" />
        <p className="font-medium text-sm">Failed to load messages. You may not have admin access.</p>
      </div>
    );
  }

  if (!messages || messages.length === 0) {
    return (
      <div className="text-center py-14 text-muted-foreground bg-white rounded-lg border border-dashed border-border">
        <Inbox className="w-12 h-12 mx-auto mb-3 opacity-30" />
        <p className="font-medium">No messages yet</p>
        <p className="text-sm mt-1">Contact form submissions will appear here.</p>
      </div>
    );
  }

  // Sort by timestamp descending (newest first)
  const sorted = [...messages].sort((a, b) => Number(b.timestamp - a.timestamp));

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground font-medium">
        {sorted.length} message{sorted.length !== 1 ? 's' : ''} received
      </p>
      {sorted.map((msg, idx) => (
        <Card
          key={idx}
          className="border border-school-indigo/10 shadow-card hover:border-school-indigo/30 transition-colors bg-white"
        >
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-school-indigo/10 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-school-indigo" />
              </div>

              <div className="flex-1 min-w-0">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                  <span className="font-serif font-semibold text-school-indigo text-sm">
                    {msg.name}
                  </span>
                  <a
                    href={`mailto:${msg.email}`}
                    className="text-xs text-school-amber hover:underline flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3" />
                    {msg.email}
                  </a>
                </div>

                {/* Subject */}
                <p className="text-sm font-medium text-foreground mb-2">
                  <span className="text-muted-foreground font-normal">Subject: </span>
                  {msg.subject}
                </p>

                {/* Message */}
                <p className="text-sm text-muted-foreground leading-relaxed bg-school-indigo/5 rounded-md p-3 border border-school-indigo/10">
                  {msg.message}
                </p>

                {/* Timestamp */}
                <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {formatTimestamp(msg.timestamp)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
