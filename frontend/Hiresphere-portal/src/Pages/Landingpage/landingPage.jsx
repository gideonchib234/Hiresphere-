import React from "react";
import Header from "./components/header";
import HeroSection from "./components/herosection";

const Landingpage = () => {
    return (
        <div className="min-h-screen mb-[100vh]">
            <Header/>
            <HeroSection/>
            <features/>
        </div>
    );
};

export default Landingpage;   