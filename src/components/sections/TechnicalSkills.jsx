import PropTypes from 'prop-types';
import { Section, Container, SectionTitle, Card } from '../ui';

const TechnicalSkills = ({ data }) => {
    return (
        <Section id="skills" background="white">
            <Container>
                <SectionTitle
                    title="Technical Skills"
                    subtitle="Technologies and tools I work with"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.map((skill, index) => (
                        <Card key={index} hover className="text-center">
                            <div className="flex flex-col items-center">
                                <img
                                    src={skill.logoUrl}
                                    alt={skill.name}
                                    className="w-16 h-16 mb-4 object-contain"
                                />
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    {skill.name}
                                </h4>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                    <div
                                        className="bg-[#169b46] h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${skill.proficiency}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm text-gray-600">
                                    {skill.proficiency}%
                                </span>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

TechnicalSkills.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            logoUrl: PropTypes.string.isRequired,
            proficiency: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default TechnicalSkills;
