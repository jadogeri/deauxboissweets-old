/**
 * @author  Joseph Adogeri
 * @since  29-AUG-2024
 * @description Defines protected route for authentication flow
 * @version 1.0.0
 * @access puplic
 */
 
 import { Navigate,  Outlet } from "react-router-dom";

const ProtectedRoutes = () => {

  try{    
     let auth = localStorage.getItem("authKey")
     console.log(auth)
      return(
        !auth  ? <Navigate to= '/login'/> : <Outlet />      
      )
      
  }catch(e){
    console.log(e);
  }
};

export default ProtectedRoutes;

