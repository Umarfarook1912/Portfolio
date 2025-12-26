import { useState } from 'react';
import PropTypes from 'prop-types';
import { Section, Container, SectionTitle } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TechnicalSkills = ({ data }) => {
    const [hovered, setHovered] = useState(null);

    return (
        <Section id="skills" background="gray">
            <Container>
                <SectionTitle
                    title="Technical Skills"
                    subtitle="Technologies and tools I work with"
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {data.map((skill, index) => {
                        const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

                        return (
                            <div
                                ref={ref}
                                key={index}
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                                className={`group relative bg-white rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ animationDelay: `${index * 50}ms`, transitionDelay: `${index * 5}ms` }}
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#169b46] to-[#50ca71] opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity pointer-events-none"></div>

                                <div className="relative flex flex-col items-center">
                                    <div className="relative mb-3 sm:mb-4">
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center transition-all duration-300">
                                            <img src={skill.logoUrl} alt={skill.name} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
                                        </div>

                                    </div>

                                    <h4 className="font-bold text-gray-900 text-center text-sm sm:text-base">{skill.name}</h4>

                                    {/* Category tag */}
                                    {skill.category && (
                                        <span className="mt-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                            {skill.category}
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
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
            category: PropTypes.string,
        })
    ).isRequired,
};

export default TechnicalSkills;
