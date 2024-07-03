import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#1b1950] ">
            <footer className="grid grid-cols-4  text-white  lg:max-w-6xl 2xl:max-w-7xl mx-auto py-16">
  <aside className="text-gray-300 space-y-3">
    <img src="../../../src/assets/logo light.png" alt="" />
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