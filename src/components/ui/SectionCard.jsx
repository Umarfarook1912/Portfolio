import PropTypes from 'prop-types';

const SectionCard = ({
  imageUrl,
  icon: Icon,
  title,
  children,
  actions = [],
  visible = true,
  delay = 0,
  className = '',
}) => {
  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#169b46] to-[#50ca71] opacity-0 rounded-full blur-2xl group-hover:opacity-10 transition-opacity pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#50ca71] to-[#169b46] opacity-0 rounded-full blur-xl group-hover:opacity-10 transition-opacity pointer-events-none z-10" />

      {imageUrl ? (
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      ) : null}

      <div className="relative p-4 sm:p-5 md:p-6 z-20 flex flex-col h-full">
        {Icon && (
          <div className="w-14 h-14 bg-gradient-to-br from-[#169b46] to-[#50ca71] rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-200">
            <Icon className="w-7 h-7 text-white" />
          </div>
        )}

        {title && <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 leading-tight">{title}</h3>}

        <div className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm flex-1">
          {children}
        </div>

        {actions && actions.length > 0 && (
          <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3 mt-2">
            {actions.map((act, i) => (
              <span key={i}>{act}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

SectionCard.propTypes = {
  imageUrl: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
  children: PropTypes.node,
  actions: PropTypes.array,
  visible: PropTypes.bool,
  delay: PropTypes.number,
  className: PropTypes.string,
};

export default SectionCard;
