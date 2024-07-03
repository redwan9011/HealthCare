import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Navabar from "../../Components/Navbar/Navabar";
import Service from "../../Components/Service/Service";


const Home = () => {
    return (
        <div>
            <div className="">
           
            <Navabar></Navabar>
            <Banner></Banner>


            <AboutUs></AboutUs>

            <Service></Service>
            
            </div>
        </div>
    );
};

export default Home;