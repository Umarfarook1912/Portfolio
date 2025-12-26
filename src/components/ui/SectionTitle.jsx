import PropTypes from 'prop-types';

const SectionTitle = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`text-center mb-12 ${className}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className="w-20 h-1 bg-[#169b46] mx-auto mt-4 rounded-full"></div>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    className: PropTypes.string,
};

export default SectionTitle;
