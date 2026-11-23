import { useCallback, useEffect, useState } from 'react';
import { FaArrowRight, FaShieldAlt } from 'react-icons/fa';
import { Container, FadeIn } from '../ui';
import { DEVELOPMENT_PRINCIPLES } from '../../constants/principles';
import { ROUTES } from '../../constants/routes';
import { cn } from '../../lib/cn';

const ROTATE_MS = 2500;

const HowICode = () => {
  const [activeId, setActiveId] = useState(DEVELOPMENT_PRINCIPLES[0].id);
  const [paused, setPaused] = useState(false);
  const active =
    DEVELOPMENT_PRINCIPLES.find((item) => item.id === activeId) ||
    DEVELOPMENT_PRINCIPLES[0];

  const goToNext = useCallback(() => {
    setActiveId((current) => {
      const idx = DEVELOPMENT_PRINCIPLES.findIndex((item) => item.id === current);
      return DEVELOPMENT_PRINCIPLES[(idx + 1) % DEVELOPMENT_PRINCIPLES.length].id;
    });
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = setInterval(goToNext, ROTATE_MS);
    return () => clearInterval(interval);
  }, [paused, goToNext]);

  return (
    <section id="how-i-code" className="scroll-mt-28 overflow-x-clip bg-footer py-12 text-white sm:scroll-mt-24 sm:py-16">
      <Container>
        <FadeIn className="mb-8 max-w-2xl sm:mb-10">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-accent-light">
            How I code
          </p>
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
            Development principles you can trust
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Every principle maps to a real outcome — they rotate automatically, or select one to explore.
          </p>
        </FadeIn>

        <div
          className="grid min-w-0 gap-4 sm:gap-6 lg:grid-cols-5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="-mx-4 flex min-w-0 snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain px-4 pb-2 scrollbar-hide sm:-mx-6 sm:px-6 lg:col-span-2 lg:mx-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0 lg:pb-0">
            {DEVELOPMENT_PRINCIPLES.map((principle) => {
              const selected = activeId === principle.id;
              return (
                <button
                  key={principle.id}
                  type="button"
                  onClick={() => setActiveId(principle.id)}
                  className={cn(
                    'min-h-14 w-[140px] shrink-0 snap-start rounded-lg border px-3 py-2.5 text-left transition-all duration-200 sm:w-auto sm:py-3 lg:min-h-0 lg:w-auto lg:shrink',
                    selected
                      ? 'border-accent bg-accent/15 shadow-[0_0_20px_rgba(22,155,70,0.25)]'
                      : 'border-slate-700 bg-white/5 hover:border-slate-500 hover:bg-white/10'
                  )}
                >
                  <span
                    className={cn(
                      'block text-sm font-bold sm:text-xs',
                      selected ? 'text-accent-light' : 'text-white'
                    )}
                  >
                    {principle.acronym}
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-tight text-slate-400 sm:text-[10px]">
                    {principle.mapsTo}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="min-w-0 lg:col-span-3">
            <div
              key={active.id}
              className="h-full rounded-xl border border-slate-700 bg-white/5 p-5 sm:p-8 section-fade is-visible"
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20">
                  <FaShieldAlt className="h-4 w-4 text-accent-light" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-light">
                  Maps to {active.mapsTo}
                </span>
              </div>
              <h3 className="mb-1 text-xl font-bold">{active.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-300">{active.description}</p>
              <div className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-3">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-accent-light">
                  Why it matters for you
                </p>
                <p className="text-sm leading-relaxed text-slate-200">{active.trustPoint}</p>
              </div>
            </div>
          </div>
        </div>

        <FadeIn delay={120} className="mt-8 text-center">
          <a
            href={ROUTES.CONTACT}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-light transition-all hover:gap-2.5"
          >
            Start a project <FaArrowRight className="h-3 w-3" />
          </a>
        </FadeIn>
      </Container>
    </section>
  );
};

export default HowICode;
