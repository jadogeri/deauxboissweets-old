import React, { useState } from "react";
import { Login_1 } from "./Login_1.jsx";
import { Signup_1 } from "./Signup_1.jsx";
import logo from "../assets/logo.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";


const ResetPassword = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="px-4 max-w-7xl mx-auto lg:space-x-20 flex justify-center items-center h-screen">
      <div className="lg:w-[40%]">
      {/* begin */}



      <div>
          <div className="text-center py-4">
            <h1 className="text-7xl font-semibold">Login</h1>
            <p className="font-light text-lg">
              Please login to access our services
            </p>
          </div>
          <form>
            <div className="flex items-center space-x-1 bg-gray-200 rounded-lg p-2">
              <CiUser className="text-xl" />
              <input
                className="bg-transparent w-full outline-none"
                type="text"
                placeholder="username"
              />
            </div>
            <div className="my-4 flex items-center space-x-1 bg-gray-200 rounded-lg p-2">
              <RiLockPasswordLine className="text-xl" />
              <input
                className="bg-transparent w-full outline-none"
                type="password"
                placeholder="password"
              />
            </div>
            <button className="bg-black text-white rounded-lg w-full p-2 mb-4">Login</button>
          </form>
        </div>


      

      {/* end */}
        <div className="pb-4 text-sm flex items-center justify-between">
            <p>{isLogin ? "Don't have an account?" : 'Already have an account?'}</p>
            <button onClick={() => setIsLogin(!isLogin)} className="font-semibold underline">{isLogin ? 'Sign up' : 'Login'}</button>
        </div>
        <div className="flex items-center space-x-4">
          <hr className="w-full" />
          <p className="shrink-0">Login with Others</p>
          <hr className="w-full" />
        </div>

      </div>

      <div className="w-1/2 hidden lg:block">
        <img className="rounded-2xl" src={logo} alt="" />
      </div>
    </div>
  );
};

export default ResetPassword;