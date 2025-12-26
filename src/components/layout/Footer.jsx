import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Container from '../ui/Container';
import { SOCIAL_LINKS } from '../../constants/social';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialIcons = [
        { Icon: FaGithub, href: SOCIAL_LINKS.GITHUB, label: 'GitHub' },
        { Icon: FaLinkedin, href: SOCIAL_LINKS.LINKEDIN, label: 'LinkedIn' },
        { Icon: FaTwitter, href: SOCIAL_LINKS.TWITTER, label: 'Twitter' },
        { Icon: FaEnvelope, href: SOCIAL_LINKS.EMAIL, label: 'Email' },
    ];

    return (
        <footer className="bg-gray-900 text-white py-8">
            <Container>
                <div className="flex flex-col items-center space-y-4">
                    {/* Social Links */}
                    <div className="flex space-x-6">
                        {socialIcons.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#50ca71] transition-colors duration-300"
                                aria-label={label}
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-gray-400 text-sm">
                        <p>&copy; {currentYear} All rights reserved.</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
