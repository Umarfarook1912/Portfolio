import PropTypes from 'prop-types';
import { FaBriefcase, FaCalendarAlt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const WorkExperience = ({ data }) => {
    return (
        <Section id="experience" background="white">
            <Container>
                <SectionTitle
                    title="Work Experience"
                    subtitle="Professional experience and expertise"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {data.map((experience, index) => {
                        const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
                        return (
                            <div ref={ref} key={index} className={`group relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                                {/* Background gradient decorations */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#169b46] to-[#50ca71] opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#50ca71] to-[#169b46] opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity"></div>

                                {/* Icon / Company logo with gradient background */}
                                {(experience.projectUrl || experience.logoUrl) && (
                                    <div className="relative w-16 h-16  rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden shadow-lg shadow-green-100">
                                        {experience.logoUrl ? (
                                            <img
                                                src={experience.logoUrl}
                                                alt={experience.company}
                                                className="w-10 h-10 object-contain"
                                            />
                                        ) : (
                                            <FaBriefcase className="w-7 h-7 text-white" />
                                        )}
                                    </div>
                                )}

                                {/* Title */}
                                <h3 className="relative text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
                                    {experience.title}
                                </h3>

                                {/* Company */}
                                <p className="relative text-[#169b46] font-semibold mb-3">
                                    {experience.company}
                                </p>

                                {/* Date */}
                                <div className="relative flex items-center text-gray-500 text-sm mb-4">
                                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                                    <span>{experience.startDate} - {experience.endDate}</span>
                                </div>

                                {/* Description */}
                                <p className="relative text-gray-600 leading-relaxed mb-6 text-sm min-h-[4rem]">
                                    {experience.description}
                                </p>

                                {/* Links with enhanced buttons */}
                                {(experience.githubUrl || experience.projectUrl) && (
                                    <div className="relative flex flex-row flex-wrap items-center gap-2 sm:gap-3 pt-4 border-t border-gray-100">
                                        {experience.githubUrl && (
                                            <a
                                                href={experience.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-900 text-gray-700 hover:text-white rounded-xl transition-all duration-300 text-sm font-semibold shadow-sm hover:shadow-md"
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
                                                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#169b46] to-[#50ca71] hover:from-[#50ca71] hover:to-[#169b46] text-white rounded-xl transition-all duration-300 text-sm font-semibold shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300"
                                            >
                                                <FaExternalLinkAlt className="w-4 h-4" />
                                                Visit Site
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
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
