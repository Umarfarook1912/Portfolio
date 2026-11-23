import PropTypes from 'prop-types';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  href,
  target,
  rel,
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-accent text-white hover:bg-ink',
    secondary: 'bg-ink text-white hover:bg-accent',
    outline: 'border border-ink/15 bg-white text-ink hover:border-accent hover:text-accent',
    ghost: 'text-accent hover:bg-accent-soft',
  };

  const sizes = {
    sm: 'min-h-10 px-3.5 py-2 text-sm rounded-lg',
    md: 'min-h-11 px-5 py-2.5 text-sm sm:text-base rounded-xl',
    lg: 'min-h-12 px-6 py-3.5 text-base rounded-xl',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default Button;
