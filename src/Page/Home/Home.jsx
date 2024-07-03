import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Faq from "../../Components/Faq/Faq";
import Navabar from "../../Components/Navbar/Navabar";
import Offer from "../../Components/Offer/Offer";
import Service from "../../Components/Service/Service";


const Home = () => {
    return (
        <div>
            <div className="">
           
            <Navabar></Navabar>
            <Banner></Banner>


            <AboutUs></AboutUs>

            <Service></Service>

            <Faq></Faq>

            <Offer></Offer>
            
            </div>
        </div>
    );
};

export default Home;