import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaLayerGroup } from 'react-icons/fa';
import { cn } from '../../lib/cn';

const ProjectGallery = ({ projects, activeId, onSelect, copy }) => (
  <div>
    <div className="mb-4 flex items-center justify-between sm:mb-6">
      <div className="flex items-center gap-2">
        <FaLayerGroup className="h-4 w-4 text-accent" />
        <h3 className="text-base font-bold text-ink sm:text-lg">{copy.galleryTitle}</h3>
      </div>
      <span className="hidden text-xs font-medium text-slate-400 sm:inline">{copy.galleryHint}</span>
    </div>

    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
      {projects.map((project, index) => {
        const selected = project.id === activeId;
        const host = (project.projectUrl || '')
          .replace(/^https?:\/\//, '')
          .replace(/\/$/, '');

        return (
          <button
            key={project.id}
            type="button"
            onClick={() => onSelect(project.id)}
            className={cn(
              'group flex flex-col overflow-hidden rounded-xl border bg-white text-left transition-all duration-300',
              selected
                ? 'border-accent bg-accent/[0.03] shadow-md ring-2 ring-accent/25'
                : 'border-border hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md'
            )}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : null}
              <span className="absolute left-2 top-2 rounded bg-ink/85 px-1.5 py-0.5 text-[9px] font-bold text-white backdrop-blur-md">
                {String(index + 1).padStart(2, '0')}
              </span>
              {selected && (
                <span className="absolute right-2 top-2 rounded bg-accent px-1.5 py-0.5 text-[9px] font-bold text-white">
                  Viewing
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-3 sm:p-4">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                {project.category}
              </p>
              <h4 className="mb-1 truncate text-xs font-bold text-ink transition-colors group-hover:text-accent sm:text-sm">
                {project.name}
              </h4>
              <p className="mb-3 line-clamp-2 flex-1 text-[10px] leading-relaxed text-slate-500 sm:text-xs">
                {project.description}
              </p>
              <div className="flex items-center justify-between border-t border-border pt-2.5">
                <span className="truncate pr-2 text-[10px] font-semibold text-slate-400">{host}</span>
                {project.projectUrl && project.projectUrl !== '#' && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="rounded-md p-1 text-slate-400 transition-colors hover:bg-accent-soft hover:text-accent"
                    aria-label={`Open ${project.name}`}
                  >
                    <FaExternalLinkAlt className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  </div>
);

ProjectGallery.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      imageAlt: PropTypes.string,
      projectUrl: PropTypes.string,
    })
  ).isRequired,
  activeId: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  copy: PropTypes.object.isRequired,
};

export default ProjectGallery;
