import PropTypes from 'prop-types';
import { FaTrophy } from 'react-icons/fa';
import { Section, Container, SectionTitle, Card } from '../ui';

const Achievements = ({ data }) => {
    return (
        <Section id="achievements" background="gray">
            <Container>
                <SectionTitle
                    title="Achievements"
                    subtitle="Recognition and accomplishments"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.map((achievement, index) => (
                        <Card key={index} hover className="">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <FaTrophy className="w-8 h-8 text-[#169b46]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

Achievements.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Achievements;
