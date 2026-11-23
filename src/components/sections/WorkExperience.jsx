import PropTypes from 'prop-types';
import { FaBriefcase, FaCalendarAlt, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Section, Container, FadeIn, ExpandableText } from '../ui';
import { SECTION_COPY } from '../../constants/site';
import { cn } from '../../lib/cn';

const WorkExperience = ({ data }) => (
  <Section id="experience" background="white">
    <Container>
      <FadeIn className="mb-8 md:mb-14">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-accent">
          Career timeline
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-4xl">
          {SECTION_COPY.experience.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted sm:text-lg">
          {SECTION_COPY.experience.subtitle}
        </p>
      </FadeIn>

      <div className="relative mx-auto max-w-4xl">
        {/* Mobile timeline rail */}
        <div
          className="absolute bottom-2 left-[1.15rem] top-2 w-px bg-gradient-to-b from-accent via-accent/35 to-transparent md:hidden"
          aria-hidden
        />
        {/* Desktop timeline rail */}
        <div
          className="absolute bottom-4 left-[1.35rem] top-4 hidden w-px bg-gradient-to-b from-accent via-accent/35 to-transparent sm:left-6 md:block"
          aria-hidden
        />

        <div className="space-y-0 md:space-y-6">
          {data.map((experience, index) => {
            const isCurrent = /present/i.test(experience.endDate || '');
            const isLast = index === data.length - 1;

            return (
              <FadeIn key={`${experience.company}-${index}`} delay={index * 80}>
                {/* Mobile: timeline row (no card) */}
                <article className="relative grid grid-cols-[2.5rem_1fr] gap-3 py-4 md:hidden">
                  <div className="relative z-10 flex justify-center pt-1">
                    <span
                      className={cn(
                        'flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-[3px] border-white bg-white shadow-sm',
                        isCurrent && 'ring-2 ring-accent/35'
                      )}
                    >
                      {experience.logoUrl ? (
                        <img
                          src={experience.logoUrl}
                          alt=""
                          className="h-full w-full object-contain p-1"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center bg-accent text-white">
                          <FaBriefcase className="h-3.5 w-3.5" aria-hidden />
                        </span>
                      )}
                    </span>
                  </div>

                  <div className={cn('min-w-0 pb-4', !isLast && 'border-b border-border/80')}>
                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
                      {isCurrent && (
                        <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent">
                          Current
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-[11px] text-muted">
                        <FaCalendarAlt className="h-2.5 w-2.5 shrink-0" aria-hidden />
                        {experience.startDate} — {experience.endDate}
                      </span>
                    </div>

                    <h3 className="text-base font-bold leading-snug text-ink">{experience.title}</h3>
                    <p className="mt-0.5 text-sm font-semibold text-accent">{experience.company}</p>

                    <ExpandableText
                      text={experience.description}
                      maxLength={120}
                      className="mt-2.5 text-sm leading-relaxed text-muted"
                    />

                    {(experience.githubUrl || experience.projectUrl) && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {experience.githubUrl && (
                          <a
                            href={experience.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border px-3 text-xs font-semibold text-ink hover:bg-ink hover:text-white"
                          >
                            <FaGithub className="h-3.5 w-3.5" aria-hidden />
                            Code
                          </a>
                        )}
                        {experience.projectUrl && (
                          <a
                            href={experience.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-accent px-3 text-xs font-semibold text-white hover:bg-ink"
                          >
                            <FaExternalLinkAlt className="h-3 w-3" aria-hidden />
                            Visit
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>

                {/* Desktop: card + timeline (unchanged look) */}
                <article className="relative hidden grid-cols-[3.25rem_1fr] gap-5 md:grid">
                  <div className="relative z-10 flex justify-center pt-7">
                    <span
                      className={cn(
                        'flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white shadow-md',
                        isCurrent ? 'ring-2 ring-accent/40' : 'border-surface'
                      )}
                    >
                      {experience.logoUrl ? (
                        <img
                          src={experience.logoUrl}
                          alt=""
                          className="h-full w-full object-contain p-1.5"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center bg-accent text-white">
                          <FaBriefcase className="h-4 w-4" aria-hidden />
                        </span>
                      )}
                    </span>
                  </div>

                  <div
                    className={cn(
                      'overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg',
                      isCurrent
                        ? 'border-accent/40 shadow-md shadow-accent/10'
                        : 'border-border hover:border-accent/30'
                    )}
                  >
                    <div className="flex flex-col gap-4 border-b border-border bg-surface/60 p-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-ink px-2.5 py-0.5 text-[10px] font-bold text-white">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          {isCurrent && (
                            <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-ink">{experience.title}</h3>
                        <p className="mt-1 text-sm font-semibold text-accent">{experience.company}</p>
                        <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
                          <FaCalendarAlt className="h-3 w-3 shrink-0" aria-hidden />
                          {experience.startDate} — {experience.endDate}
                        </p>
                      </div>

                      <div className="flex shrink-0 gap-2">
                        {experience.githubUrl && (
                          <a
                            href={experience.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-white px-3 text-xs font-semibold text-ink hover:bg-ink hover:text-white"
                          >
                            <FaGithub className="h-3.5 w-3.5" aria-hidden />
                            Code
                          </a>
                        )}
                        {experience.projectUrl && (
                          <a
                            href={experience.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-accent px-3 text-xs font-semibold text-white hover:bg-ink"
                          >
                            <FaExternalLinkAlt className="h-3 w-3" aria-hidden />
                            Visit
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-5">
                      <ExpandableText
                        text={experience.description}
                        maxLength={150}
                        className="text-sm leading-relaxed text-muted"
                      />
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Container>
  </Section>
);

WorkExperience.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      logoUrl: PropTypes.string,
      githubUrl: PropTypes.string,
      projectUrl: PropTypes.string,
    })
  ).isRequired,
};

export default WorkExperience;
