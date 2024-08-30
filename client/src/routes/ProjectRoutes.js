import { BrowserRouter, Route, Routes } from "react-router-dom";
import  ProtectedRoutes  from "./ProtectedRoutes";
import React from 'react'
import ForgotPassword from "../pages/ForgotPassword.jsx";
import Login from "../pages/Login.jsx"
import ResetPassword from "../pages/ResetPassword.jsx"
import NoPage from '../pages/NoPage.jsx';
import DashBoard from '../pages/DashBoard.jsx'
import Home from '../pages/Home.jsx'
import { Registration } from "../pages/Registration.jsx";


const ProjectRoutes = () => {

  return (
	<BrowserRouter >	
		<Routes >	

			{/* PUBLIC ROUTES */}
			<Route path="/" element={<Home />} index /> 
			<Route path="/resetpassword" element={ <ResetPassword />} /> 
			<Route path="/forgotpassword" element={<ForgotPassword />} /> 
			<Route path="/login" element={<Login />} /> 
			<Route path="*" element={<NoPage />} /> 
			<Route path="/registration" element={<Registration />} /> 


				
			{/* PROTECTED ROUTES */}
    		<Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<DashBoard />} />	
    		</Route>
  		</Routes>
	</BrowserRouter>

  )
}

export default ProjectRoutes
