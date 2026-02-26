import { useState } from 'react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile, useSaveCallerUserProfile } from '@/hooks/useQueries';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, GraduationCap } from 'lucide-react';

export default function ProfileSetupModal() {
  const { identity } = useInternetIdentity();
  const isAuthenticated = !!identity;

  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();
  const { mutate: saveProfile, isPending } = useSaveCallerUserProfile();

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const showModal = isAuthenticated && !profileLoading && isFetched && userProfile === null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    setError('');
    saveProfile({ name: name.trim() });
  };

  return (
    <Dialog open={showModal}>
      <DialogContent className="sm:max-w-md" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-school-indigo flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <DialogTitle className="font-serif text-xl text-school-indigo">
              Welcome to Bright Academy!
            </DialogTitle>
          </div>
          <DialogDescription className="text-muted-foreground text-sm">
            Please enter your name to complete your profile setup. This helps us personalize your experience.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="profile-name" className="text-school-indigo font-medium text-sm">
              Your Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="profile-name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
              placeholder="Enter your full name"
              className={error ? 'border-destructive focus-visible:ring-destructive' : ''}
              autoFocus
            />
            {error && <p className="text-destructive text-xs">{error}</p>}
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-school-indigo text-white hover:bg-school-indigo-light font-semibold"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Saving...
              </>
            ) : (
              'Complete Setup'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
