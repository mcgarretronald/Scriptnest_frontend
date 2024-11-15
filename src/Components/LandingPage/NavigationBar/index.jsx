import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavigationBar() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Update activeTab based on the current path
    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setActiveTab("Home");
                break;
            case "/projects":
                setActiveTab("Projects");
                break;
            case "/support":
                setActiveTab("Support");
                break;
            default:
                setActiveTab("Home");
                break;
        }
    }, [location.pathname]);

    return (
        <nav className="border-2 border-[#8763CD] rounded-[10px] mx-5 py-0 flex justify-between items-center relative">
            {/* Logo Section */}
            <Link to="/" className={`hover:text-[#9370DB] cursor-pointer ${activeTab === 'Home' ? 'text-[white]' : ''}`}>
                <div className="text-2xl p-3">
                    <img src="/scriptnestwhitelogo.png" alt="logo" className="w-[100px]" />
                </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-x-28">
                <li>
                    <Link 
                        to="/" 
                        className={`hover:text-[#9370DB] cursor-pointer ${activeTab === 'Home' ? 'text-[#9370DB]' : ''}`}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/projects" 
                        className={`hover:text-[#9370DB] cursor-pointer ${activeTab === 'Projects' ? 'text-[#9370DB]' : ''}`}
                    >
                        Projects
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/support" 
                        className={`hover:text-[#9370DB] cursor-pointer ${activeTab === 'Support' ? 'text-[#9370DB]' : ''}`}
                    >
                        Support
                    </Link>
                </li>
            </ul>

            {/* Mobile Menu Button (Hamburger Icon) */}
            <button
                className="md:hidden text-white text-2xl p-3"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Navigation"
            >
                {isMobileMenuOpen ? (
                    <span className="block text-xl ">X</span>
                ) : (
                    <span className="block">☰</span>
                )}
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-0 left-0 w-full bg-white md:hidden flex flex-col items-center py-5 z-10">
                    <ul className="flex flex-col gap-y-4">
                        <li>
                            <Link 
                                to="/" 
                                className={`hover:text-[#9370DB] cursor-pointer ${activeTab === 'Home' ? 'text-[#9370DB]' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/projects" 
                                className={`hover:text-[#9370DB] cursor-pointer ${activeTab === 'Projects' ? 'text-[#9370DB]' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/support" 
                                className={`hover:text-[#9370DB] cursor-pointer ${activeTab === 'Support' ? 'text-[#9370DB]' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            {/* Login/SignUp Buttons */}
            <div className="space-x-4 mr-5 text-white hidden md:flex">
                <Link to="/login">
                    <button type="button" className="px-5 py-2 bg-[#9370DB] rounded-[12px] hover:bg-[#C4B5ED]">
                        Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button type="button" className="px-3 py-2 bg-[#9370DB] rounded-[12px] hover:bg-[#C4B5ED]">
                        Sign Up
                    </button>
                </Link>
            </div>
        </nav>
    );
}
