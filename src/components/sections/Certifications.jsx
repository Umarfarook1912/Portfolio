import PropTypes from 'prop-types';
import { Section, Container, FadeIn, CredentialCard } from '../ui';
import { SECTION_COPY } from '../../constants/site';

const Certifications = ({ data }) => (
  <Section id="certifications" background="gray">
    <Container>
      <FadeIn className="mb-10 md:mb-14">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-accent">
          Credentials
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-4xl">
          {SECTION_COPY.certifications.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted sm:text-lg">
          {SECTION_COPY.certifications.subtitle}
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-6">
        {data.map((cert, index) => (
          <CredentialCard
            key={`${cert.title}-${index}`}
            title={cert.title}
            description={cert.description}
            href={cert.certificateUrl}
            imageUrl={cert.imageUrl}
            variant="certificate"
            index={index}
            delay={index * 70}
          />
        ))}
      </div>
    </Container>
  </Section>
);

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
