import React from 'react';
import { Inter } from 'next/font/google';

const Hero = () => {
    return (
        <div className="h-screen bg-bg1 relative overflow-hidden font-Inter">
            <div className=' relative 2xl:h-[546px] 2xl:w-[1145px] h-full w-full 2xl:top-[148px] 2xl:left-[104px]  flex flex-col 2xl:flex-row items-center justify-center p-6 2xl:p-0'>
                <div className=' 2xl:h-[355px] 2xl:w-[531px] h-full w-full  flex flex-col 2xl:justify-between justify-center gap-8'>
                    <div className=' 2xl:w-[531px] 2xl:h-[228px] w-full h-2/3 flex flex-col justify-center items-center 2xl:gap-[28px] gap-[2px]'>
                        <div className=' 2xl:w-[520px] 2xl:h-[142px] w-full h-fit'>
                            <h1 className=' 2xl:text-[45px] text-3xl font-[300px] text-black 2xl:leading-[71px] leading-5'>
                                Great <span className=' 2xl:text-[53px] text-3xl font-extrabold bg-gradient-to-br from-[#4ed35e] to-[#1b6f08] bg-clip-text text-transparent '>Product</span> is
                                <br className=' hidden md:block' />
                                <span className=' 2xl:text-[53px] text-3xl font-extrabold'> built by great <span className=' 2xl:text-[53px] text-3xl leading-[36px] bg-gradient-to-br from-[#66f78f] to-[#032901] text-transparent bg-clip-text'>teams</span> </span>
                            </h1>
                        </div>
                        <p className=' font-[400px] text-[18px] 2xl:leading-[36px] leading-6 text-black'>
                            We help build and manage a team of world-class developers to bring your vision to life
                        </p>
                    </div>
                    <button className="bg-[#3D63EA] flex justify-center items-center  text-sm text-white w-[175px] h-[52px] px-[30px] py-[19px]  rounded transition-colors">Let's get Started!</button>
                </div>
                <div className=' 2xl:h-[546px] 2xl:w-[614px] h-auto w-full '>
                    <img src="/Hero-Wrapper__image.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
