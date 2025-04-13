"use client";
import React, { useState, useEffect } from 'react';
import ContactPopup from './ContactPopup';

const backgroundImages = [
  "/images/bgAI.jpg",
  "/images/bg1.jpg",
  "/images/bg4.jpg"
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
      className="relative h-screen bg-cover bg-center font-Inter transition-all duration-1000 ease-in-out mt-20"
      style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
    >
      {/* Overlay */}

    
      
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 2xl:p-0">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full gap-8 max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-8 w-full lg:w-1/2 px-4 md:px-8">
            <div className="flex flex-col justify-center gap-4 lg:gap-[28px] w-full">
              <h1 className="text-3xl md:text-4xl lg:text-[45px] font-light text-white leading-6 md:leading-8 lg:leading-[71px]">
              Empowering <span className="text-3xl md:text-4xl lg:text-[53px] font-extrabold bg-gradient-to-br from-[#4ed35e] to-[#1b6f08] bg-clip-text text-transparent">businesses</span>
                <br className="hidden md:block" />
                <span className="text-3xl md:text-4xl lg:text-[53px] font-extrabold"> with custom AI and next-gen software.</span>

              </h1>
              <p className="text-base md:text-lg font-normal text-white leading-6 md:leading-8 lg:leading-[36px]">
              We assemble elite development teams to turn your ideas into scalable, intelligent software—powered by Algoflow AI.             
               </p>
            </div>
            <button
              className="bg-[#3D63EA] text-sm text-white w-[175px] h-[62px] px-[30px] py-[19px] rounded"
              onClick={() => setIsModalOpen(true)}
            >
              Connect now
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center w-full lg:w-1/2 px-4 md:px-8">
            <img
              src="/images/Hero-Wrapper__image.png"
              alt="Hero Illustration"
              className="w-full h-auto max-w-[614px]"
            />
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && <ContactPopup onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
};

export default Hero;
