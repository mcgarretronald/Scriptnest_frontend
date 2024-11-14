import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../Nav';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../../utils/registerUser';
import { AiOutlineLoading3Quarters, AiOutlineExclamationCircle, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';
import ErrorMessage from '../Login/Error';

export default function Signup() {
    const [loading, setLoading] = useState(false);
    const [formStatus, setFormStatus] = useState(null); // Holds error/success message
    const [showPassword, setShowPassword] = useState(false); // Toggle visibility for password
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle visibility for confirm password
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            role: '',
            profilePicture: null, // For file input
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
            role: Yup.string().required('Role is required'),
            profilePicture: Yup.mixed().nullable(), // Optional profile picture
        }),
        onSubmit: async (values) => {
            setLoading(true);
            setFormStatus(null); // Reset form status before submitting
            try {
                const response = await registerUser({
                    email: values.email,
                    password: values.password,
                    role: values.role,
                    profilePicture: values.profilePicture,
                });

                if (response.status === 'success') {
                    setFormStatus({ type: 'success', message: 'Registration successful! Redirecting...' });
                    setTimeout(() => navigate('/projects'), 3000);
                } else {
                    setFormStatus({ type: 'error', message: response.message });
                }
            } catch (error) {
                console.error("Error caught in form submission:", error.message);
                setFormStatus({ type: 'error', message: error.message });
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div>
            <NavBar />

            <div className='flex flex-col items-center relative'>
                <div className='w-full max-w-md py-0'>
                    <form onSubmit={formik.handleSubmit} className='flex flex-col bg-[#000000] bg-opacity-10 rounded-xl px-10 py-2 shadow-xl'>
                        <h1 className='text-xl md:text-3xl font-semibold text-[#212B27] text-center p-2'>Create an Account</h1>
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

                        {/* Confirm Password Field */}
                        <label className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className={`w-full px-3 rounded-xl py-3 my-2 border ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                    } focus:border-gray-500 outline-none`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                            <span
                                className="absolute right-3 top-6 cursor-pointer text-gray-600"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </span>
                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                <div className="flex items-center text-red-600 text-sm mt-1">
                                    <AiOutlineExclamationCircle className="mr-1" />
                                    {formik.errors.confirmPassword}
                                </div>
                            )}
                        </label>

                        {/* Role Field */}
                        <label className="relative">
                            <select
                                name="role"
                                className={`w-full px-3 py-3 my-2 rounded-xl border ${formik.touched.role && formik.errors.role ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 outline-none`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.role}
                            >
                                <option value="">Select Role</option>
                                <option value="scriptwriter">Scriptwriter</option>
                                <option value="producer">Producer</option>
                                <option value="public">Public</option>
                            </select>
                            {formik.touched.role && formik.errors.role && (
                                <div className="flex items-center text-red-600 text-sm mt-1">
                                    <AiOutlineExclamationCircle className="mr-1" />
                                    {formik.errors.role}
                                </div>
                            )}
                        </label>

                        {/* Profile Picture Upload */}
                        <label
                            htmlFor="file-upload"
                            className="w-full cursor-pointer flex items-center justify-center hover:text-white rounded-xl py-3 my-2 border border-gray-300 focus:border-gray-500 hover:bg-[#6A3D96] transition-all duration-300"
                        >
                            <FaCloudUploadAlt className="mr-2" />
                            {formik.values.profilePicture ? formik.values.profilePicture.name : 'Click to upload profile picture'}
                        </label>
                        <input
                            type="file"
                            name="profilePicture"
                            id="file-upload"
                            accept="image/*"
                            className="hidden"
                            onChange={(event) => formik.setFieldValue("profilePicture", event.currentTarget.files[0])}
                        />
                        {formik.touched.profilePicture && formik.errors.profilePicture && (
                            <div className="flex items-center text-red-600 text-sm mt-1">
                                <AiOutlineExclamationCircle className="mr-1" />
                                {formik.errors.profilePicture}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`bg-[#6A3D96] text-white w-full px-3 rounded-xl py-3 my-3 flex items-center justify-center transition-all duration-300 ease-in-out ${loading ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-[#8A55B8]'}`}
                            disabled={loading}
                        >
                            {loading ? (
                                <AiOutlineLoading3Quarters className="animate-spin h-5 w-5 mr-2" />
                            ) : null}
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>

                        {/* Form Status Message */}
                        {formStatus?.type === 'error' && <ErrorMessage message={formStatus.message} />}
                        {formStatus?.type === 'success' && (
                            <div className="text-green-600 mt-4 text-center">{formStatus.message}</div>
                        )}

                        <p className='text-[#32403B] text-sm text-center font-light mt-2'>
                            Already have an account?{' '}
                            <Link to="/login">
                                <span className='text-[#9370DB] underline cursor-pointer'>Login here</span>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
