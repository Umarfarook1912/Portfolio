import PropTypes from 'prop-types';

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 min-[480px]:px-5 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
