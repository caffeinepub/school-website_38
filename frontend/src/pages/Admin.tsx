import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Shield, Newspaper, MessageSquare, LogIn } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '@/hooks/useQueries';
import NewsManagementPanel from '@/components/NewsManagementPanel';
import ContactMessagesPanel from '@/components/ContactMessagesPanel';
import LoginButton from '@/components/LoginButton';

export default function Admin() {
  const { identity } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const { data: userProfile } = useGetCallerUserProfile();
  const navigate = useNavigate();

  useEffect(() => {
    // If not authenticated, we show the access denied screen (no redirect needed)
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-school-cream">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 rounded-full bg-school-indigo/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-school-indigo" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-school-indigo mb-3">
            Admin Portal
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            This area is restricted to authorized staff only. Please log in with your credentials to access the admin portal.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <LoginButton
              variant="default"
              size="lg"
              className="bg-school-indigo text-white hover:bg-school-indigo-light font-semibold px-8 rounded-sm"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate({ to: '/' })}
              className="border-school-indigo text-school-indigo hover:bg-school-indigo hover:text-white rounded-sm font-semibold px-8"
            >
              Go to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const displayName = userProfile?.name ?? identity?.getPrincipal().toString().slice(0, 12) + '...';

  return (
    <div>
      {/* Page Header */}
      <section className="bg-school-indigo py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-school-amber translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-school-amber" />
            <span className="text-school-amber text-sm font-medium tracking-widest uppercase">Admin Portal</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                Admin Dashboard
              </h1>
              <p className="text-white/75 text-base">
                Welcome back, <span className="text-school-amber font-semibold">{displayName}</span>
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4 py-2">
              <Shield className="w-4 h-4 text-school-amber" />
              <span className="text-white/90 text-sm font-medium">Authenticated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Content */}
      <section className="py-12 bg-school-cream min-h-[60vh]">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="news" className="w-full">
            <TabsList className="mb-8 bg-white border border-school-indigo/20 shadow-card p-1 h-auto rounded-lg">
              <TabsTrigger
                value="news"
                className="flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-medium data-[state=active]:bg-school-indigo data-[state=active]:text-white data-[state=active]:shadow-sm transition-all"
              >
                <Newspaper className="w-4 h-4" />
                News Management
              </TabsTrigger>
              <TabsTrigger
                value="messages"
                className="flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-medium data-[state=active]:bg-school-indigo data-[state=active]:text-white data-[state=active]:shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Contact Messages
              </TabsTrigger>
            </TabsList>

            <TabsContent value="news">
              <NewsManagementPanel />
            </TabsContent>

            <TabsContent value="messages">
              <ContactMessagesPanel />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
