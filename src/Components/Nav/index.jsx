import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
        <nav className='border-2 border-[#8763CD] rounded-[10px] mx-5 py-0 my-3 flex justify-between items-center'>
            <Link to='/' className={`hover:text-[#9370DB] cursor-pointer ${activeTab === 'Home' ? 'text-[#9370DB]' : ''}`}>
                <h1 className='text-4xl p-3' onClick={() => setActiveTab('Home')}>H-zombie</h1>
            </Link>

            <ul className='flex gap-x-36'>
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
                <h1>Acounts</h1>
                
            </div>
        </nav>
    );
}
