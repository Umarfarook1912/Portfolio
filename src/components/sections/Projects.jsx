import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';

const Projects = ({ data }) => {
    return (
        <Section id="projects" background="gray">
            <Container>
                <SectionTitle
                    title="Projects"
                    subtitle="Some of my recent work and personal projects"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((project, index) => (
                        <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            {/* Project Image header: use provided image when available, otherwise fallback to a neutral header */}
                            {project.imageUrl ? (
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="relative h-64 bg-gray-100" />
                            )}

                            {/* Project Details */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-[#169b46] text-gray-700 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium"
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
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#169b46] hover:bg-[#50ca71] text-white rounded-lg transition-all duration-300 text-sm font-medium"
                                        >
                                            <FaExternalLinkAlt className="w-4 h-4" />
                                            Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
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
