import { useForm } from 'react-hook-form';
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaEdit,
  FaCommentDots,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { Section, Container, FadeIn, Button } from '../ui';
import { getApiBase } from '../../utils/api';
import { successAlert, errorAlert } from '../../utils/alert';
import { SECTION_COPY, SITE } from '../../constants/site';
import { SOCIAL_LINKS } from '../../constants/social';

const fieldClass = (hasError) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-ink transition-colors placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 ${
    hasError ? 'border-red-400' : 'border-border hover:border-accent/40'
  }`;

const CONTACT_LINKS = [
  { Icon: FaEnvelope, href: SOCIAL_LINKS.EMAIL, label: 'Email', value: 'umarfarookj06@gmail.com' },
  { Icon: FaWhatsapp, href: SOCIAL_LINKS.WHATSAPP, label: 'WhatsApp', value: '+91 78716 94931' },
  { Icon: FaGithub, href: SOCIAL_LINKS.GITHUB, label: 'GitHub', value: 'Umarfarook1912' },
  { Icon: FaLinkedin, href: SOCIAL_LINKS.LINKEDIN, label: 'LinkedIn', value: 'Umar Farook J' },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const base = getApiBase();
      const resp = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err?.error || 'Failed to send message');
      }

      reset();
      await successAlert('Message sent', 'Thank you — I will get back to you soon.');
    } catch (error) {
      console.error('Error sending contact message:', error);
      await errorAlert('Failed to send', 'Please try again or contact me directly.');
    }
  };

  return (
    <Section id="contact" background="white" className="!bg-gradient-to-b from-surface via-white to-white">
      <Container>
        <FadeIn className="mb-10 text-center md:mb-14">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            {SECTION_COPY.contact.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted sm:text-lg">
            {SECTION_COPY.contact.subtitle}
          </p>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <FadeIn>
            <aside className="h-full overflow-hidden rounded-2xl bg-footer p-5 text-white sm:p-8">
              <h3 className="text-xl font-bold">Let’s build something useful</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Tell me about your product, freelance need, or role — I’ll reply with next steps.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
                <FaMapMarkerAlt className="h-3.5 w-3.5 text-accent-light" aria-hidden />
                {SITE.LOCATION}
              </div>

              <ul className="mt-8 space-y-3">
                {CONTACT_LINKS.map(({ Icon, href, label, value }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 transition-colors hover:border-accent-light/40 hover:bg-white/10"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent-light">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/45">
                          {label}
                        </span>
                        <span className="block truncate text-sm font-medium text-white">{value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </FadeIn>

          <FadeIn delay={80}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-8 md:p-10"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
                    <FaUser className="h-3.5 w-3.5 text-accent" aria-hidden />
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className={fieldClass(!!errors.name)}
                    {...register('name', {
                      required: 'Name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' },
                    })}
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
                    <FaEnvelope className="h-3.5 w-3.5 text-accent" aria-hidden />
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className={fieldClass(!!errors.email)}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
                  <FaEdit className="h-3.5 w-3.5 text-accent" aria-hidden />
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  className={fieldClass(!!errors.subject)}
                  {...register('subject', {
                    required: 'Subject is required',
                    minLength: { value: 3, message: 'Subject must be at least 3 characters' },
                  })}
                />
                {errors.subject && <p className="mt-1.5 text-sm text-red-500">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
                  <FaCommentDots className="h-3.5 w-3.5 text-accent" aria-hidden />
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or inquiry..."
                  className={`${fieldClass(!!errors.message)} resize-none`}
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' },
                  })}
                />
                {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto" size="lg">
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane className="h-4 w-4" aria-hidden />
                    Send message
                  </>
                )}
              </Button>
            </form>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
