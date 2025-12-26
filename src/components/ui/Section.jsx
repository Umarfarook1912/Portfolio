import PropTypes from 'prop-types';

const Section = ({ id, children, className = '', background = 'white' }) => {
    const bgColors = {
        white: 'bg-white',
        gray: 'bg-gray-50',
    };

    return (
        <section id={id} className={`py-16 md:py-20 ${bgColors[background]} ${className}`}>
            {children}
        </section>
    );
};

Section.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    background: PropTypes.oneOf(['white', 'gray']),
};

export default Section;
