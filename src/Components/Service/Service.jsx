import { MdArrowOutward } from "react-icons/md";


const Service = () => {
    return (
        <div className="my-14" id="service">
             <div id="about-us" className="lg:max-w-6xl 2xl:max-w-7xl mx-5 md:mx-8 lg:mx-8 xl:mx-auto ">
         <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-5 lg:gap-10 items-center">
           
         <div className="space-y-4">
                <p className="border px-4 py-2 rounded-xl w-fit border-black">Service</p>
                <h2 className=" text-base md:text-2xl lg:text-3xl text-[#1b1950] font-bold leading-9">Empowering Health, <br/> Enriching Lives</h2>
                <p className=" text-justify pr-10 text-xs md:text-sm text-[#605faf]">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>

                <button className="flex gap-3 items-center bg-yellow-400 px-4 py-2 rounded-xl font-semibold text-xs lg:text-base">Appoinment <MdArrowOutward></MdArrowOutward></button>
            </div>

        
            <div className="relative ">
             
                <div className="">
                <img src="../../../src/assets/Rectangle 27-2.png"  className=" rounded-xl " alt="service image"  />
                </div>

                <div className="bg-[#1b1950] text-white w-10/12 md:w-8/12 lg:w-7/12 p-3 lg:p-6 rounded-2xl absolute bottom-2 left-4 md:bottom-6 md:left-8 lg:bottom-6 lg:left-6 opacity-80 ">

                    <div className="flex gap-3 items-end">
                  <div>
                  <h1 className="font-medium text-sm lg:text-base lg:mb-3">Our mission is simple</h1>
                  <p className="text-xs text-[#b6aeae]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                  </div>

                    <span className="bg-yellow-400 rounded-full  p-2 flex justify-center items-center"><MdArrowOutward></MdArrowOutward></span>
                    </div>

                </div>

            </div>

            <div className="relative ">
             
            <div className="">
                <img src="../../../src/assets/Rectangle 27-1.png"  className=" rounded-xl " alt="service image"  />
                </div>
             <div className="bg-[#1b1950] text-white w-10/12 md:w-8/12 lg:w-7/12 p-3 lg:p-6 rounded-2xl absolute bottom-2 left-4 md:bottom-6 md:left-8 lg:bottom-6 lg:left-6 opacity-80 ">
                   <div className="flex gap-3 items-end">
                  <div>
                  <h1 className="font-medium text-sm lg:text-base lg:mb-3">Our mission is simple</h1>
                  <p className="text-xs text-[#b6aeae]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                  </div>

                    <span className="bg-yellow-400 rounded-full  p-2 flex justify-center items-center"><MdArrowOutward></MdArrowOutward></span>
                    </div>
             </div>

         </div>


         <div className="relative ">
             
         <div className="">
                <img src="../../../src/assets/Rectangle 27.png"  className=" rounded-xl " alt="service image"  />
                </div>
            

             <div className="bg-[#1b1950] text-white w-10/12 md:w-8/12 lg:w-7/12 p-3 lg:p-6 rounded-2xl absolute bottom-2 left-4 md:bottom-6 md:left-8 lg:bottom-6 lg:left-6 opacity-80 ">
             <div className="flex gap-3 items-end">
                  <div>
                  <h1 className="font-medium text-sm lg:text-base lg:mb-3">Our mission is simple</h1>
                  <p className="text-xs text-[#b6aeae]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                  </div>

                    <span className="bg-yellow-400 rounded-full  p-2 flex justify-center items-center"><MdArrowOutward></MdArrowOutward></span>
                    </div>
             </div>

         </div>

         </div>
        </div>
        </div>
    );
};

export default Service;