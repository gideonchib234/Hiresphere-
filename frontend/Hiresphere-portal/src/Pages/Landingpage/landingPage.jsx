import React from "react";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import Analytics from "./components/Analytics";
import Feature from "./components/features";
import Footer from "./components/footer";
const Landingpage = () => {
    return (
        <div className="min-h-screen mb-[100vh]">
            <Header/>
            <HeroSection/>
            <Feature/>
            <Analytics/>
            <Footer/>


        </div>
    );
};

export default Landingpage;   