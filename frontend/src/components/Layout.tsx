import { ReactNode, useState, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, GraduationCap, Phone, Mail, MapPin, Heart, Shield } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram, SiYoutube } from 'react-icons/si';
import { Button } from '@/components/ui/button';
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
      <div className="bg-school-indigo-dark text-white/90 text-xs py-2 hidden md:block">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-school-amber" />
              [Insert Phone Number]
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-school-amber" />
              [Insert Email Address]
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-school-amber transition-colors"><SiFacebook className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="X" className="hover:text-school-amber transition-colors"><SiX className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-school-amber transition-colors"><SiInstagram className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-school-amber transition-colors"><SiYoutube className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-school-indigo shadow-lg shadow-school-indigo/20'
            : 'bg-school-indigo'
        }`}
      >
        <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-school-amber flex-shrink-0 bg-school-indigo-dark">
              <img
                src="/assets/generated/school-logo.dim_200x200.png"
                alt="Doon's Public School Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-serif text-xl font-bold text-white leading-tight block">
                Doon's Public School
              </span>
              <span className="text-school-amber text-xs tracking-widest uppercase font-medium">
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
                    ? 'text-school-amber border-b-2 border-school-amber'
                    : 'text-white/90 hover:text-school-amber hover:bg-white/10'
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
                    ? 'text-school-amber border-b-2 border-school-amber'
                    : 'text-white/90 hover:text-school-amber hover:bg-white/10'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                Admin
              </Link>
            )}

            {/* User info + Login/Logout */}
            <div className="ml-2 flex items-center gap-2">
              {isAuthenticated && displayName && (
                <span className="text-white/70 text-xs hidden xl:block truncate max-w-[120px]">
                  {displayName}
                </span>
              )}
              <LoginButton
                variant={isAuthenticated ? 'outline' : 'default'}
                size="sm"
                className={
                  isAuthenticated
                    ? 'border-white/40 text-white hover:bg-white/10 hover:text-white rounded-sm font-semibold text-sm px-4'
                    : 'bg-school-amber text-school-indigo-dark hover:bg-school-amber-light font-semibold text-sm px-5 rounded-sm'
                }
              />
            </div>

            <Link to="/admissions">
              <Button
                size="sm"
                className="ml-2 bg-school-amber text-school-indigo-dark hover:bg-school-amber-light font-semibold text-sm px-5 rounded-sm"
              >
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-school-indigo-dark border-t border-white/10">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-sm text-sm font-medium transition-colors ${
                    currentPath === link.path
                      ? 'text-school-amber bg-white/10'
                      : 'text-white/90 hover:text-school-amber hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {isAuthenticated && (
                <Link
                  to="/admin"
                  className={`px-4 py-3 rounded-sm text-sm font-medium transition-colors flex items-center gap-2 ${
                    currentPath === '/admin'
                      ? 'text-school-amber bg-white/10'
                      : 'text-white/90 hover:text-school-amber hover:bg-white/10'
                  }`}
                >
                  <Shield className="w-4 h-4" />
                  Admin Portal
                </Link>
              )}

              <div className="mt-2 flex flex-col gap-2">
                {isAuthenticated && displayName && (
                  <p className="text-white/50 text-xs px-4">Logged in as {displayName}</p>
                )}
                <LoginButton
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10 rounded-sm font-semibold"
                />
                <Link to="/admissions">
                  <Button className="w-full bg-school-amber text-school-indigo-dark hover:bg-school-amber-light font-semibold rounded-sm">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-school-indigo-dark text-white">
        <div className="container mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-school-amber bg-school-indigo">
                  <img
                    src="/assets/generated/school-logo.dim_200x200.png"
                    alt="Doon's Public School"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-serif text-lg font-bold text-white">Doon's Public School</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Empowering students with knowledge, character, and confidence to succeed in a changing world.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-amber hover:text-school-indigo-dark transition-all">
                  <SiFacebook className="w-3.5 h-3.5" />
                </a>
                <a href="#" aria-label="X" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-amber hover:text-school-indigo-dark transition-all">
                  <SiX className="w-3.5 h-3.5" />
                </a>
                <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-amber hover:text-school-indigo-dark transition-all">
                  <SiInstagram className="w-3.5 h-3.5" />
                </a>
                <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-amber hover:text-school-indigo-dark transition-all">
                  <SiYoutube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-school-amber font-semibold mb-4 text-base">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/70 text-sm hover:text-school-amber transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academics */}
            <div>
              <h4 className="font-serif text-school-amber font-semibold mb-4 text-base">Academics</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="hover:text-school-amber transition-colors cursor-pointer">Science & Technology</li>
                <li className="hover:text-school-amber transition-colors cursor-pointer">Humanities & Commerce</li>
                <li className="hover:text-school-amber transition-colors cursor-pointer">Exam Preparation</li>
                <li className="hover:text-school-amber transition-colors cursor-pointer">Sports & Physical Ed.</li>
                <li className="hover:text-school-amber transition-colors cursor-pointer">Arts & Culture</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-school-amber font-semibold mb-4 text-base">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-school-amber mt-0.5 flex-shrink-0" />
                  <span>Chitragupt Nagar, Kankarbagh, Patna - 20</span>
                </li>
                <li className="flex items-center gap-2.5 text-white/70 text-sm">
                  <Phone className="w-4 h-4 text-school-amber flex-shrink-0" />
                  <span>[Insert Phone Number]</span>
                </li>
                <li className="flex items-center gap-2.5 text-white/70 text-sm">
                  <Mail className="w-4 h-4 text-school-amber flex-shrink-0" />
                  <span>[Insert Email Address]</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/50 text-xs">
            <span>© {new Date().getFullYear()} Doon's Public School. All rights reserved.</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-school-amber fill-school-amber mx-0.5" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-school-amber hover:underline"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
