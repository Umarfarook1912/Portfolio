import { useForm } from 'react-hook-form';
import { FaPaperPlane, FaUser, FaEnvelope, FaEdit, FaCommentDots } from 'react-icons/fa';
import { Section, Container, SectionTitle } from '../ui';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log('Form data:', data);
            alert('Message sent successfully!');
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <Section id="contact" background="gray">
            <Container>
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Have a question or want to work together? I'd love to hear from you!"
                />

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border border-gray-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                                    <FaUser className="w-4 h-4 text-[#169b46]" />
                                    Name *
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your full name"
                                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#50ca71] transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-[#50ca71]'
                                        }`}
                                    {...register('name', {
                                        required: 'Name is required',
                                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                                    })}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                                        <span>⚠️</span> {errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                                    <FaEnvelope className="w-4 h-4 text-[#169b46]" />
                                    Email *
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#50ca71] transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-[#50ca71]'
                                        }`}
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                                        <span>⚠️</span> {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Subject Field */}
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                                    <FaEdit className="w-4 h-4 text-[#169b46]" />
                                    Subject *
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="What's this about?"
                                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#50ca71] transition-all ${errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-[#50ca71]'
                                        }`}
                                    {...register('subject', {
                                        required: 'Subject is required',
                                        minLength: { value: 3, message: 'Subject must be at least 3 characters' }
                                    })}
                                />
                                {errors.subject && (
                                    <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                                        <span>⚠️</span> {errors.subject.message}
                                    </p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                                    <FaCommentDots className="w-4 h-4 text-[#169b46]" />
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="Tell me about your project or inquiry..."
                                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#50ca71] resize-none transition-all ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-[#50ca71]'
                                        }`}
                                    {...register('message', {
                                        required: 'Message is required',
                                        minLength: { value: 10, message: 'Message must be at least 10 characters' }
                                    })}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                                        <span>⚠️</span> {errors.message.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-[#169b46] to-[#50ca71] hover:from-[#50ca71] hover:to-[#169b46] text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-green-100 hover:shadow-xl hover:shadow-green-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 mx-auto"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Contact;
