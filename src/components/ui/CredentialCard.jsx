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
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_-28px_rgba(22,155,70,0.45)]">
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-alt">
          {showImage ? (
            <img
              src={preview}
              alt={title}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full min-h-[11rem] flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent-soft via-white to-surface px-6 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-lg shadow-accent/25">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                {label}
              </span>
            </div>
          )}

          <span className="absolute left-3 top-3 rounded-md bg-ink/85 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="absolute right-3 top-3 rounded-md bg-accent px-2 py-1 text-[10px] font-bold text-white">
            {label}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-lg font-bold leading-snug text-ink">{title}</h3>
          {description && (
            <ExpandableText
              text={description}
              maxLength={110}
              className="mt-3 text-sm leading-relaxed text-muted"
            />
          )}

          {href && (
            <div className="mt-auto border-t border-border pt-4">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink"
              >
                {cta}
                <FaExternalLinkAlt className="h-3 w-3" aria-hidden />
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
