import { useForm } from 'react-hook-form';
import { Section, Container, SectionTitle, Card, Button } from '../ui';

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
        <Section id="contact" background="white">
            <Container>
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Have a question or want to work together? Feel free to reach out!"
                />

                <div className="max-w-2xl mx-auto">
                    <Card>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    Name *
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50ca71] ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    {...register('name', {
                                        required: 'Name is required',
                                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                                    })}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email *
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50ca71] ${errors.email ? 'border-red-500' : 'border-gray-300'
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
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Subject Field */}
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                                    Subject *
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50ca71] ${errors.subject ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    {...register('subject', {
                                        required: 'Subject is required',
                                        minLength: { value: 3, message: 'Subject must be at least 3 characters' }
                                    })}
                                />
                                {errors.subject && (
                                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50ca71] resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    {...register('message', {
                                        required: 'Message is required',
                                        minLength: { value: 10, message: 'Message must be at least 10 characters' }
                                    })}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                disabled={isSubmitting}
                                className="w-full"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </Card>
                </div>
            </Container>
        </Section>
    );
};

export default Contact;
