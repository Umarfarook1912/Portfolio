import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Certifications = ({ data }) => {
    return (
        <Section id="certifications" background="gray">
            <Container>
                <SectionTitle
                    title="Certifications"
                    subtitle="Professional certifications and credentials"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((cert, index) => {
                        const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
                        return (
                            <div ref={ref} key={index} className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                                {/* Background decoration */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#169b46] to-[#50ca71] opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#50ca71] to-[#169b46] opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity"></div>

                                {/* Certificate Details */}
                                <div className="relative p-6 flex flex-col flex-1">
                                    {/* Icon Badge */}
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#169b46] to-[#50ca71] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-200">
                                        <FaCertificate className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{cert.title}</h3>
                                    {cert.description && (
                                        <p className="text-gray-600 mb-6 leading-relaxed text-sm min-h-[4rem]">
                                            {cert.description}
                                        </p>
                                    )}

                                    {/* View Certificate Button */}
                                    <a
                                        href={cert.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-40 px-3 py-2 bg-gradient-to-r from-[#169b46] to-[#50ca71] hover:from-[#50ca71] hover:to-[#169b46] text-white rounded-lg transition-all duration-300 text-sm font-semibold shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300 mt-auto"
                                    >
                                        <FaExternalLinkAlt className="w-4 h-4" />
                                        View Certificate
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
};

Certifications.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            certificateUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string,
        })
    ).isRequired,
};

export default Certifications;
