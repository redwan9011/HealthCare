import { MdArrowOutward } from "react-icons/md";
import img from "../../../src/assets/Rectangle 32.png"

const Offer = () => {
    return (
        <div className="lg:max-w-6xl 2xl:max-w-7xl lg:mx-8 xl:mx-auto mx-5 md:mx-8 mt-14 mb-10 rounded-3xl">
            <div
  className="hero md:h-[50vh] lg:h-[60vh] w-full relative"
  style={{
    backgroundImage: `url(${img})`,
  }}>

  <div className="bg-gradient-to-r from-[#020043] to[rgba(177, 175, 216, 1)]   w-full h-full flex flex-col justify-center  ">
        <h1 className="text-white font-semibold text-sm md:text-2xl lg:text-3xl mt-2 md:top-0 lg:leading-10 ml-3 lg:ml-10">Get Your <br />
        First Appointment <br />
        at 50% Off!</h1>

      <div className="flex gap-5 ml-3 lg:ml-10 mt-6 pb-3">
      <button className="flex gap-3 items-center text-sm lg:text-base w-fit bg-yellow-400 px-2  lg:px-4 lg:py-2 rounded-xl font-semibold">Appoinment <MdArrowOutward></MdArrowOutward></button>

<button className="flex gap-3 text-white text-xs lg:text-base  items-center w-fit border border-white px-4 py-2 rounded-xl font-semibold">Learn more <MdArrowOutward></MdArrowOutward></button>
      </div>
  </div>

  <div className="absolute right-4 top-4 md:right-7 md:top-7 lg:right-12 lg:top-12">
        <img src="../../../src/assets/logo dark.png" alt="" className="w-14 md:w-20 lg:w-24"/>
      </div>
</div>



        </div>
    );
};

export default Offer;