import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Container from '../ui/Container';
import { SOCIAL_LINKS } from '../../constants/social';
import { FOOTER_LINKS } from '../../constants/routes';
import { SITE } from '../../constants/site';

const SOCIAL_ICONS = [
  { Icon: FaGithub, href: SOCIAL_LINKS.GITHUB, label: 'GitHub' },
  { Icon: FaLinkedin, href: SOCIAL_LINKS.LINKEDIN, label: 'LinkedIn' },
  { Icon: FaFacebook, href: SOCIAL_LINKS.FACEBOOK, label: 'Facebook' },
  { Icon: FaWhatsapp, href: SOCIAL_LINKS.WHATSAPP, label: 'WhatsApp' },
  { Icon: FaEnvelope, href: SOCIAL_LINKS.EMAIL, label: 'Email' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-footer text-white">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold">
              Umar Farook <span className="text-accent-light">J</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              {SITE.FOOTER_BLURB}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/60">
              <FaMapMarkerAlt className="h-3.5 w-3.5 text-accent-light" aria-hidden />
              {SITE.LOCATION}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Navigate
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-accent-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Connect
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {SOCIAL_ICONS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/80 transition-colors hover:border-accent-light hover:text-accent-light"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50 sm:text-left">
          © {year} {SITE.BRAND}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
