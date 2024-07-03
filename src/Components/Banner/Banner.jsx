import { FaStar } from "react-icons/fa";
import img from "../../../src/assets/Rectangle 5.png"

const Banner = () => {
    return (
        <div >


          <div className="bg-gray-200 pt-10 ">
          <div className="lg:max-w-6xl 2xl:max-w-7xl mx-auto relative ">
                <img src="../../../src/assets/Rectangle 5.png" className="w-full" alt="" />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-35 rounded-[42px]" ></div>
            </div>
          </div>

        <div className=" bg-gradient-to-b from-gray-200 to-white pt-10">
        <div className="grid grid-cols-11 gap-5 lg:max-w-6xl 2xl:max-w-7xl mx-auto  ">
           
           <div className="col-span-2 bg-white shadow-xl p-5 rounded-2xl">
               <h2 className="text-3xl text-[#272568] font-bold">90%</h2>
               <p className="text-sm text-[#575680]">Patient satisfaction rate, reflecting our commitment.</p>
               <img src="../../../src/assets/Group 12.png" className="w-28 mt-4 ml-7" alt="" />
           </div>
           
           <div className="col-span-7">
            <h1 className="text-center text-[#272568] font-bold text-4xl pb-6">Comprehensive Care <br /> for Every Patient</h1>

            <div className="grid grid-cols-3 items-end gap-5">
                <div className="bg-yellow-50  shadow-lg rounded-2xl p-6">
                    <h1 className="text-3xl text-[#272568] font-bold">500+</h1>
                    <p className="text-sm text-[#575680]">Board certified <br /> doctors</p>
                    <div className="flex justify-end">
                    <img src="../../../src/assets/Icons.png" alt="" />
                    </div>
                </div>
                <div>
                <div className=" rounded-2xl p-6 shadow-lg space-y-2">
                    <h1 className="text-3xl text-[#272568] font-bold flex items-center gap-2">4.8 <FaStar className="text-yellow-400"></FaStar> </h1>
                    <p className="text-sm text-[#575680]">Over 20,000 Patient</p>
                    <div className="flex ">
                    <img src="../../../src/assets/Ellipse 10 (1).png" alt="author" />
                    <img src="../../../src/assets/Ellipse 10 (2).png" className="-ml-2" alt="author" />
                    <img src="../../../src/assets/Ellipse 10.png" className="-ml-2"  alt="author" />
                    <img src="../../../src/assets/Ellipse 3.png" className="-ml-2" alt="author" />
                    </div>
                </div>
                </div>
                <div>
                <div className="bg-yellow-50 rounded-2xl p-6">
                    <h1 className="text-3xl text-[#272568] font-bold">$5000</h1>
                    <p className="text-sm text-[#575680]">Money spend
                    for poor patient</p>
                    <div className="flex justify-end">
                    <img src="../../../src/assets/Group.png"  alt="" />
                    </div>
                </div>
                </div>
            </div>
           </div>

           <div className="col-span-2 bg-white shadow-xl p-5 rounded-2xl ">
               <h2 className="text-3xl text-[#272568] font-bold">50+</h2>
               <p className="text-sm text-[#575680]">Free lession video 
               for patient</p>
               <img src="../../../src/assets/Group (1).png" className="w-28 ml-7 mt-12" alt="" />
           </div>

         </div>
        </div>


        </div>
    );
};

export default Banner;