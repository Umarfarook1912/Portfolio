import PropTypes from 'prop-types';
import { FaAward, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';
import ExpandableText from './ExpandableText';
import FadeIn from './FadeIn';

const isImagePath = (path = '') => /\.(png|jpe?g|webp|gif)$/i.test(path);

const CredentialCard = ({
  title,
  description,
  href,
  imageUrl,
  variant = 'certificate',
  index = 0,
  delay = 0,
}) => {
  const Icon = variant === 'achievement' ? FaTrophy : FaAward;
  const label = variant === 'achievement' ? 'Achievement' : 'Certificate';
  const cta = variant === 'achievement' ? 'View proof' : 'View certificate';
  const preview = imageUrl || '';
  const showImage = isImagePath(preview);

  return (
    <FadeIn delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_-28px_rgba(22,155,70,0.45)] sm:rounded-2xl">
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-alt">
          {showImage ? (
            <img
              src={preview}
              alt={title}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full min-h-[7rem] flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent-soft via-white to-surface px-3 text-center sm:min-h-[11rem] sm:gap-3 sm:px-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-lg shadow-accent/25 sm:h-14 sm:w-14 sm:rounded-2xl">
                <Icon className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent sm:text-[11px]">
                {label}
              </span>
            </div>
          )}

          <span className="absolute left-1.5 top-1.5 rounded bg-ink/85 px-1.5 py-0.5 text-[9px] font-bold text-white backdrop-blur-sm sm:left-3 sm:top-3 sm:px-2 sm:py-1 sm:text-[10px]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="absolute right-1.5 top-1.5 hidden rounded bg-accent px-2 py-1 text-[10px] font-bold text-white sm:right-3 sm:top-3 sm:block">
            {label}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-3 sm:p-6">
          <h3 className="text-xs font-bold leading-snug text-ink sm:text-lg">{title}</h3>
          {description && (
            <div className="mt-2 hidden sm:mt-3 sm:block">
              <ExpandableText
                text={description}
                maxLength={110}
                className="text-sm leading-relaxed text-muted"
              />
            </div>
          )}
          {description && (
            <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-muted sm:hidden">
              {description}
            </p>
          )}

          {href && (
            <div className="mt-auto border-t border-border pt-2.5 sm:pt-4">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-8 items-center gap-1.5 rounded-lg bg-accent px-2.5 py-1.5 text-[10px] font-semibold text-white transition-colors hover:bg-ink sm:min-h-0 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
              >
                <span className="sm:hidden">View</span>
                <span className="hidden sm:inline">{cta}</span>
                <FaExternalLinkAlt className="h-2.5 w-2.5 sm:h-3 sm:w-3" aria-hidden />
              </a>
            </div>
          )}
        </div>
      </article>
    </FadeIn>
  );
};

CredentialCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  href: PropTypes.string,
  imageUrl: PropTypes.string,
  variant: PropTypes.oneOf(['certificate', 'achievement']),
  index: PropTypes.number,
  delay: PropTypes.number,
};

export default CredentialCard;
