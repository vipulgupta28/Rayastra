import { Routes, Route } from 'react-router-dom';
import Landing from '../Pages/Landing';
import SignUpPage from '../Pages/SignUpPage';
import CoursesPage from '../Pages/CoursesPage';
import SignUpFormPage from '../Pages/SignUpFormPage';


const AppRoutes:React.FC = () =>{
    return(
        <>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/signupformpage' element={<SignUpFormPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/coursespage' element={<CoursesPage/>}/>


        </Routes>
        </>
    )
}

export default AppRoutes