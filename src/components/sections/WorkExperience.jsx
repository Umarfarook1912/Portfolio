import PropTypes from 'prop-types';
import { FaBriefcase, FaCalendarAlt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';
import SectionCard from '../ui/SectionCard';
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
                        const actions = [];
                        if (experience.githubUrl) {
                            actions.push(
                                <a
                                    href={experience.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-900 text-gray-700 hover:text-white rounded-xl transition-all duration-300 text-sm font-semibold shadow-sm hover:shadow-md"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    View Code
                                </a>
                            );
                        }
                        if (experience.projectUrl) {
                            actions.push(
                                <a
                                    href={experience.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#169b46] to-[#50ca71] hover:from-[#50ca71] hover:to-[#169b46] text-white rounded-xl transition-all duration-300 text-sm font-semibold shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300"
                                >
                                    <FaExternalLinkAlt className="w-4 h-4" />
                                    Visit Site
                                </a>
                            );
                        }

                        // Logo icon component (uses image if available)
                        const LogoIcon = experience.logoUrl
                            ? (({ className }) => <img src={experience.logoUrl} alt={experience.company} className={`${className} object-contain`} />)
                            : FaBriefcase;

                        return (
                            <div ref={ref} key={index}>
                                <SectionCard title={experience.title} visible={isVisible} delay={index * 150}>
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-0 overflow-hidden shadow-lg shadow-green-100">
                                            {experience.logoUrl ? (
                                                <img src={experience.logoUrl} alt={experience.company} className="w-10 h-10 object-contain" />
                                            ) : (
                                                <FaBriefcase className="w-7 h-7 text-white" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[#169b46] font-semibold mb-1">{experience.company}</p>
                                            <div className="flex items-center text-gray-500 text-sm mb-3"><FaCalendarAlt className="w-4 h-4 mr-2" />
                                                <span>{experience.startDate} - {experience.endDate}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed mb-4 text-sm min-h-[4rem]">{experience.description}</p>

                                    {actions.length > 0 && (
                                        <div className="pt-4 border-t border-gray-100">
                                            <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3">
                                                {actions.map((a, i) => (
                                                    <span key={i}>{a}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </SectionCard>
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
