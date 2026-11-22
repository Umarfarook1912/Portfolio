import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TiltCard from './TiltCard';
import ExpandableText from './ExpandableText';
import FadeIn from './FadeIn';

const ProjectMediaCard = ({
  title,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
  delay = 0,
}) => (
  <FadeIn delay={delay} className="h-full">
    <TiltCard maxTilt={7}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white">
        <div className="relative aspect-[16/9] overflow-hidden bg-surface-alt">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-accent-soft text-accent">
              <FaExternalLinkAlt className="h-6 w-6" aria-hidden />
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 flex justify-end gap-2 bg-gradient-to-t from-ink/55 to-transparent p-3 opacity-100 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} code`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 text-ink hover:bg-accent hover:text-white"
              >
                <FaGithub className="h-4 w-4" />
              </a>
            )}
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live site`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white hover:bg-ink"
              >
                <FaExternalLinkAlt className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        <div className="tilt-card-inner flex flex-1 flex-col p-4">
          <h3 className="line-clamp-2 text-base font-bold leading-snug text-ink">{title}</h3>
          <ExpandableText
            text={description}
            maxLength={96}
            className="mt-2 text-sm leading-relaxed text-muted"
          />
        </div>
      </article>
    </TiltCard>
  </FadeIn>
);

ProjectMediaCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  projectUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  delay: PropTypes.number,
};

export default ProjectMediaCard;
