import PropTypes from 'prop-types';
import { FaBriefcase, FaCalendarAlt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';

const WorkExperience = ({ data }) => {
    return (
        <Section id="experience" background="white">
            <Container>
                <SectionTitle
                    title="Work Experience"
                    subtitle="Professional experience and expertise"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {data.map((experience, index) => (
                        <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                            {/* Icon / Company logo if provided (no green background).
                                Hide the whole area when there's no projectUrl and no logoUrl. */}
                            {(experience.projectUrl || experience.logoUrl) && (
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                    {experience.logoUrl ? (
                                        <img
                                            src={experience.logoUrl}
                                            alt={experience.company}
                                            className="w-12 h-12 object-contain"
                                        />
                                    ) : (
                                        <FaBriefcase className="w-8 h-8 text-gray-400" />
                                    )}
                                </div>
                            )}

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {experience.title}
                            </h3>

                            {/* Company */}
                            <p className="text-[#169b46] font-semibold mb-3">
                                {experience.company}
                            </p>

                            {/* Date */}
                            <div className="flex items-center text-gray-500 text-sm mb-4">
                                <FaCalendarAlt className="w-4 h-4 mr-2" />
                                <span>{experience.startDate} - {experience.endDate}</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                                {experience.description}
                            </p>

                            {/* Links */}
                            {(experience.githubUrl || experience.projectUrl) && (
                                <div className="flex gap-3 pt-4 border-t border-gray-100">
                                    {experience.githubUrl && (
                                        <a
                                            href={experience.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 hover:text-[#169b46] transition-colors text-sm font-medium"
                                        >
                                            <FaGithub className="w-4 h-4" />
                                            View Code
                                        </a>
                                    )}
                                    {experience.projectUrl && (
                                        <a
                                            href={experience.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 hover:text-[#169b46] transition-colors text-sm font-medium"
                                        >
                                            <FaExternalLinkAlt className="w-4 h-4" />
                                            Visit Site
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

WorkExperience.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            logoUrl: PropTypes.string,
            githubUrl: PropTypes.string,
            projectUrl: PropTypes.string,
        })
    ).isRequired,
};

export default WorkExperience;
