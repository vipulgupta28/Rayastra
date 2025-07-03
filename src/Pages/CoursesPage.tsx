import { ExpandableCardDemo } from "../Components/ChooseCourse";
import Navbar from "../Components/Navbar";

const CoursesPage = () =>{
    return(
        <>
        <div className="bg-black min-h-screen">
            <Navbar/>
            <ExpandableCardDemo/>
        </div>
        
        </>
    )
}

export default CoursesPage;