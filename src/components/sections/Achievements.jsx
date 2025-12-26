import PropTypes from 'prop-types';
import { FaTrophy, FaStar, FaAward, FaMedal } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';

const Achievements = ({ data }) => {
    const icons = [FaTrophy, FaStar, FaAward, FaMedal];

    return (
        <Section id="achievements" background="white">
            <Container>
                <SectionTitle
                    title="Achievements"
                    subtitle="Recognition and accomplishments"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {data.map((achievement, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#169b46] to-[#50ca71] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {achievement.description}
                                        </p>
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

Achievements.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Achievements;
