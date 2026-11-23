import PropTypes from 'prop-types';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import { Section, Container, FadeIn } from '../ui';
import { SECTION_COPY } from '../../constants/site';

const Education = ({ data }) => (
  <Section id="education" background="gray">
    <Container>
      <FadeIn className="mb-10 md:mb-14">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-accent">
          Academic path
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-4xl">
          {SECTION_COPY.education.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted sm:text-lg">
          {SECTION_COPY.education.subtitle}
        </p>
      </FadeIn>

      <div className="relative mx-auto max-w-3xl">
        <div
          className="absolute bottom-3 left-[1.35rem] top-3 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent sm:left-6"
          aria-hidden
        />

        <div className="space-y-5">
          {data.map((education, index) => (
            <FadeIn key={`${education.degree}-${index}`} delay={index * 90}>
              <article className="relative grid grid-cols-[2.75rem_1fr] gap-3 sm:grid-cols-[3.25rem_1fr] sm:gap-5">
                <div className="relative z-10 flex justify-center pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-surface bg-accent text-white shadow-md shadow-accent/25 sm:h-12 sm:w-12">
                    <FaGraduationCap className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                  </span>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 transition-colors hover:border-accent/35 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
                      {education.year}
                    </span>
                    {education.percentage && (
                      <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-ink">
                        {education.percentage}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-ink sm:text-xl">{education.degree}</h3>
                  <p className="mt-2 flex items-start gap-2 text-sm text-muted sm:text-base">
                    <FaMapMarkerAlt className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                    <span>{education.college}</span>
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  </Section>
);

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      college: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      percentage: PropTypes.string,
      logoUrl: PropTypes.string,
    })
  ).isRequired,
};

export default Education;
