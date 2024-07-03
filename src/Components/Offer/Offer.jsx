import { MdArrowOutward } from "react-icons/md";
import img from "../../../src/assets/Rectangle 32.png"

const Offer = () => {
    return (
        <div className="lg:max-w-6xl 2xl:max-w-7xl mx-auto my-10 rounded-3xl">
            <div
  className="hero h-[60vh] w-full relative"
  style={{
    backgroundImage: `url(${img})`,
  }}>

  <div className="bg-gradient-to-r from-[#020043] to[rgba(177, 175, 216, 1)]   w-full h-full flex flex-col justify-center  ">
        <h1 className="text-white font-semibold text-3xl leading-10 ml-10">Get Your <br />
        First Appointment <br />
        at 50% Off!</h1>

      <div className="flex gap-5 ml-10 mt-6">
      <button className="flex gap-3 items-center w-fit bg-yellow-400 px-4 py-2 rounded-xl font-semibold">Appoinment <MdArrowOutward></MdArrowOutward></button>

<button className="flex gap-3 text-white  items-center w-fit border border-white px-4 py-2 rounded-xl font-semibold">Learn more <MdArrowOutward></MdArrowOutward></button>
      </div>
  </div>

  <div className="absolute right-12 top-12">
        <img src="../../../src/assets/logo dark.png" alt="" />
      </div>
</div>



        </div>
    );
};

export default Offer;