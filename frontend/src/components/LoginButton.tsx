import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { LogIn, LogOut, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LoginButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  showIcon?: boolean;
  className?: string;
}

export default function LoginButton({
  variant = 'default',
  size = 'sm',
  showIcon = true,
  className = '',
}: LoginButtonProps) {
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      queryClient.clear();
    } else {
      try {
        await login();
      } catch (error: unknown) {
        const err = error as Error;
        if (err?.message === 'User is already authenticated') {
          await clear();
          setTimeout(() => login(), 300);
        }
      }
    }
  };

  return (
    <Button
      onClick={handleAuth}
      disabled={isLoggingIn}
      variant={variant}
      size={size}
      className={className}
    >
      {isLoggingIn ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin mr-1.5" />
          Logging in...
        </>
      ) : isAuthenticated ? (
        <>
          {showIcon && <LogOut className="w-4 h-4 mr-1.5" />}
          Logout
        </>
      ) : (
        <>
          {showIcon && <LogIn className="w-4 h-4 mr-1.5" />}
          Login
        </>
      )}
    </Button>
  );
}
