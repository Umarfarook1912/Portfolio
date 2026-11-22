import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectLink = ({ href, variant = 'live', label }) => {
  const isCode = variant === 'code';
  const Icon = isCode ? FaGithub : FaExternalLinkAlt;
  const text = label || (isCode ? 'Code' : 'Live');

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
        isCode
          ? 'bg-surface text-ink hover:bg-ink hover:text-white'
          : 'bg-accent text-white hover:bg-ink'
      }`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden />
      {text}
    </a>
  );
};

ProjectLink.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['live', 'code']),
  label: PropTypes.string,
};

export default ProjectLink;
