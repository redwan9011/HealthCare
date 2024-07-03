import img from "../../../src/assets/Rectangle 5.png"

const Banner = () => {
    return (
        <div className="bg-gray-100 pt-10 ">


            <div className="lg:max-w-6xl 2xl:max-w-7xl mx-auto relative ">
                <img src="../../../src/assets/Rectangle 5.png" className="w-full" alt="" />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-35 rounded-[42px]" ></div>
            </div>


        </div>
    );
};

export default Banner;