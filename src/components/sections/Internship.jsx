import PropTypes from 'prop-types';
import { FaBuilding, FaCalendarAlt, FaLaptopCode } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Internship = ({ data }) => {
    return (
        <Section id="internship" background="white">
            <Container>
                <SectionTitle
                    title="Internships"
                    subtitle="My internship experiences and learnings"
                />

                <div className="max-w-3xl mx-auto space-y-6">
                    {data.map((internship, index) => {
                        const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
                        return (
                            <div ref={ref} key={index} className={`group relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-700 border-l-4 border-[#169b46] hover:border-[#50ca71] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                                {/* Timeline dot */}
                                <div className="absolute -left-3 top-8 w-6 h-6 bg-[#169b46] rounded-full border-4 border-white group-hover:scale-125 transition-transform duration-300"></div>

                                <div className="flex flex-col gap-3 mb-4">
                                    <div className="flex-1">
                                        {/* Icon and Domain */}
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-gradient-to-br from-[#169b46] to-[#50ca71] rounded-lg flex items-center justify-center">
                                                <FaLaptopCode className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                                                {internship.domain}
                                            </h3>
                                        </div>

                                        {/* Company */}
                                        <div className="flex items-center text-[#169b46] font-semibold mb-2">
                                            <FaBuilding className="w-4 h-4 mr-2" />
                                            <span>{internship.company}</span>
                                        </div>
                                    </div>

                                    {/* Date */}
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                                        <span className="text-xs sm:text-sm">{internship.startDate} - {internship.endDate}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                {internship.projectDescription && (
                                    <p className="text-gray-600 leading-relaxed pl-4">
                                        {internship.projectDescription}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
};

Internship.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            domain: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
            projectDescription: PropTypes.string,
        })
    ).isRequired,
};

export default Internship;
