import PropTypes from 'prop-types';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';

const Certifications = ({ data }) => {
    return (
        <Section id="certifications" background="gray">
            <Container>
                <SectionTitle
                    title="Certifications"
                    subtitle="Professional certifications and credentials"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((cert, index) => (
                        <div key={index} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#169b46] to-[#50ca71] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>

                            {/* Certificate icon badge */}
                            <div className="relative w-16 h-16 bg-gradient-to-br from-[#169b46] to-[#50ca71] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                                <FaCertificate className="w-8 h-8 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center leading-tight min-h-[3rem] flex items-center justify-center">
                                {cert.title}
                            </h3>

                            {/* View Button */}
                            <a
                                href={cert.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-[#169b46] to-[#50ca71] hover:from-[#50ca71] hover:to-[#169b46] text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-green-200"
                            >
                                <FaExternalLinkAlt className="w-4 h-4" />
                                View Certificate
                            </a>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

Certifications.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            certificateUrl: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Certifications;
