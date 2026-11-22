import PropTypes from 'prop-types';

const SectionTitle = ({ title, subtitle, className = '', align = 'left' }) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`mb-10 md:mb-14 flex flex-col gap-3 ${alignClass} ${className}`}>
      <div className="h-1 w-10 rounded-full bg-accent" aria-hidden />
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base leading-relaxed text-muted sm:text-lg ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
};

export default SectionTitle;
