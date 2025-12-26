import PropTypes from 'prop-types';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Education = ({ data }) => {
    return (
        <Section id="education" background="white">
            <Container>
                <SectionTitle
                    title="Education"
                    subtitle="My academic background and qualifications"
                />

                <div className="max-w-4xl mx-auto mt-6">
                    <div className="relative ml-6 sm:ml-8 md:ml-12">
                        {/* vertical line for timeline (visible on md+) */}
                        <div className="hidden md:block absolute left-2 top-6 bottom-6 w-0.5 bg-gray-200"></div>

                        <div className="space-y-8">
                            {data.map((education, index) => {
                                const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
                                return (
                                    <article
                                        ref={ref}
                                        key={index}
                                        className={`relative bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-lg transition-all duration-700 pl-10 sm:pl-12 md:pl-16 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                                        aria-labelledby={`edu-${index}-title`}
                                        style={{ transitionDelay: `${index * 150}ms` }}
                                    >
                                        {/* marker */}
                                        <div className="absolute -left-1.5 top-5 sm:left-0 sm:top-6 md:left-2 md:top-6 w-3 h-3 md:w-4 md:h-4 bg-[#169b46] rounded-full border-4 border-white shadow" />

                                        <div className="flex items-start gap-4">
                                            {/* optional logo or icon */}
                                            {education.logoUrl ? (
                                                <img
                                                    src={education.logoUrl}
                                                    alt={`${education.college} logo`}
                                                    className="w-10 h-10 rounded-md object-contain flex-shrink-0"
                                                />
                                            ) : (
                                                <div className="w-10 h-10 bg-[#f1fdf4] text-[#169b46] rounded-md flex items-center justify-center flex-shrink-0">
                                                    <FaGraduationCap className="w-5 h-5" />
                                                </div>
                                            )}

                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <span className="inline-block bg-[#eaf7ef] text-[#169b46] px-3 py-0.5 rounded-md text-sm font-semibold">{education.year}</span>
                                                        <h3 id={`edu-${index}-title`} className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">{education.degree}</h3>
                                                    </div>

                                                    {education.percentage && (
                                                        <div className="text-sm font-semibold text-[#169b46]">{education.percentage}</div>
                                                    )}
                                                </div>

                                                <p className="text-gray-600 mt-2 text-sm sm:text-base">{education.college}</p>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

Education.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            college: PropTypes.string.isRequired,
            degree: PropTypes.string.isRequired,
            year: PropTypes.string.isRequired,
            percentage: PropTypes.string,
        })
    ).isRequired,
};

export default Education;
