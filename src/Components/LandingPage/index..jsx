import { Link } from "react-router-dom";
export default function LandingPage() {
    return (
        <div className="mx-5  ">
            <div className="grid md:grid-cols-2 lg:mx-10 mx-5">
                <div className="lg:mt-20 mt-10">
                    <h1 className="text-[30px] leading-none font-bold">Fuel Your Scripts.Connect with producers</h1>
                    <h2 className="text-[#8763CD] text-[25px] my-5">Build the Future of Entertainment!</h2>
                    <p className="my-5">Welcome to <span className="text-[#8763CD]">Script Nest</span> the ultimate platform where storytellers meet visionaries. Whether you are a scriptwriter crafting the next blockbuster or a producer seeking the perfect script, we bring your creative worlds together. Pitch ideas, find collaborators, and turn stories into screenplays!</p>
                    <Link to={"/signup"}>
                        <button type="button" className="bg-white text-black py-4 px-8 mt-4 hover:bg-[#9370DB] hover:text-white rounded-[10px]">Get Started</button>
                    </Link>
                </div>
                <div>
                    <img src="/landingpage.png" alt="scripts" className="w-[800px]" />
                </div>
            </div>
            {/* cards */}
            <div className="grid md:grid-cols-3 grid-cols-2 gap-9 mx-0 mt-10">
                <div className="bg-white/25 shadow-lg p-5 backdrop-blur-sm rounded-lg border border-white/20">
                    <h1 className="text-[20px] font-normal mb-3">Discover Stories Waiting to Be Told! 🚀</h1>
                    <p className="font-thin">Dive into a world of creativity—read, review, and get inspired by scripts from talented writers. Your next big idea could be just one script away!</p>
                </div>
                {/* 2nd card */}
                <div className="bg-white/25 shadow-lg p-5 backdrop-blur-sm rounded-lg border border-white/20">
                    <h1 className="text-[20px] font-normal mb-3">Unlock New Worlds of Imagination! 📚</h1>
                    <p className="font-thin">Browse scripts shared by fellow writers, leave feedback, and connect with creators. Explore now and be part of the next great story</p>
                </div>
                {/* 3rd card */}
                <div className="bg-white/25 shadow-lg p-5 backdrop-blur-sm rounded-lg border border-white/20">
                    <h1 className="text-[20px] font-normal mb-3">The Story Library is Open! 🎥</h1>
                    <p className="font-thin">Browse through scripts from other writers—get inspired, leave feedback, or find the perfect project to collaborate on!</p>
                </div>
            </div>
        </div>
    )
}
