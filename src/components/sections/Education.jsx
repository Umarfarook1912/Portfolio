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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {data.map((education, index) => (
                        <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#50ca71] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>

                            {/* Icon */}
                            <div className="relative w-14 h-14 bg-gradient-to-br from-[#169b46] to-[#50ca71] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <FaGraduationCap className="w-7 h-7 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                                {education.degree}
                            </h3>
                            <p className="text-[#169b46] font-semibold mb-3">
                                {education.college}
                            </p>
                            <div className="flex items-center text-gray-500 text-sm">
                                <FaCalendarAlt className="w-4 h-4 mr-2" />
                                <span>{education.year}</span>
                            </div>
                        </div>
                    ))}
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
        })
    ).isRequired,
};

export default Education;
