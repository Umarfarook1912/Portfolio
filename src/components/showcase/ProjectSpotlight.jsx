import PropTypes from 'prop-types';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
} from 'react-icons/fa';

const ProjectSpotlight = ({ project, index, total, onPrev, onNext, copy }) => {
  const host = project.projectUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-xl">
      <div className="grid lg:grid-cols-12">
        <div className="group relative flex flex-col overflow-hidden bg-slate-950 lg:col-span-7">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/90 px-3.5 py-2.5 sm:px-4 sm:py-3">
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex max-w-[60%] items-center gap-1.5 truncate rounded-md border border-slate-800 bg-slate-950/80 px-2.5 py-1 font-mono text-[10px] text-slate-400 sm:text-[11px]">
              <FaGlobe className="h-2.5 w-2.5 shrink-0 text-accent-light" />
              <span className="truncate">{host}</span>
            </div>
            <span className="shrink-0 text-[10px] font-semibold tabular-nums text-slate-500">
              {index + 1} / {total}
            </span>
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 sm:aspect-video lg:aspect-auto lg:h-[420px]">
            {project.image ? (
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-slate-500">No preview</div>
            )}
            {project.projectUrl && project.projectUrl !== '#' && (
              <div className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-5">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-xs font-bold text-white shadow-lg hover:bg-ink"
                >
                  {copy.visitLabel}
                  <FaExternalLinkAlt className="h-3 w-3" />
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between p-5 sm:p-7 lg:col-span-5 lg:p-8">
          <div>
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="rounded-md border border-accent/20 bg-accent-soft px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-accent sm:text-[11px]">
                {project.category}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={onPrev}
                  aria-label={copy.prevLabel}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <FaArrowLeft className="h-3 w-3" />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  aria-label={copy.nextLabel}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <FaArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>

            <h3 className="mb-2 text-xl font-bold tracking-tight text-ink sm:mb-3 sm:text-2xl lg:text-3xl">
              {project.name}
            </h3>
            <p className="mb-5 text-xs leading-relaxed text-muted sm:text-sm">{project.description}</p>

            {project.highlights?.length > 0 && (
              <>
                <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
                  {copy.featuresLabel}
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                      <FaCheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-2.5 border-t border-border pt-4 sm:flex-row sm:items-center sm:pt-5">
            {project.projectUrl && project.projectUrl !== '#' && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-accent/20 transition-all hover:gap-3 hover:bg-ink sm:w-auto sm:py-3"
              >
                {copy.visitLabel}
                <FaExternalLinkAlt className="h-3 w-3" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-surface px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:bg-surface-alt sm:w-auto sm:py-3"
              >
                <FaGithub className="h-3.5 w-3.5" />
                {copy.codeLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectSpotlight.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    description: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    projectUrl: PropTypes.string,
    githubUrl: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  copy: PropTypes.object.isRequired,
};

export default ProjectSpotlight;
