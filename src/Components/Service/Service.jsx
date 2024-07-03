import { MdArrowOutward } from "react-icons/md";


const Service = () => {
    return (
        <div className="my-10">
             <div id="about-us" className="lg:max-w-6xl 2xl:max-w-7xl mx-auto ">
         <div className="grid grid-cols-2 items-center">
           
         <div className="space-y-4">
                <p className="border px-4 py-2 rounded-xl w-fit border-black">Service</p>
                <h2 className="text-3xl text-[#1b1950] font-bold leading-9">Empowering Health, <br/> Enriching Lives</h2>
                <p className=" text-justify pr-10 text-sm text-[#605faf]">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>

                <button className="flex gap-3 items-center bg-yellow-400 px-4 py-2 rounded-xl font-semibold">Appoinment <MdArrowOutward></MdArrowOutward></button>
            </div>

        
            <div className="relative ">
             
                <div className="p-12">
                <img src="../../../src/assets/Rectangle 27-2.png"  className=" rounded-xl " alt="service image"  />
                </div>
               

                <div className="bg-[#1b1950] text-white w-6/12 p-6 rounded-2xl absolute  bottom-16 left-16 opacity-80 ">

                    <div className="flex gap-3 items-end">
                  <div>
                  <h1 className="font-medium mb-3">Our mission is simple</h1>
                  <p className="text-xs text-[#b6aeae]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                  </div>

                    <span className="bg-yellow-400 rounded-full  p-2 flex justify-center items-center"><MdArrowOutward></MdArrowOutward></span>
                    </div>

                </div>

            </div>

            <div className="relative ">
             
            <div className="p-12">
                <img src="../../../src/assets/Rectangle 27-2.png"  className=" rounded-xl " alt="service image"  />
                </div>
             <div className="bg-[#1b1950] text-white w-6/12 p-6 rounded-2xl absolute  bottom-16 left-16 opacity-80 ">
                   <div className="flex gap-3 items-end">
                  <div>
                  <h1 className="font-medium mb-3">Our mission is simple</h1>
                  <p className="text-xs text-[#b6aeae]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                  </div>

                    <span className="bg-yellow-400 rounded-full  p-2 flex justify-center items-center"><MdArrowOutward></MdArrowOutward></span>
                    </div>
             </div>

         </div>


         <div className="relative ">
             
         <div className="p-12">
                <img src="../../../src/assets/Rectangle 27-2.png"  className=" rounded-xl " alt="service image"  />
                </div>
            

             <div className="bg-[#1b1950] text-white w-6/12 p-6 rounded-2xl absolute  bottom-16 left-16 opacity-80 ">
             <div className="flex gap-3 items-end">
                  <div>
                  <h1 className="font-medium mb-3">Our mission is simple</h1>
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