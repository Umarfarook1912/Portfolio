import PropTypes from 'prop-types';
import TiltCard from './TiltCard';

const SectionCard = ({
  imageUrl,
  icon: Icon,
  title,
  children,
  actions = [],
  className = '',
  tilt = true,
}) => {
  const card = (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white ${className}`}
    >
      {imageUrl && (
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-alt">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )}

      <div className="tilt-card-inner flex flex-1 flex-col p-5 sm:p-6">
        {Icon && (
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
        )}

        {title && (
          <h3 className="text-lg font-bold leading-snug text-ink sm:text-xl">{title}</h3>
        )}

        <div className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
          {children}
        </div>

        {actions.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">{actions}</div>
        )}
      </div>
    </article>
  );

  if (!tilt) return card;
  return <TiltCard>{card}</TiltCard>;
};

SectionCard.propTypes = {
  imageUrl: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
  children: PropTypes.node,
  actions: PropTypes.array,
  className: PropTypes.string,
  tilt: PropTypes.bool,
};

export default SectionCard;
