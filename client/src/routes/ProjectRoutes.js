import { BrowserRouter, Route, Routes } from "react-router-dom";
import  ProtectedRoutes  from "./ProtectedRoutes";
import React from 'react'
import ForgotPassword from "../pages/ForgotPassword.js";
import Login from "../pages/Login.js"
import ResetPassword from "../pages/ResetPassword.js"
import NoPage from '../pages/NoPage.js';
import DashBoard from '../pages/DashBoard.js'
import Home from '../pages/Home.js'
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
