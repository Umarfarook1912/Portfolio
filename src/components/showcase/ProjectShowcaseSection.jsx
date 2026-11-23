import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { Container, FadeIn } from '../ui';
import ProjectSpotlight from './ProjectSpotlight';
import ProjectGallery from './ProjectGallery';
import { normalizeShowcaseList } from '../../utils/projectShowcase';

const ProjectShowcaseSection = ({
  id,
  title,
  subtitle,
  items,
  copy,
  background = 'gray',
}) => {
  const projects = useMemo(
    () => normalizeShowcaseList(items, copy.category),
    [items, copy.category]
  );

  const [activeId, setActiveId] = useState(null);
  const resolvedId = activeId || projects[0]?.id || '';
  const activeIndex = Math.max(
    0,
    projects.findIndex((project) => project.id === resolvedId)
  );
  const activeProject = projects[activeIndex] || projects[0];

  if (!projects.length || !activeProject) return null;

  const goRelative = (step) => {
    const next = (activeIndex + step + projects.length) % projects.length;
    setActiveId(projects[next].id);
  };

  const bgClass = background === 'white' ? 'bg-white' : 'bg-gradient-to-b from-surface via-white to-surface';

  return (
    <section id={id} className={`scroll-mt-28 py-12 sm:scroll-mt-24 sm:py-20 lg:py-24 ${bgClass}`}>
      <Container>
        <FadeIn className="mx-auto mb-6 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent sm:mb-4 sm:text-xs">
            <FaStar className="h-3 w-3 shrink-0" />
            <span>{copy.eyebrow}</span>
          </div>
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-ink sm:mb-4 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
            {subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={80} className="mb-8 sm:mb-14">
          <ProjectSpotlight
            project={activeProject}
            index={activeIndex}
            total={projects.length}
            onPrev={() => goRelative(-1)}
            onNext={() => goRelative(1)}
            copy={copy}
          />
        </FadeIn>

        <FadeIn delay={140}>
          <ProjectGallery
            projects={projects}
            activeId={resolvedId}
            onSelect={setActiveId}
            copy={copy}
          />
        </FadeIn>
      </Container>
    </section>
  );
};

ProjectShowcaseSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  copy: PropTypes.object.isRequired,
  background: PropTypes.oneOf(['white', 'gray']),
};

export default ProjectShowcaseSection;
