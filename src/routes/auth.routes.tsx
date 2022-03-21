
import { Route , Routes} from "react-router-dom";



import { SingIn } from "../pages/SingIn";
import { SingUp } from "../pages/SingUp";



export const AuthRoutes = () =>{
  return(
    
    <Routes>
      <Route path="/" element={<SingIn/>}/>
      <Route path="/singup" element={<SingUp/>}/>
    </Routes>
    
  )
}