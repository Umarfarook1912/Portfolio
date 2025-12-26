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
    rel
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-[#169b46] hover:bg-[#50ca71] text-white focus:ring-[#50ca71]',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400',
        outline: 'border-2 border-[#169b46] text-[#169b46] hover:bg-[#169b46] hover:text-white focus:ring-[#50ca71]',
        ghost: 'text-[#169b46] hover:bg-[#50ca71] hover:bg-opacity-10 focus:ring-[#50ca71]',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={classes}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
        >
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
