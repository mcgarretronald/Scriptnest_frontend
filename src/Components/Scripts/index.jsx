import { useState, useEffect } from 'react';
import { fetchScripts } from '../../utils/scriptUtils';
import { FaHeart, FaFileAlt } from 'react-icons/fa';

export default function Scripts() {
    const [searchTerm, setSearchTerm] = useState('');
    const [scripts, setScripts] = useState([]);
    const [likedScripts, setLikedScripts] = useState({});
    const [expanded, setExpanded] = useState({});

    useEffect(() => {
        // Fetch scripts when the component mounts
        fetchScripts().then(data => setScripts(data));
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value.toLowerCase());
    };

    const toggleLike = (id) => {
        setLikedScripts(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const toggleExpand = (id) => {
        setExpanded(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const filteredScripts = scripts.filter(script => 
        script.title.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <h1 className="text-[30px] underline text-center font-normal">Trending Scripts of the Week 📚</h1>
            <div className="flex justify-center my-5">
                <form className="flex w-1/2">
                    <input
                        type="text"
                        className="border-2 border-[#8763CD] rounded-[10px] py-2 px-4 w-full"
                        placeholder="Search for scripts..."
                        onChange={handleSearch}
                    />
                </form>
            </div>

            {filteredScripts.length > 0 ? (
                <div className="grid md:grid-cols-4 gap-5 p-5 grid-cols-2">
                    {filteredScripts.map((script) => (
                        <div key={script.script_id} className="border border-gray-300 p-4 rounded-lg relative">
                            {/* Document Icon at the Top of Each Card */}
                            <div className="flex justify-center mb-2">
                                <FaFileAlt className="text-6xl text-gray-500" />
                            </div>

                            <h2 className="text-xl font-semibold text-center">{script.title}</h2>
                            <p className="text-sm text-gray-500">
                                {/* Show preview if not expanded */}
                                {expanded[script.script_id] 
                                    ? script.synopsis 
                                    : `${script.synopsis.slice(0, 100)}...`}
                                
                                <button
                                    onClick={() => toggleExpand(script.script_id)}
                                    className="text-blue-500 ml-2 underline"
                                >
                                    {expanded[script.script_id] ? "Less" : "More"}
                                </button>
                            </p>
                            <p className="text-gray-500 mt-2">Genre: {script.genre}</p>
                            
                            <div className="flex items-center justify-between mt-4">
                                <a 
                                    href={script.google_doc_link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-blue-500 underline"
                                >
                                    View Script
                                </a>
                                <button onClick={() => toggleLike(script.script_id)}>
                                    <FaHeart 
                                        className={`text-2xl ${likedScripts[script.script_id] ? 'text-red-500' : 'text-gray-200'}`} 
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">No scripts found matching {searchTerm}.</p>
            )}
        </div>
    );
}
