import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Projects = ({ data }) => {
    return (
        <Section id="projects" background="gray">
            <Container>
                <SectionTitle
                    title="Projects"
                    subtitle="Some of my recent work and personal projects"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((project, index) => {
                        const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
                        return (
                            <div ref={ref} key={index} className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                                {/* Background gradient decorations */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#169b46] to-[#50ca71] opacity-0 rounded-full blur-2xl group-hover:opacity-10 transition-opacity pointer-events-none z-10"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#50ca71] to-[#169b46] opacity-0 rounded-full blur-xl group-hover:opacity-10 transition-opacity pointer-events-none z-10"></div>

                                {/* Project Image header: use provided image when available, otherwise fallback to a neutral header */}
                                {project.imageUrl ? (
                                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ) : (
                                    <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-50 to-gray-100" />
                                )}

                                {/* Project Details */}
                                <div className="relative p-4 sm:p-5 md:p-6 z-20">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 leading-tight">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm min-h-[3rem] sm:min-h-[4rem]">
                                        {project.description}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-900 text-gray-700 hover:text-white rounded-lg transition-all duration-300 text-sm font-semibold shadow-sm hover:shadow-md"
                                            >
                                                <FaGithub className="w-4 h-4" />
                                                Code
                                            </a>
                                        )}
                                        {project.projectUrl && (
                                            <a
                                                href={project.projectUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#169b46] to-[#50ca71] hover:from-[#50ca71] hover:to-[#169b46] text-white rounded-lg transition-all duration-300 text-sm font-semibold shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300"
                                            >
                                                <FaExternalLinkAlt className="w-4 h-4" />
                                                Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
};

Projects.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            githubUrl: PropTypes.string,
            projectUrl: PropTypes.string,
        })
    ).isRequired,
};

export default Projects;
