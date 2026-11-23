import {
  FaBriefcase,
  FaGlobe,
  FaMobileAlt,
  FaServer,
  FaSearch,
  FaCodeBranch,
  FaComments,
  FaShieldAlt,
  FaShoppingBag,
  FaArrowRight,
} from 'react-icons/fa';
import { Section, Container, FadeIn } from '../ui';
import { PORTFOLIO_SERVICES } from '../../constants/services';
import { ROUTES } from '../../constants/routes';

const ICON_MAP = {
  Briefcase: FaBriefcase,
  Globe: FaGlobe,
  Smartphone: FaMobileAlt,
  Server: FaServer,
  Search: FaSearch,
  GitBranch: FaCodeBranch,
  MessageCircle: FaComments,
  ShieldCheck: FaShieldAlt,
  ShoppingBag: FaShoppingBag,
};

const Services = () => (
  <Section id="services" background="white">
    <Container>
      <FadeIn className="mb-6 sm:mb-10">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-accent sm:text-[10px]">
          What I offer
        </p>
        <h2 className="text-2xl font-bold leading-tight text-ink sm:text-3xl md:text-4xl">
          Everything you need to build & grow
        </h2>
      </FadeIn>

      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {PORTFOLIO_SERVICES.map((service, index) => {
          const Icon = ICON_MAP[service.icon] || FaBriefcase;
          return (
            <FadeIn key={service.id} delay={index * 40}>
              <article className="group flex h-full min-w-0 flex-col rounded-xl border border-border bg-white p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_32px_rgba(22,155,70,0.14)] sm:p-6">
                <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors group-hover:border-accent/40 group-hover:bg-accent-soft sm:mb-4 sm:h-10 sm:w-10">
                  <Icon className="h-4 w-4 text-ink transition-colors group-hover:text-accent sm:h-5 sm:w-5" />
                </div>
                <h3 className="mb-1.5 text-xs font-bold leading-snug text-ink sm:mb-2 sm:text-sm">
                  {service.title}
                </h3>
                <p className="mb-3 flex-1 text-[11px] leading-relaxed text-muted line-clamp-3 sm:mb-4 sm:text-xs sm:line-clamp-none">
                  {service.description}
                </p>
                <a
                  href={ROUTES.CONTACT}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent transition-all group-hover:gap-2 sm:text-xs"
                >
                  Let’s talk <FaArrowRight className="h-2.5 w-2.5" />
                </a>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </Container>
  </Section>
);

export default Services;
