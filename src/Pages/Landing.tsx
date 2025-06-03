import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import WhoAreWe from "../Components/WhoAreWe";
import Offerings from "../Components/Offerings";
import Testimonials from "../Components/Testimonials";
import Courses from "../Components/Courses";
import Cities from "../Components/cities";
import Updates from "../Components/News";

import Footer from "../Components/Footer";


const Landing = () =>{

  
    
    return(
        <>
        <Navbar/>
        <Hero/>
        <WhoAreWe/>
        <Offerings/>
        <Testimonials/>
        <Courses/>
        <Cities/>
        <Updates/>
  
       <Footer/>
        </>
    )
}
export default Landing