import PropTypes from 'prop-types';
import { Section, Container, FadeIn, CredentialCard } from '../ui';
import { SECTION_COPY } from '../../constants/site';

const Achievements = ({ data }) => (
  <Section id="achievements" background="white">
    <Container>
      <FadeIn className="mb-10 md:mb-14">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-accent">
          Recognition
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {SECTION_COPY.achievements.title}
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">
          {SECTION_COPY.achievements.subtitle}
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        {data.map((achievement, index) => (
          <CredentialCard
            key={`${achievement.title}-${index}`}
            title={achievement.title}
            description={achievement.description}
            href={achievement.certificateUrl}
            imageUrl={achievement.imageUrl}
            variant="achievement"
            index={index}
            delay={index * 70}
          />
        ))}
      </div>
    </Container>
  </Section>
);

Achievements.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      certificateUrl: PropTypes.string,
      imageUrl: PropTypes.string,
    })
  ).isRequired,
};

export default Achievements;
