import Footer from "../../Shared/Footer";
import About from "../about/About";
import Achivement from "../achivement/Achivement";
import Slider from "../banner/Slider";
import Contact from "../contact/Contact";
import Notice from "../notice/Notice";






const Home = () => {
    return (
        <div className="">
             <Slider></Slider>
             <About></About>
            <Achivement></Achivement>
            <Notice></Notice>
            <Contact></Contact>
            <Footer></Footer>
           
        
        </div>
    );
};

export default Home;