import { ReactNode, useState, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Phone, Mail, Heart, Shield } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram, SiYoutube } from 'react-icons/si';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '@/hooks/useQueries';
import { useQueryClient } from '@tanstack/react-query';
import LoginButton from './LoginButton';
import ProfileSetupModal from './ProfileSetupModal';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Academics', path: '/academics' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { identity } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const { data: userProfile } = useGetCallerUserProfile();
  const queryClient = useQueryClient();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  const appId = typeof window !== 'undefined' ? encodeURIComponent(window.location.hostname) : 'school-website';

  const displayName = userProfile?.name ?? (identity ? identity.getPrincipal().toString().slice(0, 8) + '...' : null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ProfileSetupModal />

      {/* Top bar */}
      <div className="bg-school-blue-dark text-white/90 text-xs py-2 hidden md:block">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-school-red-light" />
              8541886552
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-school-red-light" />
              [Insert Email Address]
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-school-red-light transition-colors"><SiFacebook className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="X" className="hover:text-school-red-light transition-colors"><SiX className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-school-red-light transition-colors"><SiInstagram className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-school-red-light transition-colors"><SiYoutube className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-school-blue shadow-lg shadow-school-blue/20'
            : 'bg-school-blue'
        }`}
      >
        <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-school-red flex-shrink-0 bg-white">
              <img
                src="/assets/generated/school-logo.dim_120x120.png"
                alt="Doon's Public School Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-serif text-xl font-bold text-white leading-tight block">
                Doon's Public School
              </span>
              <span className="text-school-red-light text-xs tracking-widest uppercase font-medium">
                Kankarbagh, Patna
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link px-3 py-2 rounded-sm text-sm font-medium tracking-wide transition-all duration-200 ${
                  currentPath === link.path
                    ? 'text-school-red-light border-b-2 border-school-red-light'
                    : 'text-white/90 hover:text-school-red-light hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Admin link - only for authenticated users */}
            {isAuthenticated && (
              <Link
                to="/admin"
                className={`nav-link px-3 py-2 rounded-sm text-sm font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                  currentPath === '/admin'
                    ? 'text-school-red-light border-b-2 border-school-red-light'
                    : 'text-white/90 hover:text-school-red-light hover:bg-white/10'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                Admin
              </Link>
            )}
          </div>

          {/* Auth + Mobile toggle */}
          <div className="flex items-center gap-3">
            {isAuthenticated && displayName && (
              <span className="hidden md:block text-white/70 text-sm">
                Hi, <span className="text-school-red-light font-medium">{displayName}</span>
              </span>
            )}
            <div className="hidden md:block">
              <LoginButton />
            </div>
            <button
              className="lg:hidden text-white p-2 rounded-sm hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-school-blue-dark border-t border-white/10 px-6 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                    currentPath === link.path
                      ? 'text-school-red-light bg-white/10'
                      : 'text-white/90 hover:text-school-red-light hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {isAuthenticated && (
                <Link
                  to="/admin"
                  className={`px-3 py-2.5 rounded-sm text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    currentPath === '/admin'
                      ? 'text-school-red-light bg-white/10'
                      : 'text-white/90 hover:text-school-red-light hover:bg-white/10'
                  }`}
                >
                  <Shield className="w-3.5 h-3.5" />
                  Admin
                </Link>
              )}
              <div className="pt-3 border-t border-white/10 mt-2">
                <LoginButton />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-school-blue-dark text-white">
        <div className="container mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-school-red flex-shrink-0 bg-white">
                  <img
                    src="/assets/generated/school-logo.dim_120x120.png"
                    alt="Doon's Public School Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-serif text-base font-bold text-white leading-tight block">
                    Doon's Public School
                  </span>
                  <span className="text-school-red-light text-xs tracking-widest uppercase">Patna</span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Nurturing young minds and building tomorrow's leaders in the heart of Patna since 1999.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-red hover:text-white transition-colors">
                  <SiFacebook className="w-3.5 h-3.5" />
                </a>
                <a href="#" aria-label="X" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-red hover:text-white transition-colors">
                  <SiX className="w-3.5 h-3.5" />
                </a>
                <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-red hover:text-white transition-colors">
                  <SiInstagram className="w-3.5 h-3.5" />
                </a>
                <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-red hover:text-white transition-colors">
                  <SiYoutube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-base font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/60 text-sm hover:text-school-red-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-base font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-white/60 text-sm">
                  <Phone className="w-4 h-4 text-school-red-light flex-shrink-0 mt-0.5" />
                  <span>8541886552</span>
                </li>
                <li className="flex items-start gap-2.5 text-white/60 text-sm">
                  <Mail className="w-4 h-4 text-school-red-light flex-shrink-0 mt-0.5" />
                  <span>[Insert Email Address]</span>
                </li>
                <li className="flex items-start gap-2.5 text-white/60 text-sm">
                  <svg className="w-4 h-4 text-school-red-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Chitragupt Nagar, Kankarbagh,<br />Patna - 20</span>
                </li>
              </ul>
            </div>

            {/* Office Hours */}
            <div>
              <h4 className="font-serif text-base font-semibold text-white mb-4">Office Hours</h4>
              <ul className="space-y-2.5 text-white/60 text-sm">
                <li className="flex justify-between">
                  <span>Monday – Saturday</span>
                  <span className="text-white/80">8AM – 3PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white/80">Closed</span>
                </li>
              </ul>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-white/40 text-xs">
                  © {new Date().getFullYear()} Doon's Public School. All rights reserved.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs">
              Empowering students since 1999 · Kankarbagh, Patna
            </p>
            <p className="text-white/40 text-xs flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-school-red-light fill-school-red-light" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-school-red-light transition-colors underline underline-offset-2"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
