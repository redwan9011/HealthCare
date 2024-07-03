import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Faq from "../../Components/Faq/Faq";
import Navabar from "../../Components/Navbar/Navabar";
import Offer from "../../Components/Offer/Offer";
import Service from "../../Components/Service/Service";
import Testimonial from "../../Components/Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <div className="">
           
            <Navabar></Navabar>
            <Banner></Banner>


            <AboutUs></AboutUs>

            <Service></Service>
            <Testimonial></Testimonial>
            <Faq></Faq>

            <Offer></Offer>
            
            </div>
        </div>
    );
};

export default Home;