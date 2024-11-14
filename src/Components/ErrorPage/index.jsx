import { Link } from "react-router-dom";
import { useState } from "react";
import 'animate.css'; // Importing animate.css

export default function NotFoundPage() {
    const [imageHover, setImageHover] = useState(false);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#4c4c9c] via-[#6f6f9f] to-[#9370DB] text-white overflow-hidden">
            {/* Navigation Bar */}
            <nav className="absolute top-0 w-full flex justify-between items-center p-5 z-20">
                <Link to="/">
                    <img src="/public/errorlogo.png" alt="Logo" className="w-[200px]" />
                </Link>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:text-[#9370DB]">Home</Link>
                    
                   
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col justify-center items-center text-center h-full pt-[10%]">
                {/* Page Title */}
                <h1 className="text-6xl font-extrabold tracking-wide animate__animated animate__fadeInDown animate__delay-1s">404</h1>
                
                {/* Subheading with animation */}
                <h2 className="text-3xl font-semibold mt-2 animate__animated animate__fadeInUp animate__delay-2s">Oops! Page Not Found</h2>

                {/* Fun message */}
                <p className="mt-4 text-lg animate__animated animate__fadeIn animate__delay-3s">
                    It looks like you’ve wandered off the map. Let’s get you back on track!
                </p>

                {/* Image with hover effect */}
                <div
                    className="mt-8 relative cursor-pointer animate__animated animate__bounceIn animate__delay-4s"
                    onMouseEnter={() => setImageHover(true)}
                    onMouseLeave={() => setImageHover(false)}
                >
                    <img
                        src="https://i.pinimg.com/736x/b7/f0/db/b7f0db1455d5a1fcfdb41ef6a13822e2.jpg"
                        alt="404 illustration"
                        className={`w-[300px] transition-all duration-300 ease-in-out transform ${imageHover ? "scale-110 rotate-12" : "scale-100"}`}
                    />
                </div>

                {/* Button with animation */}
                <Link to="/" className="mt-10 py-3 px-6 bg-[#9370DB] rounded-xl text-xl hover:bg-[#8a4abf] transition duration-300 ease-in-out animate__animated animate__bounceIn animate__delay-5s">
                    Go Back Home
                </Link>
            </div>

        </div>
    );
}
