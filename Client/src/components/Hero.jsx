"use client"
import React from 'react';
import { useState } from 'react';
import ContactPopup from './ContactPopup';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="h-screen bg-bg1 flex flex-col items-center justify-center font-Inter p-6 2xl:p-0">
            <div className='flex flex-col lg:flex-row items-center justify-center w-full h-full gap-8 max-w-7xl mx-auto'>
                <div className='flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-8 w-full lg:w-1/2 px-4 md:px-8'>
                    <div className='flex flex-col justify-center gap-4 lg:gap-[28px] w-full'>
                        <h1 className='text-3xl md:text-4xl lg:text-[45px] font-light text-black leading-6 md:leading-8 lg:leading-[71px]'>
                            Great <span className='text-3xl md:text-4xl lg:text-[53px] font-extrabold bg-gradient-to-br from-[#4ed35e] to-[#1b6f08] bg-clip-text text-transparent'>Product</span> is
                            <br className='hidden md:block' />
                            <span className='text-3xl md:text-4xl lg:text-[53px] font-extrabold'> built by great <span className='text-3xl md:text-4xl lg:text-[53px] leading-[36px] bg-gradient-to-br from-[#66f78f] to-[#032901] text-transparent bg-clip-text'>teams</span></span>
                        </h1>
                        <p className='text-base md:text-lg font-normal text-black leading-6 md:leading-8 lg:leading-[36px]'>
                            We help build and manage a team of world-class developers to bring your vision to life
                        </p>
                    </div>
                    <button
                        className="bg-[#3D63EA] text-sm text-white w-[175px] h-[52px] px-[30px] py-[19px] rounded"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Let's get Started!
                    </button>
                </div>
                <div className='flex justify-center w-full lg:w-1/2 px-4 md:px-8'>
                    <img src="/Hero-Wrapper__image.png" alt="" className='w-full h-auto max-w-[614px]' />
                </div>
            </div>
            {isModalOpen && <ContactPopup onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}

export default Hero;
