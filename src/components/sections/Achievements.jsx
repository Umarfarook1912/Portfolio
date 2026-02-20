import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';
import SectionCard from '../ui/SectionCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Achievements = ({ data }) => {
    return (
        <Section id="achievements" background="white">
            <Container>
                <SectionTitle
                    title="Achievements"
                    subtitle="Recognition and accomplishments"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((achievement, index) => {
                        const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
                        const actions = [];
                        if (achievement.certificateUrl) {
                            actions.push(
                                <a
                                    href={achievement.certificateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-40 px-3 py-2 bg-gradient-to-r from-[#169b46] to-[#50ca71] hover:from-[#50ca71] hover:to-[#169b46] text-white rounded-lg transition-all duration-300 text-sm font-semibold shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300"
                                >
                                    <FaExternalLinkAlt className="w-4 h-4" />
                                    View Certificate
                                </a>
                            );
                        }

                        return (
                            <div ref={ref} key={index}>
                                <SectionCard icon={FaTrophy} title={achievement.title} visible={isVisible} delay={index * 100}>
                                    <p className="text-sm text-gray-600">{achievement.description}</p>
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

Achievements.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            certificateUrl: PropTypes.string,
            imageUrl: PropTypes.string,
        })
    ).isRequired,
};

export default Achievements;
