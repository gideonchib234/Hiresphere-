import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const isAuthenticated = true; 
    const user = { name: "John Doe", role: "employer" }; 
    const navigate = useNavigate();

    return (
        <div className="">
            <div className="">
              <Briefcase className="" />

            </div>
            <span className="">Hiresphere</span>
            <div className="">
                <nav className="">
                    <a onClick={() => navigate("/jobseeker")}>Find jobs</a>
                     <a onClick={() => {navigate(isAuthenticated && user?.role === "employer"
                        ?"/employer-dashboard"
                        : "/login")}}
                      className=""> 
                     For Employers</a>
                </nav> 
                <div className="">
                    {isAuthenticated ? (
                        <div className="">
                            <span className="">{user?.name}</span>
                        </div>
                    ) : (
                        <button onClick={() => navigate("/login")} className="btn btn-primary">Login</button>
                    )}
        </div> 
            </div>
        </div>
    )
}
export default Header;