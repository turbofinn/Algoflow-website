"use client";
import React, { useState, useEffect } from "react";
import ContactPopup from "./ContactPopup";

const backgroundImages = [
  "/images/bgAI.webp",
  "/images/bg1.webp",
  "/images/bg4.webp",
];

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center font-Inter transition-all duration-1000 ease-in-out mt-20"
      style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
    >
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#4ed35e] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#3D63EA] rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#4ed35e] rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 2xl:p-0">
        <div className="flex flex-col items-center justify-center w-full h-full max-w-5xl mx-auto">
          {/* Centered Content Section */}
          <div className="flex flex-col justify-center items-center text-center gap-12 w-full px-4 md:px-8 lg:px-12">
            {/* Hero Content */}
            <div className="flex flex-col justify-center items-center gap-8 w-full max-w-4xl">
              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white leading-snug tracking-normal">
                  Empowering{" "}
                  <span className="font-extrabold  bg-[#22c55e]  bg-clip-text text-transparent">
                    Businesses
                  </span>
                  <br className="hidden sm:block" />
                  <span className="font-medium text-white">
                    {" "}
                    with Custom AI and Next-Gen Software.
                  </span>
                </h1>
              </div>

              {/* Description */}
              <div className="max-w-3xl">
                <p className="text-base md:text-base lg:text-xl font-normal text-gray-200 leading-relaxed tracking-wide">
                  We assemble elite development teams to turn your ideas into
                  scalable, intelligent software—powered by Algoflow AI.
                </p>
              </div>
            </div>

            {/*  CTA Buttons */}
            <div className="flex flex-col items-center gap-8">
              {/* Button Group */}
              <div className="flex flex-row items-center gap-3 sm:gap-4 w-full max-w-lg justify-center">
                <button
                  className="group relative bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white font-semibold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-out hover:scale-[1.02] flex-1 sm:flex-none min-w-[140px] sm:min-w-[180px]"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="relative z-10">Connect now</span>
                </button>

                <button className="group relative bg-gray-300 border border-white/30 hover:border-white/50 hover:bg-slate-200 text-black font-medium text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 rounded-lg backdrop-blur-sm transition-all duration-200 ease-out hover:scale-[1.02] flex-1 sm:flex-none min-w-[140px] sm:min-w-[180px]">
                  <span className="relative z-10">Learn more</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-row flex-wrap mt-6 justify-center items-center gap-3 sm:gap-6 lg:gap-8 text-gray-300 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse"></div>
                  <span>AI-Powered Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3D63EA] rounded-full animate-pulse"></div>
                  <span>Elite Development Teams</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>Scalable Software</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && <ContactPopup onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
};

export default Hero;
