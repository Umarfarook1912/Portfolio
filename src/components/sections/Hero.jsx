import PropTypes from 'prop-types';
import Container from '../ui/Container';

const Hero = ({ data }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
            {/* Wavy Green Shape Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Bottom left wave */}
                <svg
                    className="absolute bottom-0 left-0 w-2/3 h-auto opacity-90"
                    viewBox="0 0 800 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 400L0 200C100 150 200 180 300 200C400 220 500 180 600 200C700 220 750 250 800 280L800 400L0 400Z"
                        fill="#169b46"
                    />
                    <path
                        d="M0 400L0 250C120 200 220 230 320 250C420 270 520 230 620 250C720 270 770 300 820 330L820 400L0 400Z"
                        fill="#50ca71"
                        opacity="0.7"
                    />
                </svg>

                {/* Right side circular organic shape */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px]">
                    <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M300 50C400 50 500 100 550 200C600 300 580 420 500 500C420 580 300 600 200 550C100 500 40 400 50 280C60 160 200 50 300 50Z"
                            fill="#50ca71"
                            opacity="0.3"
                        />
                        <path
                            d="M320 80C410 80 490 120 530 210C570 300 560 400 490 470C420 540 310 560 220 520C130 480 80 390 85 290C90 190 230 80 320 80Z"
                            fill="#169b46"
                            opacity="0.5"
                        />
                    </svg>
                </div>
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content - Left Side */}
                    <div className="order-2 lg:order-1">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                            <span className="text-gray-900">{data.name.split(' ')[0]}</span>{' '}
                            <span className="text-[#169b46]">{data.name.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-[#169b46] font-semibold mb-6">
                            {data.title}
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                            {data.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center px-8 py-3.5 bg-[#169b46] hover:bg-[#50ca71] text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 transform hover:-translate-y-0.5"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Resume
                            </a>
                            <a
                                href="#projects"
                                className="inline-flex items-center px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-800 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 transform hover:-translate-y-0.5"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                My Work
                            </a>
                        </div>
                    </div>

                    {/* Image - Right Side */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md lg:max-w-lg">
                            {/* Circular frame for image */}
                            <div className="relative z-10">
                                <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gray-100">
                                    <img
                                        src={data.image || '/profile.jpg'}
                                        alt={data.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Decorative green circles */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#50ca71] rounded-full opacity-40 blur-xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#169b46] rounded-full opacity-30 blur-2xl"></div>
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
