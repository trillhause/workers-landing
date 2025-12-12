import React from 'react';
import Link from 'next/link';
import posthog from 'posthog-js';

interface NavbarProps {
  hideActions?: boolean;
}

export function Navbar({ hideActions }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false);
  const [scrolledPastHero, setScrolledPastHero] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      // Add blur background after scrolling down a bit (50px)
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect if scrolled past hero section
      // Hero has min-h-[500px] and max-h-[1000px], use 80vh as threshold
      const heroHeight = Math.min(window.innerHeight * 0.8, 1000);
      if (window.scrollY > heroHeight) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    }

    // Add scroll event
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check in case page is loaded scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Helper for bg & blur classes only when scrolled past Hero
  const navBgClass = scrolled ? 'bg-black/40 backdrop-blur-md' : '';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6 flex items-center justify-between">
      <Link href="/" passHref onClick={() => posthog.capture('navbar_logo_clicked', { target: '/' })}>
        <div
          className={`flex items-center gap-8 px-6 py-3 rounded-md transition-colors duration-300 ${navBgClass}`}
          style={{ cursor: 'pointer' }}
        >
          <div className="flex items-center gap-2 font-semibold text-xl tracking-tight">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            WORKERS
          </div>
        </div>
      </Link>

      {!hideActions && (
        <div className={`flex items-center gap-4 px-2 py-2 rounded-lg transition-all duration-500 bg-black/40 backdrop-blur-md ${
          scrolledPastHero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
        }`}>
          {/* <button className="px-4 py-2 text-sm font-medium">
            Sign In
          </button> */}
          <button
            onClick={() => {
              posthog.capture('navbar_get_access_clicked', { target: '#get-access' });
              window.location.href = '#get-access';
            }}
            className={`px-4 py-2 text-sm font-medium bg-neutral-100 text-black hover:bg-neutral-300 rounded-sm`}
          >
            Get Access
          </button>
        </div>
      )}
    </nav>
  );
}
