import PropTypes from 'prop-types';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Section, Container, SectionTitle, Card, Button } from '../ui';

const Certifications = ({ data }) => {
    return (
        <Section id="certifications" background="white">
            <Container>
                <SectionTitle
                    title="Certifications"
                    subtitle="Professional certifications and achievements"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((cert, index) => (
                        <Card key={index} hover className="flex flex-col">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex-grow">
                                {cert.title}
                            </h3>

                            <Button
                                href={cert.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="primary"
                                size="sm"
                                className="w-full"
                            >
                                <FaExternalLinkAlt className="mr-2" />
                                View Certificate
                            </Button>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

Certifications.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            certificateUrl: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Certifications;
