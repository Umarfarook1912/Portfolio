import PropTypes from 'prop-types';
import {
  FaArrowDown,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { SITE } from '../../constants/site';
import { ROUTES } from '../../constants/routes';
import { SOCIAL_LINKS } from '../../constants/social';

const SOCIALS = [
  { Icon: FaGithub, href: SOCIAL_LINKS.GITHUB, label: 'GitHub' },
  { Icon: FaLinkedin, href: SOCIAL_LINKS.LINKEDIN, label: 'LinkedIn' },
  { Icon: FaWhatsapp, href: SOCIAL_LINKS.WHATSAPP, label: 'WhatsApp' },
];

const Hero = ({ data }) => {
  const nameParts = data.name.split(' ');
  const firstName = nameParts[0];
  const restName = nameParts.slice(1).join(' ');

  return (
    <section
      id="home"
      className="hero-mesh relative flex min-h-[100svh] items-center overflow-hidden pb-12 pt-24 sm:pb-20 sm:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(17,24,39,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,0.035) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <div className="fade-up mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-accent/20 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-accent shadow-sm sm:mb-5 sm:text-xs">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="truncate">Available for freelance & full-time roles</span>
            </div>

            <p
              className="fade-up mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted sm:mb-3 sm:text-sm"
              style={{ animationDelay: '0.05s' }}
            >
              {data.title}
            </p>

            <h1
              className="fade-up text-[2.125rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem]"
              style={{ animationDelay: '0.1s' }}
            >
              {firstName}
              <br className="hidden sm:block" />
              <span className="text-accent"> {restName}</span>
            </h1>

            <p
              className="fade-up mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:mt-5 sm:text-lg lg:mx-0"
              style={{ animationDelay: '0.16s' }}
            >
              {data.description}
            </p>

            <div
              className="fade-up mt-6 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 lg:justify-start"
              style={{ animationDelay: '0.22s' }}
            >
              <Button
                href={SITE.RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full sm:w-auto"
              >
                <FaDownload className="h-4 w-4" aria-hidden />
                Download Resume
              </Button>
              <Button href={ROUTES.PROJECTS} variant="outline" size="lg" className="w-full sm:w-auto">
                View work
                <FaArrowDown className="h-3.5 w-3.5" aria-hidden />
              </Button>
            </div>

            <div
              className="fade-up mt-6 flex items-center justify-center gap-3 sm:mt-8 lg:justify-start"
              style={{ animationDelay: '0.28s' }}
            >
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div
            className="fade-up order-1 flex justify-center lg:order-2 lg:justify-end"
            style={{ animationDelay: '0.12s' }}
          >
            <div className="relative w-44 sm:w-72 md:w-80 lg:w-full lg:max-w-[22rem]">
              <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-3xl border border-accent/20 bg-accent/10 sm:block" aria-hidden />
              <div className="absolute -right-3 bottom-10 hidden h-20 w-20 rounded-full bg-accent/15 blur-xl sm:block" aria-hidden />

              <div className="relative overflow-hidden rounded-2xl border border-white bg-white shadow-[0_30px_80px_-36px_rgba(17,24,39,0.55)] sm:rounded-[1.75rem]">
                <div className="aspect-[4/5]">
                  <img
                    src={data.image || '/profile.jpg'}
                    alt={data.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent p-3 pt-12 sm:p-4 sm:pt-16">
                  <p className="text-sm font-semibold text-white">{data.name}</p>
                  <p className="text-xs text-white/75">{data.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default Hero;
