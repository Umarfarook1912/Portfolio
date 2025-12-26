import PropTypes from 'prop-types';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';

const Education = ({ data }) => {
    return (
        <Section id="education" background="white">
            <Container>
                <SectionTitle
                    title="Education"
                    subtitle="My academic background and qualifications"
                />

                <div className="max-w-4xl mx-auto mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.map((education, index) => (
                            <article
                                key={index}
                                className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300"
                                aria-labelledby={`edu-${index}-title`}
                            >
                                <div className="flex items-start gap-4">
                                    {/* optional logo or icon */}
                                    {education.logoUrl ? (
                                        <img
                                            src={education.logoUrl}
                                            alt={`${education.college} logo`}
                                            className="w-12 h-12 rounded-md object-contain flex-shrink-0"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 bg-[#f1fdf4] text-[#169b46] rounded-md flex items-center justify-center flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.5a12.08 12.08 0 01-6 1.5c-2.21 0-4.28-.56-6-1.5A12.083 12.083 0 016 10.578L12 14z" />
                                            </svg>
                                        </div>
                                    )}

                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="inline-block bg-[#eaf7ef] text-[#169b46] px-3 py-0.5 rounded-md text-sm font-semibold">{education.year}</span>
                                                <h3 id={`edu-${index}-title`} className="text-md md:text-lg font-semibold text-gray-900">{education.degree}</h3>
                                            </div>

                                            {education.percentage && (
                                                <div className="text-sm font-semibold text-[#169b46]">{education.percentage}</div>
                                            )}
                                        </div>

                                        <p className="text-gray-600 mt-2">{education.college}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
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
