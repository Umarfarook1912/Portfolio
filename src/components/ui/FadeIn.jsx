import PropTypes from 'prop-types';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const FadeIn = ({ children, className = '', delay = 0, threshold = 0.15 }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold });

  return (
    <div
      ref={ref}
      className={`section-fade ${isVisible ? 'is-visible' : 'is-hidden'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  threshold: PropTypes.number,
};

export default FadeIn;
