import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Section, Container, SectionTitle } from '../ui';

const TechnicalSkills = ({ data }) => {
    const [hovered, setHovered] = useState(null);
    const [display, setDisplay] = useState({});
    const animRefs = useRef({});
    const R = 40;
    const C = 2 * Math.PI * R;

    return (
        <Section id="skills" background="gray">
            <Container>
                <SectionTitle
                    title="Technical Skills"
                    subtitle="Technologies and tools I work with"
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {data.map((skill, index) => {
                        const shownPercent = display[index] || 0;
                        const dashOffset = C * (1 - shownPercent / 100);

                        const handleEnter = () => {
                            setHovered(index);

                            // cancel any existing animation for this index
                            if (animRefs.current[index]) cancelAnimationFrame(animRefs.current[index]);

                            const start = { time: null };

                            const duration = 800; // ms

                            const step = (ts) => {
                                if (!start.time) start.time = ts;
                                const elapsed = ts - start.time;
                                const progress = Math.min(elapsed / duration, 1);
                                const value = Math.round(progress * skill.proficiency);
                                setDisplay((d) => ({ ...d, [index]: value }));
                                if (progress < 1) {
                                    animRefs.current[index] = requestAnimationFrame(step);
                                }
                            };

                            animRefs.current[index] = requestAnimationFrame(step);
                        };

                        const handleLeave = () => {
                            setHovered(null);
                            if (animRefs.current[index]) cancelAnimationFrame(animRefs.current[index]);
                            setDisplay((d) => ({ ...d, [index]: 0 }));
                        };

                        return (
                            <div
                                key={index}
                                onMouseEnter={handleEnter}
                                onMouseLeave={handleLeave}
                                className="group relative bg-white rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#169b46] to-[#50ca71] opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity pointer-events-none"></div>

                                <div className="relative flex flex-col items-center">
                                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-3 sm:mb-4">
                                        <svg className={`w-24 h-24 sm:w-28 sm:h-28 transform -rotate-90 ${hovered === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r={R} fill="none" stroke="#f0f0f0" strokeWidth="8" />
                                            <defs>
                                                <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#169b46" />
                                                    <stop offset="100%" stopColor="#50ca71" />
                                                </linearGradient>
                                            </defs>
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r={R}
                                                fill="none"
                                                stroke={`url(#grad-${index})`}
                                                strokeWidth="8"
                                                strokeDasharray={C}
                                                strokeDashoffset={dashOffset}
                                                strokeLinecap="round"
                                            />
                                        </svg>

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                                <img src={skill.logoUrl} alt={skill.name} className="w-9 h-9 sm:w-12 sm:h-12 object-contain" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Percentage shown under the logo when hovered */}
                                    <div className="mt-3 h-6">
                                        <div className={`text-sm font-semibold text-gray-900 text-center ${hovered === index ? 'opacity-100' : 'opacity-0'}`}>{shownPercent}%</div>
                                    </div>

                                    <h4 className="font-bold text-gray-900 mb-1 text-center text-sm sm:text-base">{skill.name}</h4>
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
            proficiency: PropTypes.number.isRequired,
            category: PropTypes.string,
        })
    ).isRequired,
};

export default TechnicalSkills;
