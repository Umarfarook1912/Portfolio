import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Section, Container, SectionTitle, Card, Button } from '../ui';

const WorkExperience = ({ data }) => {
    return (
        <Section id="experience" background="gray">
            <Container>
                <SectionTitle
                    title="Work Experience"
                    subtitle="My professional journey and contributions"
                />

                <div className="space-y-6">
                    {data.map((experience, index) => (
                        <Card key={index} hover className="">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        {experience.title}
                                    </h3>
                                    <p className="text-lg text-[#169b46] font-medium">
                                        {experience.company}
                                    </p>
                                </div>
                                <p className="text-gray-600 mt-2 md:mt-0">
                                    {experience.startDate} - {experience.endDate}
                                </p>
                            </div>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                                {experience.description}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {experience.githubUrl && (
                                    <Button
                                        href={experience.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="outline"
                                        size="sm"
                                    >
                                        <FaGithub className="mr-2" />
                                        GitHub
                                    </Button>
                                )}
                                {experience.projectUrl && (
                                    <Button
                                        href={experience.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="ghost"
                                        size="sm"
                                    >
                                        <FaExternalLinkAlt className="mr-2" />
                                        View Project
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

WorkExperience.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            githubUrl: PropTypes.string,
            projectUrl: PropTypes.string,
        })
    ).isRequired,
};

export default WorkExperience;
