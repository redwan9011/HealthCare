import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../../../src/assets/logo light.png"

const Footer = () => {
    return (
        <div className="bg-[#1b1950] ">
            <footer className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3 text-white  lg:max-w-6xl 2xl:max-w-7xl lg:mx-8 xl:mx-auto mx-5 md:mx-8 py-16">
  <aside className="text-gray-300 space-y-3 text-xs md:text-sm lg:text-base">
    <img src={logo} className="w-14 md:w-16 lg:w-28" alt="" />
    <p>
    123 Main Street Anytown,
      <br />
      USA Postal Code: 12345
    </p>
    <p>Support: support@oyolloo.com <br />
    (Available : 10:00am to 07:00pm)</p>
  </aside>
  <nav className="flex flex-col mt-10">
   
    <a className="link link-hover">Home</a>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Success page</a>
    <a className="link link-hover">Terms and Condition</a>
  </nav>
  <nav className="flex flex-col mt-10">
    
    <a className="link link-hover"> Service</a>
    <a className="link link-hover">Scheduling</a>
    <a className="link link-hover">Contact us</a>
    <a className="link link-hover">patient portal</a>
  </nav>
  <nav className="flex flex-col mt-10">
    
    <a className="link link-hover">Follow us</a>
    <div className="flex items-center gap-3 lg:text-2xl mt-4">
        <FaFacebook></FaFacebook>
        <FaInstagram></FaInstagram>
        <FaLinkedin></FaLinkedin>
        <FaYoutube></FaYoutube>
    </div>
    <p className="mt-6">@docplus 2024</p>
  </nav>
</footer>
        </div>
    );
};

export default Footer;