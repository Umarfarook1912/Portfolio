import PropTypes from 'prop-types';
import { Section, Container, SectionTitle, Card } from '../ui';

const Education = ({ data }) => {
    return (
        <Section id="education" background="gray">
            <Container>
                <SectionTitle
                    title="Education"
                    subtitle="My academic background"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.map((education, index) => (
                        <Card key={index} hover className="">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {education.degree}
                            </h3>
                            <p className="text-lg text-[#169b46] font-medium mb-2">
                                {education.college}
                            </p>
                            <p className="text-gray-600">
                                {education.year}
                            </p>
                        </Card>
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
