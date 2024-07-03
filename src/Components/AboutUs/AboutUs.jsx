import { MdArrowOutward } from "react-icons/md";

const AboutUs = () => {
    return (
        <div id="about-us" className="lg:max-w-6xl 2xl:max-w-7xl mx-auto my-10">
         <div className="grid grid-cols-2 gap-10 items-center">
            {/* left side */}
         <div className="space-y-4">
                <p className="border px-4 py-2 rounded-xl w-fit border-black">Who we are</p>
                <h2 className="text-3xl text-[#1b1950] font-bold leading-9">We Help To Get <br></br> Soultions</h2>
                <p className=" text-justify pr-10 text-sm text-[#605faf]">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>

                <button className="flex gap-3 items-center bg-yellow-400 px-4 py-2 rounded-xl font-semibold">Learn more <MdArrowOutward></MdArrowOutward></button>
            </div>

            {/* right side */}
            <div className="relative">
                <img src="../../../src/assets/Rectangle 24.png" className="p-12" alt="" />

                <div className="bg-[#1b1950] text-white w-6/12 p-6 rounded-2xl absolute bottom-8 -left-12">
                    <h1 className="font-medium mb-3">Our mission is simple</h1>
                    <p className="text-xs text-[#b6aeae]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>

            </div>
         </div>
        </div>
    );
};

export default AboutUs;