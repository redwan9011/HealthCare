import { MdArrowOutward } from "react-icons/md";
import img from "../../../src/assets/Rectangle 24.png"
const AboutUs = () => {
    return (
        <div id="about-us" className="lg:max-w-6xl 2xl:max-w-7xl mx-5 md:mx-8 lg:mx-8 xl:mx-auto my-10">
         <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-7 lg:gap-10 items-center">
           
         <div className=" md:space-y-2 lg:space-y-4">
                <p className="text-sm lg:text-base border px-4 py-2 rounded-xl w-fit border-black">Who we are</p>
                <h2 className="text-base md:text-2xl lg:text-3xl text-[#1b1950] font-bold lg:leading-9">We Help To Get <br></br> Soultions</h2>
                <p className=" text-justify pr-10 text-xs lg:text-sm text-[#605faf]">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>

                <button className="flex gap-3 items-center bg-yellow-400 px-4 py-2 rounded-xl font-semibold text-sm lg:text-base mt-2">Learn more <MdArrowOutward></MdArrowOutward></button>
            </div>

            
            <div className="relative">
                <img src={img} className="" alt="" />

                <div className="bg-[#1b1950] text-white w-7/12 p-3 lg:p-6 rounded-2xl absolute -bottom-6 md:bottom-5 md:-left-9 lg:bottom-8 lg:-left-12">
                    <h1 className="font-medium mb-3 text-sm lg:text-base">Our mission is simple</h1>
                    <p className="text-xs text-[#b6aeae]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>

            </div>
         </div>
        </div>
    );
};

export default AboutUs;