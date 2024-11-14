import { useState } from 'react';
import NavBar from '../Nav';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Support() {
    // State for loading and form submission result
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Formik setup
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            message: Yup.string().required('Message is required'),
        }),
        // eslint-disable-next-line no-unused-vars
        onSubmit: async (values) => {
            setLoading(true); // Show loading spinner
            setSubmitted(false); // Reset submission state
            try {
                // Simulate an API call with a timeout
                await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
                setSubmitted(true); // Set the form as successfully submitted
            } catch (error) {
                console.error('Form submission failed:', error);
            } finally {
                setLoading(false); // Stop loading spinner
            }
        },
    });

    return (
        <div>
            <NavBar />
            <div className="p-3 lg:grid grid-cols-2  flex flex-col">
                <section className='text-center leading-5'>
                    <h1 className="text-[#30005A] md:text-[30px]">Help Us Shape the Future of Storytelling!</h1>
                    <img src="/support.png" alt="Support" className="w-full mt-1" />
                    <p>Reach out to us today and let us create something amazing—your voice matters</p>
                    <p>Contact Us: <a href="mailto:mcgarretronald@gmail.com" className="text-[#30005A] cursor-pointer">SupportScriptNest@gmail.com</a></p>
                    <p>We are here to listen and grow with you.</p>
                </section>

                {/* Second part: Form */}
                <section className="mt-10">
                    <form onSubmit={formik.handleSubmit} className="flex flex-col bg-[#000000] bg-opacity-10 rounded-xl px-10 py-5 shadow-xl">
                        <h2 className="text-lg font-semibold text-[#212B27] text-center mb-5">Send Us a Message</h2>

                        {/* Name Field */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className={`w-full px-3 rounded-xl py-3 my-2 border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 outline-none`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div className="text-red-600 text-sm mt-1">{formik.errors.name}</div>
                        )}

                        {/* Email Field */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            className={`w-full px-3 rounded-xl py-3 my-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 outline-none`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
                        )}

                        {/* Message Field */}
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            className={`w-full px-3 rounded-xl py-3 my-2 border ${formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 outline-none`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                        />
                        {formik.touched.message && formik.errors.message && (
                            <div className="text-red-600 text-sm mt-1">{formik.errors.message}</div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[#30005A] text-white w-full px-3 rounded-xl py-3 my-3 hover:bg-[#4A007A] transition-all duration-300"
                            disabled={loading || submitted}
                        >
                            {loading ? (
                                <AiOutlineLoading3Quarters className="animate-spin h-5 w-5 mr-2" />
                            ) : null}
                            {submitted ? 'Thanks for the Feedback! 🎉' : loading ? 'Submitting...' : 'Submit Message'}
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
}
