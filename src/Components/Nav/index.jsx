import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function NavBar() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("Home");

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
        <div className="py-3">
            <nav className='border-2 border-[#8763CD] rounded-[10px] mx-5 py-0 my-0 flex justify-between items-center '>
                <Link to='/' className={`hover:text-[#9370DB] cursor-pointer ${activeTab === 'Home' ? 'text-[#9370DB]' : ''}`}>
                    <div className='text-4xl md:p-3' onClick={() => setActiveTab('Home')}>
                        <img src="/public/scriptnestwhitelogo.png" alt="logo"
                            className="w-[100px]" />
                    </div>
                </Link>

                <ul className='flex md:gap-x-36 gap-x-20'>
                    <li>
                        <Link
                            to='/'
                            className={`hover:text-[#9370DB] cursor-pointer ${activeTab === 'Home' ? 'text-[#9370DB]' : ''}`}
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to='/projects'
                            className={`hover:text-[#9370DB] cursor-pointer ${activeTab === 'Projects' ? 'text-[#9370DB]' : ''}`}
                        >
                            Projects
                        </Link>
                    </li>

                    <li>
                        <Link
                            to='/support'
                            className={`hover:text-[#9370DB] cursor-pointer ${activeTab === 'Support' ? 'text-[#9370DB]' : ''}`}
                        >
                            Support
                        </Link>
                    </li>
                </ul>

                <div className="space-x-2 mr-5">
                    <Link to = '/login'>
                    <h1 className="text-3xl text-[#8763CD]"><FaUser /></h1>
                    </Link>
                    

                </div>
            </nav>

        </div>

    );
}
