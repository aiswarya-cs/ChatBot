import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./_home/HeroSection";

const index = () => {
  return (
    <div className="bg-black text-white h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default index;
