import React from "react";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import Feature from "./components/features";
const Landingpage = () => {
    return (
        <div className="min-h-screen mb-[100vh]">
            <Header/>
            <HeroSection/>
            <Feature/>
            <Analytics/>
        </div>
    );
};

export default Landingpage;   