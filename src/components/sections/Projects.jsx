import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Section, Container, SectionTitle, Card, Button } from '../ui';

const Projects = ({ data }) => {
    return (
        <Section id="projects" background="white">
            <Container>
                <SectionTitle
                    title="Projects"
                    subtitle="Some of my recent work and personal projects"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((project, index) => (
                        <Card key={index} hover className="flex flex-col">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {project.title}
                            </h3>

                            <p className="text-gray-700 mb-4 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mt-auto">
                                {project.githubUrl && (
                                    <Button
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="outline"
                                        size="sm"
                                    >
                                        <FaGithub className="mr-2" />
                                        Code
                                    </Button>
                                )}
                                {project.projectUrl && (
                                    <Button
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="ghost"
                                        size="sm"
                                    >
                                        <FaExternalLinkAlt className="mr-2" />
                                        Live Demo
                                    </Button>
                                )}
                            </div>
                        </Card>
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
