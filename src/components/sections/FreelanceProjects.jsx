import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';
import SectionCard from '../ui/SectionCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const FreelanceProjects = ({ data }) => {
    return (
        <Section id="freelance" background="gray">
            <Container>
                <SectionTitle
                    title="Freelance Projects"
                    subtitle="Selected client and freelance work"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data && data.map((project, index) => {
                        const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
                        const actions = [];
                        if (project.githubUrl) {
                            actions.push(
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-900 text-gray-700 hover:text-white rounded-lg transition-all duration-300 text-sm font-semibold shadow-sm hover:shadow-md"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    Code
                                </a>
                            );
                        }
                        if (project.projectUrl) {
                            actions.push(
                                <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#169b46] to-[#50ca71] hover:from-[#50ca71] hover:to-[#169b46] text-white rounded-lg transition-all duration-300 text-sm font-semibold shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300"
                                >
                                    <FaExternalLinkAlt className="w-4 h-4" />
                                    Live
                                </a>
                            );
                        }

                        return (
                            <div ref={ref} key={index}>
                                <SectionCard imageUrl={project.imageUrl} title={project.title} visible={isVisible} delay={index * 100}>
                                    <p className="text-sm text-gray-600">{project.description}</p>
                                    <div className="mt-2">
                                        {actions.map((a, i) => (
                                            <span key={i} className="mr-2">{a}</span>
                                        ))}
                                    </div>
                                </SectionCard>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
};

FreelanceProjects.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            githubUrl: PropTypes.string,
            projectUrl: PropTypes.string,
            imageUrl: PropTypes.string,
        })
    ),
};

export default FreelanceProjects;
