import { MdArrowOutward } from "react-icons/md";
 import logo from "../../../src/assets/logo dark.png"
const Navabar = () => {
    return (
        <div className="bg-gray-200  " >
          <div className="navbar  lg:max-w-6xl 2xl:max-w-7xl mx-5 lg:mx-auto md:mx-8 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box gap-6 z-[1] mt-3 w-52 p-2 shadow">
        <a className="hover:text-[#272568] delay-200 font-semibold" href="#navbar" >Home</a>
        <a className="hover:text-[#272568] delay-200 font-semibold" href="#service">Service</a>
        <a className="hover:text-[#272568] delay-200 font-semibold" href="#blog">Blog</a>
      <a className="hover:text-[#272568] delay-200 font-semibold" href="#about-us">About Us</a>
  
        
      </ul>
    </div>
    <a className="btn btn-ghost ">
        <img src={logo} className="w-10 sm:w-16 md:w-24" alt="logo" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6">
      <a className="hover:text-[#272568] delay-200 font-semibold">Home</a>
        <a className="hover:text-[#272568] delay-200 font-semibold" href="#service">Service</a>
        <a className="hover:text-[#272568] delay-200 font-semibold" href="#blog">Blog</a>
        <a className="hover:text-[#272568] delay-200 font-semibold" href="#about-us">About Us</a>
    </ul>
  </div>
  <div className="navbar-end">
  <button className="flex items-center gap-2 border border-blue-900 text-xs sm:text-sm  md:text-base px-2 py-1 mr-10 md:px-4 md:py-2 lg:px-5 lg:py-2 rounded-lg md:mr-14 lg:mr-5 xl:mr-0">Appointment <MdArrowOutward  /></button>
  </div>
</div>
        </div>
    );
};

export default Navabar;