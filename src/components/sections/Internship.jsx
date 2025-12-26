import PropTypes from 'prop-types';
import { Section, Container, SectionTitle, Card } from '../ui';

const Internship = ({ data }) => {
    return (
        <Section id="internship" background="gray">
            <Container>
                <SectionTitle
                    title="Internships"
                    subtitle="My internship experiences"
                />

                <div className="space-y-6">
                    {data.map((internship, index) => (
                        <Card key={index} hover className="">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        {internship.domain}
                                    </h3>
                                    <p className="text-lg text-[#169b46] font-medium">
                                        {internship.company}
                                    </p>
                                </div>
                                <p className="text-gray-600 mt-2 md:mt-0">
                                    {internship.startDate} - {internship.endDate}
                                </p>
                            </div>

                            {internship.projectDescription && (
                                <p className="text-gray-700 leading-relaxed">
                                    {internship.projectDescription}
                                </p>
                            )}
                        </Card>
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
