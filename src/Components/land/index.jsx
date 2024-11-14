
export default function ProjectsLandingpage() {
    return (
        <div className="py-3 mx-10">
            <h1 className="text-[30px] underline text-center  font-normal">How to Write and Share Your Script</h1>
            <p className="text-[#7250B1] text-center text-sm mt-3">Ready to share your story with the world? Follow these simple steps to post your script for producers and the public to explore!</p>

            <div className=" lg:grid grid-cols-2 p-5 gap-16  mt-8">

                <div className="flex flex-col ">
                    <h2 className="underline font-semibold">Step 1: Use Google Docs to draft your script.</h2>
                    <li className="pl-5 text-sm p-2">When you are ready to share your script, use Google Docs to write it. To done, copy the link to your document and share it with producers and the public.</li>
                    <li className="pl-5 text-sm p-2">Ensure the sharing settings allow anyone with the link to view your script.</li>
                    <li className="pl-5 text-sm p-2">Visit the form on this page and paste the Google Docs link in the designated field.</li>


                    <img src="/sharescript.png" alt="Note"
                        className="shadow-lg border border-gray-400 w-[300px] mx-auto" />
                </div>
                {/* Option 2 */}

                <div className="mt-5">
                    <h2 className="underline font-semibold">Optional: Upload a PDF file.</h2>
                    <p className="p-3">If you prefer, you can upload a PDF version of your script.</p>
                    <p className="text-[#7250B1] text-center text-sm">Note: All uploaded scripts will be free for the public to view, and while we take security seriously, we cannot guarantee the absolute safety of your script.</p>
                    <img src="/pdf.png" alt="pdf" className="w-[200px] mx-auto" />
                </div>


            </div>

        </div>
    )
}
