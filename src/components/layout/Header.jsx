import { useEffect, useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { NAV_ITEMS } from '../../constants/routes';
import { SITE } from '../../constants/site';
import { cn } from '../../lib/cn';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const ids = ['home', ...NAV_ITEMS.map((item) => item.href.replace('#', ''))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <Container className="!px-0 sm:!px-0">
        <nav
          aria-label="Primary"
          className={cn(
            'flex items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-4',
            isScrolled || isMobileMenuOpen
              ? 'border-border bg-white/95 shadow-lg shadow-ink/5 backdrop-blur-md'
              : 'border-white/50 bg-white/70 backdrop-blur-sm'
          )}
        >
          <a href="#home" className="flex items-center gap-2.5 pl-1">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm font-bold text-white">
              UF
            </span>
            <span className="hidden text-sm font-bold tracking-tight text-ink sm:inline sm:text-base">
              Umar Farook <span className="text-accent">J</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'rounded-xl px-3 py-2 text-sm font-medium transition-colors',
                  activeHref === item.href
                    ? 'bg-accent-soft text-accent'
                    : 'text-muted hover:bg-surface hover:text-ink'
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              href={SITE.RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Resume
            </Button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-ink lg:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div
            id="mobile-nav"
            className="mt-2 space-y-1 rounded-2xl border border-border bg-white p-2 shadow-xl lg:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'block rounded-xl px-3 py-3 text-base font-medium',
                  activeHref === item.href
                    ? 'bg-accent-soft text-accent'
                    : 'text-ink hover:bg-surface'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="p-2 pt-1">
              <Button href={SITE.RESUME_PATH} target="_blank" rel="noopener noreferrer" className="w-full">
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
