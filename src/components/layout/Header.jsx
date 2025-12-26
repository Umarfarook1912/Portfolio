import { useState, useEffect } from 'react';
import Container from '../ui/Container';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { label: 'About', href: '#home' },
        { label: 'Services', href: '#experience' },
        { label: 'Resume', href: '#education' },
        { label: 'Projects', href: '#projects' },
        { label: 'Testimonials', href: '#achievements' },
        { label: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-white/90 backdrop-blur-sm py-6'
                }`}
        >
            <Container>
                <nav className="flex items-center justify-between ">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="text-2xl font-bold text-gray-800"
                    >
                        <span className="text-gray-800 text-md">Umar Farook</span>{' '}
                        <span className="text-[#169b46] text-md">J</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-600 hover:text-[#169b46] transition-colors text-lg font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Download CV Button */}
                    <div className="hidden md:block">
                        <a
                            href="/resume/Umar%20Farook%20J_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-2.5 bg-[#169b46] hover:bg-[#50ca71] text-white rounded-full font-medium transition-all duration-300 text-md shadow-lg shadow-green-200"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download CV
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-gray-700 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block py-2 text-gray-600 hover:text-[#169b46] transition-colors font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="/resume/Umar%20Farook%20J_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-4 px-6 py-2.5 bg-[#169b46] hover:bg-[#50ca71] text-white rounded-full font-medium transition-all duration-300 text-sm text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Download CV
                        </a>
                    </div>
                )}
            </Container>
        </header>
    );
};

export default Header;
