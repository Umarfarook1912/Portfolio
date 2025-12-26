import PropTypes from 'prop-types';
import { Section, Container, SectionTitle } from '../ui';

const TechnicalSkills = ({ data }) => {
    return (
        <Section id="skills" background="gray">
            <Container>
                <SectionTitle
                    title="Technical Skills"
                    subtitle="Technologies and tools I work with"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.map((skill, index) => (
                        <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="flex flex-col items-center">
                                {/* Icon */}
                                <div className="relative w-20 h-20 mb-4">
                                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="32"
                                            fill="none"
                                            stroke="#f0f0f0"
                                            strokeWidth="6"
                                        />
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="32"
                                            fill="none"
                                            stroke="url(#gradient)"
                                            strokeWidth="6"
                                            strokeDasharray={`${2 * Math.PI * 32}`}
                                            strokeDashoffset={`${2 * Math.PI * 32 * (1 - skill.proficiency / 100)}`}
                                            strokeLinecap="round"
                                            className="transition-all duration-1000 ease-out"
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#169b46" />
                                                <stop offset="100%" stopColor="#50ca71" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <img
                                            src={skill.logoUrl}
                                            alt={skill.name}
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Skill name */}
                                <h4 className="font-bold text-gray-900 mb-1 text-center">
                                    {skill.name}
                                </h4>

                                {/* Percentage */}
                                <span className="text-[#169b46] font-semibold text-sm">
                                    {skill.proficiency}%
                                </span>
                            </div>
                        </div>
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
