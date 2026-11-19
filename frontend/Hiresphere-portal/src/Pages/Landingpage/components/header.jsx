import React from "react";
import { useNavigate } from "react-router-dom";
import {Briefcase} from "lucide-react";
import {motion} from "framer-motion";
import { useAuth } from "../../../context/authcontext.jsx";

const Header = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const goToDashboardLogin = () => navigate("/login", {
        state: { from: { pathname: "/jobseeker-dashboard" } },
    });

    return (
        <motion.header
        initial={{ y: -50, opacity: 0}}
        animate= {{y: 0, opacity: 1}}
        transition={{duration: 0.6}}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
         >
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-500">
                  <Briefcase className="h-6 w-6 text-white" />
          </div>
                <span className="text-2xl font-bold text-gray-900">Hiresphere</span>
        </div>    
            <div className="flex items-center space-x-6">
                <nav className="hidden md:flex space-x-6">
                    <a onClick={() => navigate("/jobs")} className="text-gray-700 hover:text-blue-600 cursor-pointer transition">Find jobs</a>
                     <a onClick={() => {navigate(isAuthenticated && user?.role === "employer"
                        ?"/employer-dashboard"
                        : "/login")}}
                      className="text-gray-700 hover:text-blue-600 cursor-pointer transition"> 
                    For Employers</a>


               </nav> 
                <div className="flex items-center space-x-4">
                    {!isAuthenticated && (
                        <>
                            <button onClick={() => navigate("/login")} className="rounded-lg px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600">Login</button>
                            <button onClick={() => navigate("/signup")} className="rounded-lg px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600">Sign Up</button>
                        </>
                    )}
                    <button onClick={goToDashboardLogin} className="rounded-lg bg-linear-to-r from-blue-600 to-purple-600 px-4 py-2 text-white transition hover:from-purple-700 hover:to-indigo-700">
                        Dashboard
                    </button>
                </div>
            </div>
        </div>
        </div>
        </motion.header>
    );
}

                     
export default Header;  