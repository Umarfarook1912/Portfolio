import PropTypes from 'prop-types';
import { FaBuilding, FaCalendarAlt, FaLaptopCode } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';

const Internship = ({ data }) => {
    return (
        <Section id="internship" background="white">
            <Container>
                <SectionTitle
                    title="Internships"
                    subtitle="My internship experiences and learnings"
                />

                <div className="max-w-3xl mx-auto space-y-6">
                    {data.map((internship, index) => (
                        <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-[#169b46] hover:border-[#50ca71]">
                            {/* Timeline dot */}
                            <div className="absolute -left-3 top-8 w-6 h-6 bg-[#169b46] rounded-full border-4 border-white group-hover:scale-125 transition-transform duration-300"></div>

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div className="flex-1">
                                    {/* Icon and Domain */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#169b46] to-[#50ca71] rounded-lg flex items-center justify-center">
                                            <FaLaptopCode className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">
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
                                <div className="flex items-center text-gray-500 text-sm md:ml-4">
                                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                                    <span>{internship.startDate} - {internship.endDate}</span>
                                </div>
                            </div>

                            {/* Description */}
                            {internship.projectDescription && (
                                <p className="text-gray-600 leading-relaxed pl-4">
                                    {internship.projectDescription}
                                </p>
                            )}
                        </div>
                    ))}
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
