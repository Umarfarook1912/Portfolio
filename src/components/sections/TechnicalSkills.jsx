import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Section, Container, SectionTitle, FadeIn } from '../ui';
import { SECTION_COPY } from '../../constants/site';
import { SKILL_CATEGORY_COLORS } from '../../constants/showcase';
import { cn } from '../../lib/cn';

const TechnicalSkills = ({ data }) => {
  const categories = useMemo(() => {
    const unique = [...new Set(data.map((skill) => skill.category).filter(Boolean))];
    return ['All', ...unique];
  }, [data]);

  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? data : data.filter((skill) => skill.category === active);

  return (
    <Section id="skills" background="white">
      <Container>
        <SectionTitle
          title={SECTION_COPY.skills.title}
          subtitle={SECTION_COPY.skills.subtitle}
        />

        <div className="mb-8 flex flex-wrap gap-2 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm',
                active === cat
                  ? 'border-ink bg-ink text-white'
                  : 'border-border bg-white text-muted hover:border-accent/50 hover:text-accent'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          key={active}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6"
        >
          {filtered.map((skill, index) => (
            <FadeIn key={`${skill.name}-${active}`} delay={index * 35}>
              <div className="flex min-w-0 flex-col items-center gap-2 rounded-xl border border-border bg-white p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-md sm:gap-3 sm:p-4">
                <div className="flex h-10 w-10 items-center justify-center">
                  <img
                    src={skill.logoUrl}
                    alt=""
                    className="h-9 w-9 object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-medium text-ink">{skill.name}</p>
                {skill.category && (
                  <span
                    className={cn(
                      'rounded-full border px-2 py-0.5 text-[10px] font-semibold',
                      SKILL_CATEGORY_COLORS[skill.category] ||
                        'border-slate-200 bg-slate-50 text-slate-600'
                    )}
                  >
                    {skill.category}
                  </span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          Showing {filtered.length} of {data.length} technologies
        </p>
      </Container>
    </Section>
  );
};

TechnicalSkills.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logoUrl: PropTypes.string.isRequired,
      category: PropTypes.string,
    })
  ).isRequired,
};

export default TechnicalSkills;
