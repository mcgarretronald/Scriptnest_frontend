import { useState } from 'react';
import NavBar from '../Nav';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import * as Yup from 'yup';
import {
    AiOutlineLoading3Quarters,
    AiOutlineEye,
    AiOutlineEyeInvisible,
} from 'react-icons/ai';
import { loginUser } from '../../utils/loginUser';
import ErrorMessage from './Error';

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formStatus, setFormStatus] = useState(null); // Holds error/success message
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            setFormStatus(null); // Reset form status on submit
            try {
                const response = await loginUser(values.email, values.password);

                if (response.status === 'success') {
                    setFormStatus({ type: 'success', message: 'Login successful! Redirecting...' });
                    
                    // Save credentials if "Remember Me" is checked
                    if (rememberMe) {
                        localStorage.setItem('userEmail', values.email);
                        localStorage.setItem('userPassword', values.password);
                    }

                    // Redirect after a short delay
                    setTimeout(() => navigate('/projects'), 3000);
                } else {
                    setFormStatus({ type: 'error', message: response.message });
                }
            } catch (error) {
                console.error("Error caught in form submission:", error.message); // Log the error
                setFormStatus({ type: 'error', message: error.message });
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div>
            <NavBar />

            <div className=' flex flex-col items-center relative '>
                <div className='w-full max-w-md py-0 '>
                    <form onSubmit={formik.handleSubmit} className='flex flex-col bg-[#000000] bg-opacity-10 rounded-xl px-10 py-5 shadow-xl'>
                        <h1 className='text-xl md:text-3xl font-semibold text-[#212B27] text-center p-5'>Login into your Account</h1>
                        <p className='text-[#32403B] text-sm text-center font-light'>
                            Use your account to enjoy all the services without any ads for free!
                        </p>

                        {/* Email Field */}
                        <label className="relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className={`w-full px-3 rounded-xl py-3 my-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                                    } focus:border-gray-500 outline-none`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="flex items-center text-red-600 text-sm mt-1">
                                    <AiOutlineExclamationCircle className="mr-1" />
                                    {formik.errors.email}
                                </div>
                            )}
                        </label>

                        {/* Password Field */}
                        <label className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                className={`w-full px-3 rounded-xl py-3 my-2 border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
                                    } focus:border-gray-500 outline-none`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            <span
                                className="absolute right-3 top-6 cursor-pointer text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </span>
                            {formik.touched.password && formik.errors.password && (
                                <div className="flex items-center text-red-600 text-sm mt-1">
                                    <AiOutlineExclamationCircle className="mr-1" />
                                    {formik.errors.password}
                                </div>
                            )}
                        </label>

                        {/* Remember Me Checkbox */}
                        <label className="flex items-center mt-2">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                                className="mr-2"
                            />
                            <span className="text-sm text-gray-600">Remember Me</span>
                        </label>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`bg-[#30005A] text-white w-full px-3 rounded-xl py-3 my-3 flex items-center justify-center transition-all duration-300 ease-in-out ${loading ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-[#4A007A]'
                                }`}
                        >
                            {loading ? (
                                <AiOutlineLoading3Quarters className="animate-spin h-5 w-5 mr-2" />
                            ) : null}
                            {loading ? 'Logging in...' : 'Login'}
                        </button>

                        {/* Form Status Message */}
                        {formStatus?.type === 'error' && <ErrorMessage message={formStatus.message} />}

                        <p className='text-[#32403B] text-sm text-center font-light mt-4'>
                            Don’t have an account?{' '}
                            <Link to="/signup">
                                <span className='text-[#9370DB] underline cursor-pointer'>Sign Up</span>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
