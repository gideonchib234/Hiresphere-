import React from "react";
import { useNavigate } from "react-router-dom";
import {Briefcase} from "lucide-react";
import {motion} from "framer-motion";

const Header = () => {
    const isAuthenticated = true; 
    const user = { name: "John Doe", role: "employer" }; 
    const navigate = useNavigate();

    return (
        <motion.header
        initial={{ y: -50, opacity: 0}}
        animate= {{y: 0, opacity: 1}}
        transition={{duration: 0.6}}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
         >
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
          </div>
            <span className="text-xl font-bold text-gray-900">Hiresphere</span>
        </div>    
            <div className="flex items-center space-x-6">
                <nav className="hidden md:flex space-x-6">
                    <a onClick={() => navigate("/jobseeker")} className="text-gray-700 hover:text-blue-600 cursor-pointer transition">Find jobs</a>
                     <a onClick={() => {navigate(isAuthenticated && user?.role === "employer"
                        ?"/employer-dashboard"
                        : "/login")}}
                      className="text-gray-700 hover:text-blue-600 cursor-pointer transition"> 
                    For Employers</a>


               </nav> 
                <div className="flex items-center space-x-4">
                     {isAuthenticated ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700">Welcome, {user?.name}</span>
                            <a href={user?.role === "employer"
                                ? "/employer-dashboard"
                                : "/jobseeker-dashboard"
                        
                            }   className="px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition">
                                Dashboard
                            </a>
                        </div>
                     ): (
                        <>
                        <a href="/login"
                            className="text-gray-700 hover:text-gray-6=900 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-50">
                            Login
                        </a>
                        <a href="/signup"
                            className="px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition"> 
                            Sign Up
                        </a>
                        </>
                     )} 
                </div>
            </div>
        </div>
        </div>
        </motion.header>
    );
}

                     
export default Header;  