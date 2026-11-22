import PropTypes from 'prop-types';

const Section = ({ id, children, className = '', background = 'white' }) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-surface',
    muted: 'bg-surface-alt',
  };

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 md:py-24 ${backgrounds[background]} ${className}`}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  background: PropTypes.oneOf(['white', 'gray', 'muted']),
};

export default Section;
