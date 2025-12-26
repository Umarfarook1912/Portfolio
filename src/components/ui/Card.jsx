import PropTypes from 'prop-types';

const Card = ({ children, className = '', hover = false }) => {
    return (
        <div
            className={`bg-white rounded-lg shadow-md p-6 ${hover ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl' : ''
                } ${className}`}
        >
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    hover: PropTypes.bool,
};

export default Card;
