import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Container from '../ui/Container';
import { SOCIAL_LINKS } from '../../constants/social';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialIcons = [
        { Icon: FaGithub, href: SOCIAL_LINKS.GITHUB, label: 'GitHub' },
        { Icon: FaLinkedin, href: SOCIAL_LINKS.LINKEDIN, label: 'LinkedIn' },
        { Icon: FaFacebook, href: SOCIAL_LINKS.FACEBOOK, label: 'Facebook' },
        { Icon: FaWhatsapp, href: SOCIAL_LINKS.WHATSAPP, label: 'WhatsApp' },
        { Icon: FaEnvelope, href: SOCIAL_LINKS.EMAIL, label: 'Email' },
    ];

    const quickLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Skills', href: '#technical-skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#work-experience' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Contact', href: '#contact' },
    ];


    return (
        <footer className="bg-[#45bf67] text-white py-12 border-t border-[#50ca71]">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">About Umar Farook J</h3>
                        <p className="text-white text-sm leading-relaxed mb-4">
                            Full Stack Developer passionate about building modern web applications.
                            Currently working as a Software Engineer at Sukiran Solutions,
                            with expertise in MERN stack and experience as a Co-founder of StubLab.
                        </p>
                        <div className="flex flex-col space-y-2 text-sm">
                            <a href="mailto:umarfarookj06@gmail.com" className="flex items-center text-white hover:text-gray-200 transition-colors">
                                <FaEnvelope className="mr-2" />
                                umarfarookj06@gmail.com
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=7871694931" className="flex items-center text-white hover:text-gray-200 transition-colors">
                                <FaPhone className="mr-2" />
                                +91 78716 94931
                            </a>
                            <div className="flex items-center text-white">
                                <FaMapMarkerAlt className="mr-2" />
                                Dindigul, Tamil Nadu
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white hover:text-gray-200 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Connect with Me</h3>
                        <div className="flex items-center md:items-start space-x-4">
                            {socialIcons.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white opacity-30 my-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <p className="text-white text-sm">
                            &copy; {currentYear} <span className="font-semibold">Umar Farook J</span>. All rights reserved.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
