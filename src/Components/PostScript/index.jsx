
import { Link } from "react-router-dom"
export default function PostScript() {
    return (
        <div className="bg-[#30005A] text-white p-5 ">
            <h1 className="underline lg:text-[30px] text-[20px] font-semibold text-center">Got a Script of Your Own? Share It with the World! 🚀</h1>
            <div className="grid grid-cols-2  lg:gap-x-[200px] lg:mx-[5%]">
                <section className="mt-10">
                    <p className="text-2xl lg:text-4xl font-bold">Have a script that needs feedback or looking for co-writers to bring your idea to life?</p>
                    <p className="text-[#C4B5ED] text-sm">Post your script and let the creative community review, refine, and collaborate with you</p>
                    <Link to={'/scriptform'}>
                        <button className="bg-[#8763CD] text-white py-4 px-10 mt-4  text-xl hover:bg-[#9370DB] hover:text-white rounded-[10px]">Post a Script</button>

                    </Link>
                </section>
                {/* second part */}
                <section>
                    <img src="/postscript.png" alt="script"  className="w-[1000px]"/>
                </section>
            </div>
        </div>
    )
}
