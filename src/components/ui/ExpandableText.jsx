import { useState } from 'react';
import PropTypes from 'prop-types';
import { truncateText } from '../../utils/text';

const ExpandableText = ({ text, maxLength = 110, className = '' }) => {
  const [expanded, setExpanded] = useState(false);
  const { text: shortText, truncated } = truncateText(text, maxLength);

  if (!truncated) {
    return <p className={className}>{text}</p>;
  }

  return (
    <div className={className}>
      <p>{expanded ? text : shortText}</p>
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="mt-1.5 text-sm font-semibold text-accent hover:text-ink"
      >
        {expanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
};

ExpandableText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  className: PropTypes.string,
};

export default ExpandableText;
